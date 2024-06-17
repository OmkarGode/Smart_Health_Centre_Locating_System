
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-100">
            <div className="wave-container relative overflow-hidden">
                <svg
                    className="absolute bottom-0 left-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#FFEEF4"
                        fillOpacity="1"
                        d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,154.7C560,128,640,96,720,85.3C800,75,880,85,960,96C1040,107,1120,117,1200,117.3C1280,117,1360,107,1400,101.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                    ></path>
                </svg>
            </div>
            <div className="py-6 text-black text-center">
                © 2024 Health Hive. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
