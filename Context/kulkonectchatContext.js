'use client'
import React, {createContext}  from "react";

import { useRouter } from "next/router";


//internal import
import { CheckIfWalletConnected, connectWallet,connectingWithContract } from "../Utils/apiFeature";

export const KulkonectchatContext = React.createContext();

export const KulkonectchatProvider = ({children})=>{
    

    return(
        <KulkonectchatContext.Provider>
            {children}
        </KulkonectchatContext.Provider>
    );
};

