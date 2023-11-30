import React from 'react'
import Posts from '../../Components/Posts/Posts'
import Photos from '../../Components/Photos/Photos'
import Comments from '../../Components/Comments/Comments'

export default function App() {
  return (
    <div>
      <h2>Posts</h2>
      <Posts />
      <h2>Photos</h2>
      <Photos/>
      <h2>Comments</h2>
      <Comments />
    </div>
  )
}
