import React from 'react'
import './skills.css';

const Skills = () => {
    return (
        <div>
            <section id='skills'>
                <span className='skillTitle'>About Me</span>
                <span className='skillDesc'>As a dedicated frontend developer, I am passionate about creating user-centric web experiences that are both functional and aesthetically pleasing. My skill set includes advanced proficiency in HTML, CSS, and JavaScript, complemented by hands-on modern frameworks such as React. I excel in crafting responsive designs that ensure seamless usability across a variety of devices and screen sizes.
                    My commitment to continuous learning and staying abreast of emerging technologies allows me to innovate and bring fresh perspectives to projects. Whether working independently or within a team, I prioritize clear communication and problem-solving to achieve project goals and deliver outstanding results.
                    Feel free to explore my work and reach out if you have any questions or opportunities for collaboration.</span>
                <div className='skillBars'>
                    <div className='about'>
                        <div class="title">
                            <h4>My Skills</h4>
                            <div class="progress-bars">
                                <div class="progress-bar">
                                    <span>HTML</span>
                                    <progress value="85" max="100">85%</progress>
                                    <span>85%</span>
                                </div>
                                <div class="progress-bar">
                                    <span>CSS</span>
                                    <progress value="80" max="100">80%</progress>
                                    <span>80%</span>
                                </div>
                                <div class="progress-bars">
                                    <span>JAVASCRIPT</span>
                                    <progress value="75" max="100">75%</progress>
                                    <span>75%</span>
                                </div>
                                <div class="progress-bars">
                                    <span>REACT.JS</span>
                                    <progress value="85" max="100">85%</progress>
                                    <span>85%</span>
                                </div>
                                <div class="progress-bars">
                                    <span>REDUX</span>
                                    <progress value="75" max="100">75%</progress>
                                    <span>75%</span>
                                </div>
                                <div class="progress-bars">
                                    <span>NODE.JS</span>
                                    <progress value="50" max="100">50%</progress>
                                    <span>50%</span>
                                </div>
                                <div class="progress-bars">
                                    <span>RESTFUL API</span>
                                    <progress value="80" max="100">80%</progress>
                                    <span>80%</span>
                                </div>
                                <div class="progress-bars">
                                    <span>MySQL</span>
                                    <progress value="85" max="100">85%</progress>
                                    <span>85%</span>
                                </div>
                                <div class="progress-bars">
                                    <span>PYTHON</span>
                                    <progress value="50" max="100">50%</progress>
                                    <span>50%</span>
                                </div>
                                <div class="progress-bars">
                                    <span>C</span>
                                    <progress value="80" max="100">80%</progress>
                                    <span>80%</span>
                                </div>
                                <div class="progress-bars">
                                    <span>C++</span>
                                    <progress value="60" max="100">60%</progress>
                                    <span>60%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
