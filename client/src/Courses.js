import React from 'react';
import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';

export const Courses = () => {
    return (
        <div className="courses" id='courses'>
       <div className="container">
           <div className="courses-title">
                <h1>OUR COURSES</h1>
                <div className='courses-line'></div>
           </div>
           <div className="courses-grid">
            <div className="grid-course">
                <div className="grid-course-image">
                    <img src={photo1} alt="" className="logo-img"/>
                    <i className="fas fa-plus fa-2x"></i>
                </div>
                <div className="grid-course-title">
                    <span>Lorem ipsum sit dolor</span>
                </div>
                <div className="grid-course-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quis nobis est quia numquam sequi nulla consectetur distinctio quo enim?</p>
                </div>
                <a href="" className="grid-course-button"><p>Read more</p></a>
            </div>
            <div className="grid-course">
                <div className="grid-course-image">
                    <img src={photo2} alt="" className="logo-img"/>
                    <i className="fas fa-plus fa-2x"></i>
                </div>
                <div className="grid-course-title">
                    <span>Lorem ipsum sit dolor</span>
                </div>
                <div className="grid-course-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quis nobis est quia numquam sequi nulla consectetur distinctio quo enim?</p>
                </div>
                <a href="" className="grid-course-button"><p>Read more</p></a>
            </div>
            <div className="grid-course">
                <div className="grid-course-image">
                    <img src={photo3} alt="" className="logo-img"/>
                    <i className="fas fa-plus fa-2x"></i>
                </div>
                <div className="grid-course-title">
                    <span>Lorem ipsum sit dolor</span>
                </div>
                <div className="grid-course-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quis nobis est quia numquam sequi nulla consectetur distinctio quo enim?</p>
                </div>
                <a href="" className="grid-course-button"><p>Read more</p></a>
            </div>
        </div>
       </div>
    </div>
    )
};

export default Courses;
