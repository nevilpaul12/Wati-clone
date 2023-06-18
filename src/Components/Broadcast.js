import React from 'react'
import './Broadcast.css'

function Broadcast() {
  return (
    <div className='broad-main'>
      <div className="broad-left">
            <button className='bulk-button'>Send Bulk Message</button>
      </div>
      <div className="broad-right">
            <div className="template">
              <div className="select-temp">
              
              <select className='drop-down'>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>


                  </div>
              <div className="map">
                  <button className='temp-btn'>Map Variable</button>
                  <br />
                  <textarea cols="30" rows="9" className='text-map'></textarea>
              </div>
              <div className="sample">
                   <button className='temp-btn'>Sample</button>
                   <br />
                   <textarea cols="40" rows="9" className='text-sample'></textarea>
                   <br />
                   <button className='preview'>PREVIEW & SEND</button>
              </div>
            </div>
            <div className="table">
              <div className="sl-no">
                <h4 className='sl-text'>Sl.No</h4>
                <textarea cols="8" rows="30" className='text-3' ></textarea>
              </div>
              <div className="name">
              <h4 className='sl-name'>Name</h4>
                <textarea cols="40" rows="30" className='text-3' ></textarea>
              </div>
              <div className="contact">
              <h4 className='sl-cont'>Contact Number</h4>
                <textarea cols="40" rows="30" className='text-3'></textarea>
              </div>
              <div className="var-1">
              <h4 className='sl-var1'>Variable 1</h4>
                <textarea cols="20" rows="30" className='text-3'></textarea>
              </div>
              <div className="var-2">
              <h4 className='sl-var1'>Variable 2</h4>
                <textarea cols="21" rows="30" className='text-3'></textarea>
              </div>
              <div className="var-3">
              <h4 className='sl-var1'>Variable 3</h4>
                <textarea cols="20" rows="30" className='text-3'></textarea>
              </div>
            </div>
            <div className="upload">
                <input type="text" className='bulk-input' placeholder='Enter Number Here'/>
                <button className='btn-3'>Bulk Upload Contact</button>
            </div>
      </div>

    </div>
  )
}

export default Broadcast
