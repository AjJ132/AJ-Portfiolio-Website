import React from 'react';
import './SkillDetails.css';

const MongoDBDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                MongoDB has been essential in my projects that require a NoSQL database. 
                Stride Sync's main database is a MongoDB database that stores all the data for the application including meet information, errors, and request information.
                Using its loose structure it has allowed me to quickly prototype and develop applications.
                Ive also taken advantage of MongoDB's geospatial queries to get meets that are close to the user.
            </p>
            <h3 className="mt-4">Key features implemented using MongoDB include:</h3>
            <ul>
                <li><strong>Database Management:</strong> Creating, managing, and querying databases.</li>
                <li><strong>Schemaless Design:</strong> Utilizing MongoDB's schemaless design for flexible data storage.</li>
                <li><strong>Aggregation Pipeline:</strong> Performing complex data transformations using MongoDB's aggregation pipeline
                 to enable complex searches in Stride Sync.
                 </li>
                <li><strong>Geospatial Queries:</strong> Using MongoDB's geospatial queries to get meets that are close to the user in Stride Sync.</li>
                
            </ul>
        </div>
    );
}

export default MongoDBDetails;