import React from 'react';
import './Courses.css';


const Courses = (props) => {
    const handleCourseNum=props.handleCourseNum;
    const {name,instructor,price}=props.course;
    return (
        <div>
            <div className="course-detail">
                <h1>Course Name: {name}</h1>
                <p>Meet your instructor! {instructor}</p>
                <p>Price: {price}</p>
                <button className="enroll-btn" onClick={()=>handleCourseNum(props.course)}>Enroll Now!</button>
            </div>
            </div>
        
        
    );
};

export default Courses;