import React from 'react'
import Title from '../Common/Heading/title/Title'
// import { blog } from '../../dummydata'
import '../Blog/hblog.css';
// const Hblog = () => {
//   return (
//     <>
//       <section className="blog">
//         <div className="container">
//           <Title subtitle='Nuestras Actividades' title='Ultimas Actividades'/>
//           <div className="grid2">
//             {blog.slice(0, 3).map((val) => (
//               <div className='items shadow'>
//                 <div className='img'>
//                   <img src={val.cover} alt='' />
//                 </div>
//                 <div className='text'>
//                   <div className='admin flexSB'>
//                     <span>
//                       {/* <i className='fa fa-user'></i> */}
//                       {/* <label htmlFor=''>{val.type}</label> */}
//                     </span>
//                     <span>
//                       <i className='fa fa-calendar-alt'></i>
//                       <label htmlFor=''>{val.date}</label>
//                     </span>
//                     <span>
//                       {/* <i className='fa fa-comments'></i>
//                       <label htmlFor=''>{val.com}</label> */}
//                     </span>
//                   </div>
//                   <h1>{val.title}</h1>
//                   <p>{val.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

const HBlog = ({ blogs }) => {
  return (
    <section className="hblog">
      <Title subtitle='Nuestras Actividades' title='Ultimas Actividades'/>
      <div className="hblog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="hblog-card">
            <div className="hblog-img">
              <img src={blog.cover} alt={blog.title} />
            </div>
            <div className="hblog-text">
              {/* <span>{blog.date}</span> 
              <h1>{blog.title}</h1>
              <p>{blog.desc}</p>*/}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HBlog;


// export default Hblog
