import React from 'react'
import '../css/SinglePost.css'
import Sidebar from './Sidebar'
import SinglePost from './SinglePost'
import '../css/Single.css'

const Single = () => {
  return (
    <div>
      <div className="singlepost-and-sidebar">
          <SinglePost />
          <Sidebar />
       </div>
    </div>
  )
}

export default Single
