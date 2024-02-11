import React from 'react'
import '../css/Settings.css'
import Sidebar from './Sidebar'

const Settings = () => {
  return (
    <div className='settings'>

      <div className='update-info'>

      <div className='update-info-top'>
      <h1>Update Your Account</h1>
      <p>Delete Account</p>
      </div>

      <div className='update-info-middle'>
      <p>
      Profile Picture
      </p>
        <div className='profile-container'>


        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  className='profile-picture' />

          <label htmlFor="fileInput">
          <img src="/assets/profile.png" alt="" className='user-icon' />
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
         
        </div>

      </div>

    <div className='update-info-bottom'>
    <p>Username</p>
    <input type="text" className='update-info-input' />
    <p>Email</p>
    <input type="text" className='update-info-input' />
    <p>Password</p>
    <input type="text" className='update-info-input' />
    <button className='update-info-button'>Update</button>
    </div>

    </div>

    <Sidebar />
    </div>
  )
}

export default Settings
