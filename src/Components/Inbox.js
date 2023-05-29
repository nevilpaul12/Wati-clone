
import {BsFillChatDotsFill,BsFillTelephoneFill,BsFillPersonFill,BsAlexa ,BsClipboardData,BsReception0,BsSearch} from "react-icons/bs";
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
                    <h1 className="chat-text">Chats</h1>
                </div>
                <div className="icon-right">
                  <button className="sec-icon"><BsClipboardData className="icon"/></button>
                  <button className="sec-icon"><BsReception0 className="icon"/></button>
                </div>
                </div>
                <input type="text" placeholder="Search or start a new chat" className="user-inp"/>
                <div className="avatar-creation">
                  <div className="avatar-pic">
                      <BsFillPersonFill className="user-ava"/>
                  </div>
                  <div className="user-desc">
                    <h4>Nevil Paul</h4>
                    <p className="user-para">Hi there i'm using whatsapp</p>
                  </div>
                  <div className="user-time">
                    <h4 className="timer">24:00</h4>
                  </div>
                </div>
                <div className="avatar-creation">
                  <div className="avatar-pic">
                      <BsFillPersonFill className="user-ava"/>
                  </div>
                  <div className="user-desc">
                    <h4>Nevil Paul</h4>
                    <p className="user-para">Hi there i'm using whatsapp</p>
                  </div>
                  <div className="user-time">
                    <h4 className="timer">24:00</h4>
                  </div>
                </div>
                <div className="avatar-creation">
                  <div className="avatar-pic">
                      <BsFillPersonFill className="user-ava"/>
                  </div>
                  <div className="user-desc">
                    <h4>Nevil Paul</h4>
                    <p className="user-para">Hi there i'm using whatsapp</p>
                  </div>
                  <div className="user-time">
                    <h4 className="timer">24:00</h4>
                  </div>
                </div>
                <div className="avatar-creation">
                  <div className="avatar-pic">
                      <BsFillPersonFill className="user-ava"/>
                  </div>
                  <div className="user-desc">
                    <h4>Nevil Paul</h4>
                    <p className="user-para">Hi there i'm using whatsapp</p>
                  </div>
                  <div className="user-time">
                    <h4 className="timer">24:00</h4>
                  </div>
                </div>
                
              </div>
        </div>
        <div className="msg">
              
        </div>
        <div className="profile">

        <div className="profile-sub">
          <h3>Chat Profile</h3>
          <BsFillPersonFill className="chat-prof"/>
          <h4>Basic Information</h4>
          <h4>Name : </h4>
          <h4>Nevil Paul</h4>
          <h4>Number:</h4>
          <h4>9360306991</h4>

          </div>
        </div>
      </div>
      
    </>


  )
}

export default Inbox
