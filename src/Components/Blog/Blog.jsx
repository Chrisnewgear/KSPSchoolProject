import React from 'react'
import BlogCard from '../Blog/BlogCard'
import Back from '../Common/Back/Back'
import './blog.css'

const Blog = () => {
  return (
    <>
      <Back title='Actividades'/>
      <section className='blog padding'>
        <div className="container grid2">
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
