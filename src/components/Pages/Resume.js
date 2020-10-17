import React from 'react';
import resume from '../../images/Resume.pdf';

const Resume = () => (
    <div class="container">
        <h2 className="section-title">Resume</h2>
        <p className="py-3">
            Download my resume <span><a href={resume} download>here</a></span>.
        </p>
        

        <h3 className="mt-3">Skills</h3>
        <ul className="pb-5">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>C++</li>
            <li>SQL</li>
            <li>API's</li>
            <li>MERN Stack</li>
            <li>Bootstrap</li>
            <li>Git</li>
        </ul>

    </div>
);

export default Resume;