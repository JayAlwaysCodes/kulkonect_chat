'use client'
import React, {createContext, useEffect, useState}  from "react";

import { useRouter } from "next/navigation";


//internal import
import { CheckIfWalletConnected, connectWallet,connectingWithContract } from "../Utils/apiFeature";


export const KulkonectchatContext = React.createContext();

export const KulkonectchatProvider = ({children})=>{
    //use sate
    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendLists, setFriendLists] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error, setError] = useState("");

    //chat user data
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");

    const router = useRouter();

    //fetch data time of page load
    const fetchData = async()=>{
        try {
            //get contract
            const contract = await connectingWithContract();

            //get account
            const connectAccount = await connectWallet();
            setAccount(connectAccount);

            //get user name
            const userName = await contract.getUsername(connectAccount);
            setUserName(userName);

            //get my friwnd list
            const friendLists = await contract.getMyFriendList();
            setFriendLists(friendLists);

            //get all app user
            const userList = await contract.getAllAppUser();
            setUserLists(userList);

        } catch (error) {
            setError("Please Install and Connect Your Wallet");
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    //read message
    const readMessage = async(friendAddress)=>{
        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        } catch (error) {
            setError("Currently You Have no Message")
        }
    }

    //create account
    const createAccount = async({name, accountAddress})=>{
        try {
            if (name || accountAddress) return setError("Name And AccountAddress cannot be empty");

            const contract = await connectingWithContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();

        } catch (error) {
            setError("Error occured while creating account, please reload the browser");
        }
    }

    //add your friends
    const addFriends = async({name, accountAddress})=>{
        try {
            if(name || accountAddress) return setError("please provide data");

            const contract = await connectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push("/");
            window.location.reload();
        } catch (error) {
            setError("Something went wrong while adding friends, try again");
        }
    }

    //send message to your friend
    const sendMessage = async({msg, address}) =>{
        try {
            if(msg || address) return setError("please Type your Message");

            const contract = await connectingWithContract();
            const addMessage = await contract.sendMessage(address, msg);
            setLoading(true)
            await addMessage.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("please reload and try again");
        }
    }

    //read info
    const readUser = async(userAddress) =>{
        const contract = await connectingWithContract();
        const userName = await contract.getUsername(userAddress);
        setCurrentUserName(userName);
        setCurrentUserAddress(userAddress);
    }

    return(

        <KulkonectchatContext.Provider value={{readMessage, createAccount, addFriends, sendMessage, readUser, connectWallet, CheckIfWalletConnected, account, userName, friendLists,friendMsg, userLists, loading, error, currentUserName, currentUserAddress }}>
            {children}
        </KulkonectchatContext.Provider>
    );
};

