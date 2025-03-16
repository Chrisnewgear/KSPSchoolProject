// import React from 'react'
// import { blog } from '../../dummydata'
// import './blog.css';

// const BlogCard = () => {
//   return (
//     <>
//       {blog.map((val) => (
//         <div className='items shadow blog-card'>
//           <div className='img'>
//             <img src={val.cover} alt='' />
//           </div>
//           {/* <div className='text'>
//             <div className='admin flexSB'>
//               {/* <span>
//                 <i className='fa fa-user'></i>
//                 <label htmlFor=''>{val.type}</label>
//               </span> */}
//               {/* <span>
//                 <i className='fa fa-calendar-alt'></i>
//                 <label htmlFor=''>{val.date}</label>
//               </span> */}
//               {/* <span>
//                 <i className='fa fa-comments'></i>
//                 <label htmlFor=''>{val.com}</label>
//               </span> */}
//             {/* </div> */}
//             {/* <h1>{val.title}</h1>
//             <p>{val.desc}</p> */}
//           {/* </div> */}
//         </div>
//       ))}
//     </>
//   )
// }

// export default BlogCard;



// import React from 'react';
// import './blog.css';

// const BlogCard = ({ item }) => {
//   return (
//     <div className="blog-card">
//       <img src={item.cover} alt={item.title} />
//       <div className="text">
//         <span>{item.date}</span>
//         <h1>{item.title}</h1>
//         <p>{item.desc}</p>
//       </div>
//     </div>
//   );
// }

// export default BlogCard;

import React from 'react';
import './blog.css';

const BlogCard = ({ item }) => {
  return (
    <div className="blog-card">
      <div className="img">
        <img src={item.cover} alt={item.title} />
      </div>
      {/* <div className="text">
        <span>{item.date}</span>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
      </div> */}
    </div>
  );
}

export default BlogCard;