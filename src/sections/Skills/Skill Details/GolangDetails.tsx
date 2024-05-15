import React from 'react';
import './SkillDetails.css';

const GolangDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                In my Stride Sync project, I utilized Golang for the main API server, ensuring efficient interaction with the MongoDB database. Golang's performance and concurrency capabilities were crucial for creating filters and sorting the meets while maintaining a fast average response time of 150ms.
            </p>
            <h3 className="mt-4">Key features implemented using Golang include:</h3>
            <ul>
                <li>
                    <strong>Database Interaction:</strong> Efficiently interacting with MongoDB to fetch and update meet information.
                </li>
                <li>
                    <strong>Filtering and Sorting:</strong> Implementing robust filters and sorting mechanisms for track and field meets data.
                </li>
                <li>
                    <strong>Performance:</strong> Achieving an average response time of 150ms, ensuring a smooth user experience.
                </li>
            </ul>
        </div>
    );
};

export default GolangDetails;
