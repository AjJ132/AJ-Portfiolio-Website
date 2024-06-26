import React from 'react';
import './SkillDetails.css';

const JavaScriptDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                JavaScript is a versatile language that I have used in a variety of projects. I have implemented JavaScript in web applications, 
                and server-side applications. I have used JavaScript to create interactive user interfaces, 
                perform data manipulation, and develop server-side logic.
            </p>
            <h3 className="mt-4">Key features implemented using JavaScript include:</h3>
            <ul>
                <li><strong>Web Development:</strong> Creating interactive user interfaces using React and Next.js.</li>
                <li><strong>Server-Side Logic:</strong> Developing server-side logic using Node.js.</li>
                <li><strong>Data Manipulation:</strong> Performing data manipulation and calculations.</li>
                
            </ul>
        </div>
    );
}

export default JavaScriptDetails;