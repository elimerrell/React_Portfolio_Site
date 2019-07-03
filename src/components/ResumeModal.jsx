import React from 'react';
import {Modal} from 'react-bootstrap'

const ResumeModal = (props) => {
    return(
    <Modal show={props.showModal} onHide={props.handleClose} dialogClassName="resume-modal">
        <Modal.Header closeButton>
        <Modal.Title>Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <header style={{textAlign: 'center'}}>
                <h4>Eli Merrell</h4>
                <h5>San Jose, CA</h5>
                <p>360-503-8017 </p><p>elijah.merrell@gmail.com</p>
            </header>

            <p>Full stack web developer with a passion for geospatial technology. I have strong skills in data management, a background in Geographic Information Systems (GIS), and have a knack for collaborating with teams. </p>

            <article>
                <div style={{backgroundColor: 'grey', padding: '1px'}}>
                    <h5>Technical Skills</h5>
                </div>
                <h5> Ruby, Rails, JavaScript, React, HTML/CSS, Python, Bash, PostgreSQL, ArcGIS</h5>
            </article>
            <article>
                <div style={{backgroundColor: 'grey', padding: '1px'}}>
                    <h5>Work Experience</h5>
                </div>
                <span><strong>Pulse Secure</strong>, San Jose, CA Software Engineering Intern, May 2019 - Present</span>
                <ul>
                    <li>Refactoring the company’s employee appreciation portal used by 500+ employees worldwide (Ruby on Rails)</li>
                    <li>Integrating React and WebSockets to improve the speed and usability of the Rails application</li>
                    <li>Utilizing Agile methodologies to organize workflows and release features on a weekly basis</li>
                </ul>
                <span><strong>Swinomish Indian Tribal Community</strong>, La Conner, WA GIS Intern, June 2018 - January 2019</span>
                <ul>
                    <li>Used a variety of software to analyze and process geospatial data.</li>
                    <li>Developed web maps to aid in departmental data collection and organization.</li>
                    <li>Wrote Python scripts to scrape data and automate geoprocessing tasks.</li>
                </ul> 
            </article>
            <article>
                <div style={{backgroundColor: 'grey', padding: '1px'}}>
                    <h5>Education</h5>
                </div>
                <div style={{marginTop: '2px'}}>
                    <span><strong>Flatiron School</strong> - Seattle, WA- January 2019 - May 2019</span>
                    <p>Full Stack Web Development, Ruby on Rails, JavaScript and React</p>
                </div>
                <div style={{marginTop: '2px'}}>
                    <span><strong>Western Washington University</strong> - Bellingham, WA- 2017 </span>
                    <p>Bachelors of Science: Environmental Science</p>
                </div>
                <div style={{marginTop: '2px'}}>
                    <span><strong>Western Washington University</strong> - Bellingham, WA- 2017 </span>
                    <p>Certificate: Geographic Information Systems</p>
                </div>
            </article>
        </Modal.Body>
    </Modal>  
    )
}

export default ResumeModal; 
 