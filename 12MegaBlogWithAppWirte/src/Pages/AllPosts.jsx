import React ,{useEffect, useState} from 'react'
import appwirteService from '../appwrite/config'
import { PostCard,Container } from '../components'


function AllPosts() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        appwirteService.getPost([]).then((post)=>{
                setPosts(post.documents)

        }).catch
    },[])
  return (  
    <div className='w-full py-8'>
            <Container>
               <div className='flex flex-wrap'>
                {posts.map((post)=>{
                    <div key={post.$id} className='p-2 w-1/4'> 
                            <PostCard post={post}/>
                     </div>
                })}
               </div>
            </Container>
    </div>
  )
}

export default AllPosts