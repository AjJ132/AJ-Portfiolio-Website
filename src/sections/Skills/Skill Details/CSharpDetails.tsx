import React from 'react';
import './SkillDetails.css';

const CSharpDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                I have extensive experience with C#, having created several API servers including those for Stride Sync and Team Tactics. Additionally, I built an entire machine maintenance system for Haering during my previous internship, which tracks current and past machine maintenance and provides an overview of trends, parts used, and time spent on machines.
            </p>
            <h3 className="mt-4">Key features implemented using C# include:</h3>
            <ul>
                <li>
                    <strong>API Servers:</strong> Developed robust API servers for various projects using C# and ASP.NET, ensuring high performance and scalability.
                </li>
                <li>
                    <strong>Machine Maintenance System:</strong> Built using C#'s Blazor, this system tracks maintenance activities, trends, parts used, and time spent on machines, providing valuable insights for Haering.
                </li>
                <li>
                    <strong>Entity Framework Core:</strong> Utilized extensively for data access, enabling efficient interactions with various databases.
                </li>
                <li>
                    <strong>ASP.NET Identity:</strong> Implemented for user authentication and authorization, ensuring secure access to applications. 
                </li>
            </ul>
        </div>
    );
}

export default CSharpDetails;