import Feed from '@/components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-centerflex-col'>
    
    <h1 className='head_text text-center'>
    Discover & Share
<br className='max-md:hidden'/>
<span className='orange_gradient text-center' >AI-Powered Prompts</span>



    </h1>
    <p className='desc text-center'>
    
    Chatgpt Prompt is a prompting tool for modern world to control the Chatgpt and be its boss!!
    </p>

    <Feed/>
    
    </section>


  )
}

export default Home