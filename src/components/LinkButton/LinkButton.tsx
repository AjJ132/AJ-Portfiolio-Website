import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

interface LinkButtonProps {
    link: string;
    name: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, name }) => {
    return (
        <button className='gap-2' onClick={() => window.open(link, '_blank')}> 
            <FontAwesomeIcon icon={faGlobe} size='xl'/> 
            {name}
        </button>
    );
};

export default LinkButton;