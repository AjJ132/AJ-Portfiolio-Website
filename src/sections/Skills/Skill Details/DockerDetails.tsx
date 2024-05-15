import React from 'react';
import './SkillDetails.css';
import AppStoreButton from '../../../components/AppStoreButton/AppStoreButton';
import LinkButton from '../../../components/LinkButton/LinkButton';
import GithubButton from '../../../components/LinkButton/GithubButton';

const DockerDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                In my projects, I have extensively used Docker for containerizing various components, ensuring consistency and scalability across different environments. This includes the web scraper in Stride Sync and API servers for other projects, including my Software Engineering capstone project, Team Tactics.
            </p>
            <h3 className="mt-4">Key features implemented using Docker include:</h3>
            <ul>
                <li>
                    <strong>Web Scraper:</strong> Containerizing Python scripts for the Stride Sync project, making deployment and scaling easier.
                </li>
                <li>
                    <strong>API Servers:</strong> Deploying API servers in containers for various projects, ensuring a consistent runtime environment.
                </li>
                <li>
                    <strong>Team Tactics:</strong> A team management platform for small clubs and sports teams, utilizing a C# ASP.NET web server for API requests, all containerized for smooth deployment and operation.
                </li>
                <li>
                    <strong>Consistency:</strong> Ensuring consistent development, testing, and production environments using Docker containers.
                </li>
                <li>
                    <strong>Scalability:</strong> Leveraging Docker for easy scaling of services as needed.
                </li>
                <li>
                    <strong>Azure Container Instance:</strong> Maintained the Docker container in Azure Container Instance for seamless deployment and management.
                </li>
            </ul>
            <p className='mt-8'>
                Check it out here
            </p>
            <div className='skill-details-footer mt-8'>
                <GithubButton name='Team Tactics Backend' link='https://github.com/AjJ132/Team-Tactics-Backend' />
            </div>
        </div>
    );
};

export default DockerDetails;