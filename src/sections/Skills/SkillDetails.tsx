// New Component: SkillDetails.tsx
import React from 'react';
import SwiftDetails from './Skill Details/SwiftDetails';
import PythonDetails from './Skill Details/PythonDetails';
import DockerDetails from './Skill Details/DockerDetails';
import GolangDetails from './Skill Details/GolangDetails';
import ReactDetails from './Skill Details/ReactDetails';
import CSharpDetails from './Skill Details/CSharpDetails';
import TypeScriptDetails from './Skill Details/TypeScriptDetails';
import JavaScriptDetails from './Skill Details/JavaScriptDetails';
import PostgresDetails from './Skill Details/PostgresDetails';
import MongoDBDetails from './Skill Details/MongoDBDetails';
import GoogleCloudDetails from './Skill Details/GoogleCloudDetails';
import AzureDetails from './Skill Details/AzureDetails';
import NextJSDetails from './Skill Details/NextJSDetails';

interface SkillDetailsProps {
    selectedSkill: string;
}

const SkillDetails: React.FC<SkillDetailsProps> = ({ selectedSkill }) => {
    let SkillComponent;
    switch (selectedSkill.slice(0, -1)) {
        case 'Swift':
            SkillComponent = SwiftDetails;
            break;
        case 'Python':
            SkillComponent = PythonDetails;
            break;
        case 'Docker':
            SkillComponent = DockerDetails;
            break;
        case 'Golang':
            SkillComponent = GolangDetails;
            break;
        case 'React':
            SkillComponent = ReactDetails;
            break;
        case 'C#':
            SkillComponent = CSharpDetails;
            break;
        case 'TypeScript':
            SkillComponent = TypeScriptDetails
            break;
        case 'JavaScript':
            SkillComponent = JavaScriptDetails
            break;
        case 'PostgreSQL':
            SkillComponent = PostgresDetails
            break;
        case 'MongoDB':
            SkillComponent = MongoDBDetails;
            break;
        case 'Google Cloud':
            SkillComponent = GoogleCloudDetails;
            break;
        case 'Azure':
            SkillComponent = AzureDetails;
            break;
        case 'Next.js':
            SkillComponent = NextJSDetails;
            break;
        default:
            SkillComponent = () => <p>Selected skill details not available.</p>;
    }

    return (
        <div className="skill-details">
            <h2>{selectedSkill.slice(0, -1)}</h2>
            <SkillComponent />
        </div>
    );
};

export default SkillDetails;