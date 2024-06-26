import React from 'react';
import './SkillDetails.css';

const NextJSDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                During my time at my internship at Kennesaw Sate I used Next.js 
                to build a web application to host our customer analytics dashboard.
                It made development and deployment fast and easy with its file based routing and 
                allowing me to easily keep all API logic and HTML serving in one place.
            </p>
            <h3 className="mt-4">Key features implemented using Next.js include:</h3>
            <ul>
                <li><strong>File Based Routing:</strong> Using Next.js's file based routing to easily 
                create new pages and routes.</li>
                <li><strong>API Routes:</strong> Keeping all API logic and HTML serving in one place.</li>

            </ul>
        </div>
    );
}

export default NextJSDetails;