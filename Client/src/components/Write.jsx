import React from 'react'
import '../css/write.css'

const Write = () => {
  return (
    <div className='write'>
       <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='write-img'/>

       <form className='write-form'>

        <div className='upper-form'>
        <div className='upper-form-left'>
         <img src="/assets/add.png" alt="" className='add' />
         <input type="text" placeholder='Title' className='title'/>
        </div>
        <button>Publish</button>
        </div>

        <textarea name="post-detail" id="" placeholder='Tell your story' cols="30" rows="10" className='text-area'></textarea>
       

        
        </form>
       
    </div>
  )
}

export default Write
