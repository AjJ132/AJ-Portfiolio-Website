import React from 'react';
import './SkillDetails.css';
import AppStoreButton from '../../../components/AppStoreButton/AppStoreButton';
import LinkButton from '../../../components/LinkButton/LinkButton';

const PythonDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                In my Stride Sync project, I utilized Python for web scraping and integrating Azure Functions APIs to update results dynamically without rerunning the script. The Python components are containerized for efficient deployment and scalability.
            </p>
            <h3 className="mt-4">Key features implemented using Python include:</h3>
            <ul>
                <li>
                    <strong>Web Scraping:</strong> Extracting data from various websites using libraries like BeautifulSoup, Scrapy, and ChromeDriver.
                </li>
                <li>
                    <strong>API Integration:</strong> Using Azure Functions APIs to update results dynamically.
                </li>
                <li>
                    <strong>Containerization:</strong> Deploying Python scripts in Docker containers for scalability and ease of management.
                </li>
                <li>
                    <strong>Automated Email Alerts:</strong> Sending alerts for successful and failed attempts using Mailgun API.
                </li>
                <li>
                    <strong>Parallelism:</strong> Utilizing workers and parallel processing to enhance performance.
                </li>
            </ul>
        </div>
    );
};

export default PythonDetails;
