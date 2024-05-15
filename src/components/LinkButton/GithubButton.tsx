import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface GithubButtonProps {
    link: string;
    name: string;
}

const GithubButton: React.FC<GithubButtonProps> = ({ link, name }) => {
    return (
        <button className='gap-4' onClick={() => window.open(link, '_blank')}> 
            <FontAwesomeIcon icon={faGithub} size='2xl'/> 
            {name}
        </button>
    );
};

export default GithubButton;