
import {BsFillChatDotsFill,BsFillTelephoneFill,BsAlexa ,BsClipboardData,BsReception0,BsSearch} from "react-icons/bs";
import './Inbox.css'


function Inbox() {
  return (
    <>
      <div className="outer-cont">
        <div className="left-sec">
            <button className="one"><BsFillChatDotsFill className="icon"/></button>
            <button className="one"><BsFillTelephoneFill className="icon"/></button>
            <button className="one"><BsAlexa className="icon"/></button>

        </div>
        <div className="chat">
              <div className="chats">
              <div className="chat-part">
                <div className="text-1">
                    <h1>Chats</h1>
                </div>
                <div className="icon-right">
                  <button className="sec-icon"><BsClipboardData className="icon"/></button>
                  <button className="sec-icon"><BsReception0 className="icon"/></button>
                </div>
                </div>
                <input type="text" placeholder="Search or start a new chat" />
              </div>
        </div>
        <div className="msg">
              <h2>Hello</h2>
        </div>
        <div className="profile">
          <h2>Hello</h2>
        </div>
      </div>
      
    </>


  )
}

export default Inbox
