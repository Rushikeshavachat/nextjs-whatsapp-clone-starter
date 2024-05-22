import React, { useState , useEffect} from "react";
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import MessageBar from "./MessageBar";
import { useStateProvider } from "@/context/StateContext";
import ContactsList from "../Chatlist/ContactsList";
function Chat() {
  const [{contactsPage}]=useStateProvider()
  const [pageType , setPageType]=useState("default")
  useEffect(() => {
   if (contactsPage) {
    setPageType("all-contacts")
   }else{
    setPageType("default")
   }
  }, [contactsPage])
  
  return <div className="border-conversation-border border-l max-h-screen max-w-screen-xl bg-conversation-panel-background flex flex-col h-[100vh] z-10">
    { pageType ==="default"  &&
    <>
    <ChatHeader/>
    <ChatContainer/>
    <MessageBar/>
    </>
    }
    { pageType =="all-contacts" && <ContactsList/> }
  </div>
}

export default Chat;
