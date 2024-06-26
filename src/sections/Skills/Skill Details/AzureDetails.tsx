import React from 'react';
import './SkillDetails.css';

const AzureDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                Azure is my go-to cloud service for all my projects. 
                I use Azure for all my web applications and services. Stride Sync's backend is hosted
                on Azure Functions and all of my personal websites are hosted on Azure Static Web App.
                Ive also used Azure for database storage and for hosting Kubernetes clusters for personal learning 
                endeavors. Stride Sync's web scraper while mostly used in an offline environment is deployed in an Azure
                Container Instance in case I cannot run it locally.
            </p>
            <h3 className="mt-4">Key features implemented using Azure include:</h3>
            <ul>
                <li><strong> Azure Functions:</strong> Using Azure Functions for serverless backend services in Stride Sync.</li>
                <li><strong> Azure Static Web Apps:</strong> Hosting all my personal websites on Azure Static Web Apps.</li>
                <li><strong> Azure Database Storage:</strong> Using Azure for database storage in Stride Sync.</li>
                <li><strong> Azure Kubernetes Service:</strong> Hosting Kubernetes clusters for personal learning endeavors.</li>
                <li><strong> Azure Container Instances:</strong> Deploying Stride Sync's web scraper in an Azure Container Instance.</li>
            </ul>
        </div>
    );
}

export default AzureDetails;