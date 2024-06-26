import React, { useState } from 'react';
import './MySkills.css';

type SkillCardProps = {
    skillName: string;
    onClick: () => void;
    isSelected?: boolean;
};

const skillImages: { [key: string]: string } = {
    'C#': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    '.NET': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    'JavaScript': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    'React': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    'TypeScript': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    'Docker': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    'Kubernetes': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
    'Azure': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    'Next.js': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    'PostgreSQL': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    'MSSQL': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    'MongoDB': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    'Golang': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    'HTML': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    'CSS': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    'Python': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    'Swift': "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
    "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
};

const skillColors: { [key: string]: string } = {
    'React': '#61dafb',
    'Swift': '#f05138',
    'C#': '#9d5298',
    '.NET': 'green',
    'JavaScript': '#f0db4f',
    'TypeScript': '#007acc',
    'Docker': '#028bb8',
    'Kubernetes': 'blue',
    'Azure': '#36baee',
    'Next.js': '#FFFFFF',
    'PostgreSQL': '#336791',
    'MSSQL': 'red',
    'MongoDB': '#52a344',
    'Golang': '#6ad7e5',
    'HTML': 'orange',
    'CSS': 'blue',
    'Python': '#3a75a6',
    'Google Cloud': '#ea4535',
};

const SkillCard: React.FC<SkillCardProps> = ({ skillName, onClick, isSelected }) => {
    const [isHovered, setIsHovered] = useState(false);
    const actualSkillName = skillName.replace(/\d+$/, '');
    const skillImage = skillImages[actualSkillName];
    const skillColor = skillColors[actualSkillName];

    return (
        <div
            className={`skill-card ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                boxShadow: isHovered ? `0 0 20px ${skillColor}` : 'none',
            }}
        >
            {skillImage && (
                <img
                    src={skillImage}
                    alt={actualSkillName}
                />
            )}
            {actualSkillName && <h2>{actualSkillName}</h2>}
        </div>
    );
};

export default SkillCard;
