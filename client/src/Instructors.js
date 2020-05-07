import React from 'react';
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";
import photo4 from "./images/photo4.png";

const Instructors = () => {
    return (
        <div className="instructors" id='instructors'>
        <div className="container">
            <div className="instructors-title">
                 <h1>OUR INSTRUCTORS</h1>
                 <div className='instructors-line'></div>
            </div>
            <div className="instructors-grid">
             <div className="grid-instructor">
                 <div className="grid-instructor-image">
                     <img src={photo1} alt="" className="logo-img"/>
                     <i className="fas fa-plus fa-2x"></i>
                 </div>
                 <div className="grid-instructor-title">
                     <span>Lorem ipsum sit dolor</span>
                 </div>
                 <div className="grid-instructor-text">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quis nobis est quia numquam sequi nulla consectetur distinctio quo enim?</p>
                 </div>
                 <a href="" className="grid-instructor-button"><p>Read more</p></a>
             </div>
             <div className="grid-instructor">
                 <div className="grid-instructor-image">
                     <img src={photo2} alt="" className="logo-img"/>
                     <i className="fas fa-plus fa-2x"></i>
                 </div>
                 <div className="grid-instructor-title">
                     <span>Lorem ipsum sit dolor</span>
                 </div>
                 <div className="grid-instructor-text">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quis nobis est quia numquam sequi nulla consectetur distinctio quo enim?</p>
                 </div>
                 <a href="" className="grid-instructor-button"><p>Read more</p></a>
             </div>
             <div className="grid-instructor">
                 <div className="grid-instructor-image">
                     <img src={photo3} alt="" className="logo-img"/>
                     <i className="fas fa-plus fa-2x"></i>
                 </div>
                 <div className="grid-instructor-title">
                     <span>Lorem ipsum sit dolor</span>
                 </div>
                 <div className="grid-instructor-text">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quis nobis est quia numquam sequi nulla consectetur distinctio quo enim?</p>
                 </div>
                 <a href="" className="grid-instructor-button"><p>Read more</p></a>
             </div>
             <div className="grid-instructor">
                <div className="grid-instructor-image">
                    <img src={photo4} alt="" className="logo-img"/>
                    <i className="fas fa-plus fa-2x"></i>
                </div>
                <div className="grid-instructor-title">
                    <span>Lorem ipsum sit dolor</span>
                </div>
                <div className="grid-instructor-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quis nobis est quia numquam sequi nulla consectetur distinctio quo enim?</p>
                </div>
                <a href="" className="grid-instructor-button"><p>Read more</p></a>
            </div>
         </div>
        </div>
     </div>
    )
}

export default Instructors;