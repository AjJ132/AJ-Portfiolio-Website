// New Component: SkillDetails.tsx
import React from 'react';
import SwiftDetails from './Skill Details/SwiftDetails';
import PythonDetails from './Skill Details/PythonDetails';
import DockerDetails from './Skill Details/DockerDetails';
import GolangDetails from './Skill Details/GolangDetails';
import ReactDetails from './Skill Details/ReactDetails';
import CSharpDetails from './Skill Details/CSharpDetails';
import TypeScriptDetails from './Skill Details/TypeScriptDetails';

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