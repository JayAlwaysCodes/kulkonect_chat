
import React, { useContext} from "react";

//internal import
import { KulkonectchatContext } from "../Context/kulkonect_chatContext";

const KulKonectChat = () =>{
    const title = useContext(KulkonectchatContext);
    return (
        <div>{title}</div>
    )
}

export default KulKonectChat;
