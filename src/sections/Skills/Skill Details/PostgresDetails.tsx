import React from 'react';
import './SkillDetails.css';

const PostgresDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                In school and in personal projects I have used PostgreSQL as my database of choice. 
                Its performance and wider range of features make it a great choice for projects that require a relational database.
            </p>
            <h3 className="mt-4">Key features implemented using PostgreSQL include:</h3>
            <ul>
                <li><strong>Vector Storage and Retrieval:</strong> Storing and retrieving vectors for machine learning models using pg vector.</li>
                <li><strong>Database Management:</strong> Creating, managing, and querying databases.</li>
                <li><strong>Containerized Databases:</strong> Running PostgreSQL databases in Docker containers and deploying in Kubernetes setups.</li>
                
            </ul>
        </div>
    );
}

export default PostgresDetails;