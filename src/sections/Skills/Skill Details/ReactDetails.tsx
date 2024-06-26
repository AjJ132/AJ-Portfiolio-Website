import React from 'react';
import './SkillDetails.css';
import GithubButton from '../../../components/LinkButton/GithubButton';

const ReactDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                I have utilized React with TypeScript extensively in multiple projects, including my capstone project (Team Tactics), my portfolio website, and the Stride Sync website. React's component-based architecture and TypeScript's type safety have been instrumental in developing scalable and maintainable applications.
            </p>
            <h3 className="mt-4">Key features implemented using React include:</h3>
            <ul>
                <li>
                    <strong>Team Tactics:</strong> Implemented providers for abstracted API integration and other logic, ensuring clean and maintainable code. Used complex state management techniques to handle intricate application states.
                </li>
                <li>
                    <strong>Stride Sync Website:</strong> Developed using React and TypeScript to provide a responsive and dynamic user interface, ensuring users have access to the latest track and field meet information.
                </li>
                <li>
                    <strong>Portfolio Website:</strong> Showcased my skills and projects with a professional and responsive design, leveraging React for a seamless user experience.
                </li>
                <li>
                    <strong>Device Support:</strong> Ensured extensive device support using media queries to provide a consistent experience across various screen sizes and devices.
                </li>
            </ul>

            <p className='mt-8'>
                Check it out here
            </p>
            <div className='skill-details-footer mt-8'>
                <GithubButton name='Team Tactics Frontend' link='https://github.com/AjJ132/Team-Tactics-Frontend' />
                <GithubButton name='Portfolio Website' link='https://github.com/AjJ132/AJ-Portfiolio-Website' />
            </div>
        </div>
    );
};

export default ReactDetails;
