import React from 'react';
import './SkillDetails.css';

const GoogleCloudDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                While not much I use Google cloud for Stride Sync's data pipeline. After web scraping takes place I feed Google's
                map geocoding service my meet information and get back the latitude and longitude of the meet. 
                This information is then stored in a MongoDB database and used to get meets that are close to the user using 
                MongoDB's geospatial queries.
            </p>
            <h3 className="mt-4">Key features implemented using Google Cloud include:</h3>
            <ul>
                <li><strong>Google Maps Geocoding:</strong> Using Google's map geocoding service to get the latitude and longitude of meets.</li>

            </ul>
        </div>
    );
}

export default GoogleCloudDetails;