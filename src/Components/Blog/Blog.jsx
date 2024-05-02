import React from 'react'
import BlogCard from '../Blog/BlogCard'
import BlogCard2 from '../Blog/BlogCard2'
import Back from '../Common/Back/Back'
import Title from '../Common/Heading/title/Title'
import './blog.css'
import '../WhatsappButton/wspstyles.css'
import WspButton from '../WhatsappButton/WspButton'

const Blog = () => {
  return (
    <>
      <Back title='Actividades'/>
      <section className='blog padding'>
        <Title subtitle="Actividades 2022" title="Clases que Envuelven"/>
        <div className="container grid2">
          <BlogCard />
        </div>
        <h3>Sport class / Anatomia de un pescado</h3>
        
        <div className="container grid2">
          <BlogCard2 />
        </div>
        <h3>Preparándose para escribir y contar</h3>
      </section>
      <WspButton />
    </>
  )
}

export default Blog
