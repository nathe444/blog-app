import React from 'react'
import '../css/SinglePost.css'

const SinglePost = () => {
  return (
    <div>

      <div className='single-post-details'>
      <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='single-post-img'/>

      <div className='details-top'>
      <h1 className='single-post-title'>Lorem ipsum dolor sit amet</h1>

      <div className='single-post-icons-contianer'>
      <img className='single-post-icons' src="/assets/edit.png" alt="" />
      <img className='single-post-icons' src="/assets/trash.png" alt="" />
      
      </div>
      
      </div>

      <div className='details-middle'>
        <p>Author:<span style={{color:"orange"}}>John</span></p>
        <p>1 hour ago</p>
      </div>

      <p className='single-post-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum error deleniti similique nesciunt quas, tenetur, officiis beatae suscipit nulla fugiat consequatur vel neque corrupti quod? Similique eum adipisci eius corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur et ipsum eaque deserunt animi quis tempora recusandae nam quidem. Eos quia recusandae dolor quos ipsa veritatis blanditiis provident debitis saepe. </p>
      

      </div>
     
    </div>
  )
}

export default SinglePost
