import React from 'react';

const ArchiveIcon = (props: {color: string}) => {
    return (
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_518_95)">
                <path d="M0 0.5H18V3.5H0V0.5Z" fill={props.color}/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17 5.5H1V16.5H17V5.5ZM12 9.5H6V11.5H12V9.5Z" fill={props.color}/>
            </g>
            <defs>
                <clipPath id="clip0_518_95">
                    <rect width="18" height="16" fill={props.color} transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>

    );
};

export default ArchiveIcon;
