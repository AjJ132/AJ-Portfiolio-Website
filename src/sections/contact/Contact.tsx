import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

interface ContactProps {
    id: string;
}

const Contact: React.FC<ContactProps> = ({id}) => {
    return (
        <div id={id} className='w-full p-8 mt-20 text-white' style={{backgroundColor: 'rgba(31, 31, 31, 0.8)'}}>
             <div className='max-w-7xl mx-auto'>
                <h3 className='text-2xl font-bold mb-6'>Connect With Me</h3>
                <div className='space-y-4'>
                    <div className='flex items-center space-x-4'>
                        <FontAwesomeIcon icon={faEnvelope} size='2x' />
                        <a href="mailto:aj132@icloud.com" target="_blank" rel="noopener noreferrer" className='text-lg'>aj132@icloud.com</a>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <FontAwesomeIcon icon={faPhone} size='2x' />
                        <span className='text-lg'>(706) 436 1212</span>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                        <a href="https://www.linkedin.com/in/alan-johnson-a23819159" target="_blank" rel="noopener noreferrer" className='text-lg'>LinkedIn</a>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <FontAwesomeIcon icon={faGithub} size='2x' />
                        <a href="https://github.com/AjJ132" target="_blank" rel="noopener noreferrer" className='text-lg'>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
