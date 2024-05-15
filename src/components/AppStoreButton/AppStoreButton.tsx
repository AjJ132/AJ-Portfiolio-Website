import React from 'react';
import './AppStoreButton.css';
import AppStoreLogo from '../../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

interface AppStoreButtonProps {
    scale?: number; // Add scale prop here
}

declare global {
    interface Window {
        gtag?: (key: string, event: string, options: { event_category: string, event_label: string }) => void;
    }
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ scale = 1 }) => {
    const handleClick = () => {
        window.gtag && window.gtag('event', 'app_store_button_click', {
            'event_category': 'App Store Button',
            'event_label': 'App Store Download'
        });
        
        window.open('https://apps.apple.com/us/app/stride-sync/id6482576370');
    };

    return (
        <button className="app-store-button" style={{ transform: `scale(${scale})` }}>
            <img 
                src={AppStoreLogo} 
                alt="Download on the App Store" 
                className="apple-logo" 
                onClick={handleClick} 
            />
        </button>
    );
};

export default AppStoreButton;
