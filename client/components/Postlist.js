import { useEffect, useState } from 'react'
import { getPosts, deletePost } from '../services/posts'



function Postlist() {
  const [postList, setPostList] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPostList(allPosts)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      {postList.map((post) => {
        return (
          <div key={post?.id} >
            <h2 className='font-bold p-[1rem]'>{post?.title}</h2>
            <div>{post?.description}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Postlist