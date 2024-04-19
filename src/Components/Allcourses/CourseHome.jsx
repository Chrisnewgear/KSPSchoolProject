import React from 'react'
import Back from '../../Components/Common/Back/Back'
import CoursesCards from './CoursesCards'
import OnlineCourses from './OnlineCourses'

const CourseHome = () => {
  return (
    <>
      <Back title = 'Nuestro Metodología'/>
      <CoursesCards title = 'Nuestro Metodología'/>
      <OnlineCourses />
    </>
  )
}

export default CourseHome
