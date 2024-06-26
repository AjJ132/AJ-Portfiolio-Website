import React from 'react';
import './SkillDetails.css';

const TypeScriptDetails: React.FC = () => {
    return (
        <div className='skill-details-specified'>
            <p>
                Typescript is my go to language for front end development. I have used it in multiple projects including this portfolio website, all my school projects, 
                Stride Sync's home page, and the customer analytics application I built for the Kennesaw State Athletic department to name a few. 
                The type safety that Typescript provides has been instrumental in developing scalable and more importantly easily maintainable applications.
            </p>
            <h3 className="mt-4">Key features implemented using Typescript include:</h3>
            <ul>
                <li>
                    <strong>React Components:</strong> Developed reusable React components using TypeScript, ensuring type safety and consistency across the application.
                </li>
                <li>
                    <strong>State Management:</strong> Utilized TypeScript for state management in React applications, ensuring predictable state changes and improved debugging capabilities.
                </li>
                <li>
                    <strong>Interfaces and Types:</strong> Defined interfaces and types to enforce data structures and improve code readability, reducing errors and enhancing maintainability.
                </li>
                <li>
                    <strong>Custom Hooks:</strong> Created custom hooks using TypeScript to encapsulate logic and provide reusable functionality across a wide range of components.
                </li>
            </ul>
        </div>
    );
}

export default TypeScriptDetails;