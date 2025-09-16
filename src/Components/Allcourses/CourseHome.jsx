import React from "react";
import BackMetodologia from "../../Components/Common/Back/BackMetodologia";
import CoursesCards from "./CoursesCards";
// import OnlineCourses from './OnlineCourses'
import Metodologia from "./Metdologia";
import WspButton from "../WhatsappButton/WspButton";

const CourseHome = () => {
  return (
    <>
      <BackMetodologia title="Nuestra Metodología" />
      <CoursesCards title="Nuestra Metodología" />
      <Metodologia />
      {/* <OnlineCourses /> */}
      <WspButton />
    </>
  );
};

export default CourseHome;
