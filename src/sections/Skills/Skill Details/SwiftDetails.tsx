import React from 'react';
import './SkillDetails.css';
import AppStoreButton from '../../../components/AppStoreButton/AppStoreButton';
import LinkButton from '../../../components/LinkButton/LinkButton';

const SwiftDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                In my Stride Sync project, I utilized Swift to develop an iOS app that aggregates track and field meet information from multiple sources. The app integrates various APIs for real-time data, ensuring users have access to the latest schedules, results, and statistics.
            </p>
            <h3 className="mt-4" >Key features implemented using Swift include:</h3>
            <ul>
                <li>
                    <strong>API Integration:</strong> Fetching data from multiple sources using URLSession and Codable.
                </li>
                <li>
                    <strong>Local Storage:</strong> Storing meet IDs and other data using UserDefaults for offline access.
                </li>
                <li>
                    <strong>Location Services:</strong> Utilizing user location to provide relevant meet information.
                </li>
                <li>
                    <strong>Analytics and Ads:</strong> Integrating Google Analytics and Google Ads for tracking and monetization.
                </li>
                <li>
                    <strong>User Interface:</strong> Designing an intuitive UI with SwiftUI, focusing on easy navigation and accessibility.
                </li>
            </ul>
            <p className='mt-8'>
                Check it out here
            </p>
            <div className='skill-details-footer mt-8'>
                <LinkButton name='Stride Sync' link='https://stride-sync.us' />
                <AppStoreButton />
            </div>
        </div>
    );
};

export default SwiftDetails;
