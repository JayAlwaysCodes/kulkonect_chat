'use client'
import React, {useContext, useState, useEffect} from "react";
import  Style  from "./NavBar.module.css";
import { KulkonectchatContext } from "../../context/kulkonectchatContext";
import { Model, Error } from "../index";
import Image from "next/image";
import Link  from "next/link";
import images from "../../assets";

const NavBar = () => {
    const menuItems = [
        {
            menu:"All Users",
            link: "alluser",
        },
        {
            menu:"CHATS",
            link: "/",
        },
        {
            menu:"CONTACTS",
            link: "/",
        },
        {
            menu:"SETTINGS",
            link: "/",
        },
        {
            menu:"FAQS",
            link: "/",
        },
        {
            menu:"TERMS OF USE",
            link: "/",
        },
    ];
    //usestate
    const [active, setActive] = useState(2);
    const [open, setOpen] = useState(false);
    const [openModel, setOpenModel] = useState(false);

    const{account, userName, connectWallet} = useContext(KulkonectchatContext);

    return (
        <div className={Style.NavBar}>
            <div className={Style.NavBar_box}>
                <div className={Style.NavBar_box_left}>
                    <Image src={images.logo} alt="logo" width={50} height={50} />
                </div>
                <div className={Style.NavBar_box_right}>
                    {/* //Desktop */}
                    <div className={Style.NavBar_box_right_menu}>
                        {menuItems.map((el, i)=>(
                            <div onClick={()=> setActive(i + 1)} key={i+1} className={`${Style.NavBar_box_right_menu_items} ${active == i +1 ? Style.active_btn : ""}`}>
                                <Link className={Style.NavBar_box_right_menu_items_link} href={el.link}>
                                    {el.menu}
                                </Link>
                            </div>
                        ))}
                    </div>
                    {/* //Mobile */}
                    {!open && (
                        <div className={Style.nobile_menu}>
                        {menuItems.map((el, i)=>(
                            <div onClick={()=> setActive(i + 1)} key={i+1} className={`${Style.nobile_menu_items} ${active == i +1 ? Style.active_btn : ""}`}>
                                <Link className={Style.nobile_menu_items_link} href={el.link}>
                                    {el.menu}
                                </Link>
                            </div>
                        ))}
                        <p className={Style.mobile_menu_btn}>
                            <Image src={images.close} alt="close" width={50} height={50} onClick={() => setOpen(false)} />
                        </p>
                    </div>
                    )}

                    {/* Connect wallet */}
                    <div className={Style.NavBar_box_right_connect}>
                        {account == "" ? (
                            <button onClick={()=> connectWallet}>
                                {""}
                                <span>Connect Wallet</span>
                            </button>
                        ) : (
                            <button onClick={() => setOpenModel(true)}>
                                {""}
                                <Image src={userName ? images.accountName : images.create2} alt="Account Image" width={20} height={20} />
                                {""}
                                <small>{userName || "Create Account"}</small>
                            </button>
                        )}
                    </div>
                    <div className={Style.NavBar_box_right_open} onClick={() => setOpen(true)}>
                            <Image src={images.open} alt="open" width={30} height={30} />
                    </div>
                </div>
            </div>

        </div>
    );
};


export default NavBar