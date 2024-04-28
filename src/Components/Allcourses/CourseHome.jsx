import React from 'react'
import Back from '../../Components/Common/Back/Back'
import CoursesCards from './CoursesCards'
import OnlineCourses from './OnlineCourses'
import Metodologia from './Metdologia'
import WspButton from '../WhatsappButton/WspButton'

const CourseHome = () => {
  return (
    <>
      <Back title = 'Nuestra Metodología'/>
      {/* <CoursesCards title = 'Nuestra Metodología'/> */}
      <Metodologia />
      <OnlineCourses />
      <WspButton />
    </>
  )
}

export default CourseHome
