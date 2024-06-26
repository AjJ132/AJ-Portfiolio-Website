import React, { useState } from 'react';
import SkillCard from './SkillCard';
import './MySkills.css';
import SkillDetails from './SkillDetails';

type MySkillsProps = {
    id: string;
};

const MySkills: React.FC<MySkillsProps> = ({ id }) => {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const [showSelectedSkill, setShowSelectedSkill] = useState<boolean>(false);
    const [detailsOpacity, setDetailsOpacity] = useState<number>(0);

    const handleSkillClick = (skillName: string) => {
       //check if removing the selected skill
        if (selectedSkill === skillName) {
            setDetailsOpacity(0);

            // Wait for the fade out animation to finish
            setTimeout(() => {
                setSelectedSkill(null);
                setShowSelectedSkill(false);
            }, 25);
        } else {
            setSelectedSkill(skillName);
            setShowSelectedSkill(true);

            // Wait for the fade in animation to finish
            setTimeout(() => {
                setDetailsOpacity(1);
            }, 100);
        }
    };

    const skillNames = [
        'JavaScript4', 'TypeScript4', 'React4', 'C#4', 'Golang4', 'Swift4',
        'Python4', 'Docker4', 'Next.js3', 'PostgreSQL3', 'MongoDB3',
        'Google Cloud2', 'Azure2'
    ];

    // Determine the class for the last row based on the number of items
    // Extract the last number from each skillName
    const skillNumbers = skillNames.map(skillName => {
        const match = skillName.match(/\d+$/);
        return match ? match[0] : '';
    });

    // Determine the class for the last row based on the last number of each skillName
    const gridClass = skillNumbers[skillNumbers.length - 1] || '';

    // Mapping of numbers to words
    const numberToWord: Record<string, string> = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        // Add more mappings as needed
    };

    // Group skill names by grid class
    const skillGroups = skillNames.reduce((groups, skillName) => {
        const match = skillName.match(/\d+$/);
        const gridClass = match ? numberToWord[match[0]] : '';
        if (!groups[gridClass]) {
            groups[gridClass] = [];
        }
        groups[gridClass].push(skillName);
        return groups;
    }, {} as Record<string, string[]>);

    return (
        <div id={id} className="skills-section mt-4">
            <div className='section-title pl-8 pr-8'>
                <p>My Skills</p>
                <h1>What I'm Good At</h1>
            </div>
            <div className='section-divider'></div>
            <div className=' pl-8 pr-8 mt-8'>
                <p>click the cards...</p>
            </div>
            <div className={`skills-content ${selectedSkill ? 'detailed' : ''}`}>
                <div className='skills-grid-container' style={{gap: '20px'}}>
                    {Object.entries(skillGroups).map(([gridClass, skillGroup], index) => (
                        <div key={index} className={`skills-grid ${gridClass}`}>
                            {skillGroup.map((skillName, index) => (
                                <SkillCard
                                    key={index}
                                    skillName={skillName}
                                    onClick={() => handleSkillClick(skillName)}
                                    isSelected={selectedSkill === skillName}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {showSelectedSkill && selectedSkill && (
                    <div className="w-full h-full" style={{opacity: detailsOpacity}}>
                       <SkillDetails selectedSkill={selectedSkill} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MySkills;
