import React from 'react'
import Back from '../../Components/Common/Back/Back'
import CoursesCards from './CoursesCards'
import OnlineCourses from './OnlineCourses'

const CourseHome = () => {
  return (
    <>
      <Back title = 'Nuestra Metodología'/>
      <CoursesCards title = 'Nuestra Metodología'/>
      <OnlineCourses />
    </>
  )
}

export default CourseHome
