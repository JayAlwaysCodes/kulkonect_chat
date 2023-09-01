'use client'
import React, {createContext}  from "react";

import { useRouter } from "next/router";


//internal import
import { CheckIfWalletConnected, connectWallet,connectingWithContract } from "../Utils/apiFeature";

const KulkonectchatContext = React.createContext();

export const KulkonectchatProvider = ({children})=>{
    const title = "Hey welcome to KulKonect chat App";

    return(
        <KulkonectchatContext.Provider value={{title}}>
            {children}
        </KulkonectchatContext.Provider>
    );
};

export default KulkonectchatContext;