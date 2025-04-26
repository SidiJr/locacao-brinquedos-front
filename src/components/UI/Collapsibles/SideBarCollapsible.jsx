import React, { useState, useRef, useEffect } from 'react';

const SideBarCollapsible = ({ title, children, className = '', startOpen = false }) => {
    const [isOpen, setIsOpen] = useState(startOpen);
    // State to store the actual height of the content
    const [contentHeight, setContentHeight] = useState(0);
    // Ref to the inner content div to measure its scrollHeight
    const contentRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    // Measure content height when it's open or potentially when children change
    useEffect(() => {
        // Only measure if the ref is attached and the section is potentially visible or needs measuring
        if (contentRef.current) {
            // Set the height based on the scrollHeight of the content element
            // We measure even if !isOpen, so we have the height ready *before* the transition starts on open
            setContentHeight(contentRef.current.scrollHeight);
        }
        // Rerun measurement if children change, as height might differ
    }, [children]);

    // Determine icon rotation using state
    const iconRotation = isOpen ? 'rotate-90' : 'rotate-0';

    // Define the style object for the collapsible area
    const contentStyle = {
        maxHeight: isOpen ? `${contentHeight}px` : '0px', // Set max-height dynamically
        overflow: 'hidden', // Crucial for the effect
        transition: ' max-height 0.3s ease-out', // Define transition directly in style
    };

    return (
        <div
            className={`${className}`} // Keep Tailwind for container
        >
            {/* Header/Toggle Button - Still styled with Tailwind */}
            <button
                type="button"
                onClick={toggleOpen}
                aria-expanded={isOpen}
                className="relative flex items-center w-full text-no-wrap gap-4 py-4 rounded-md hover:bg-gray-100/25 transition-colors duration-150 cursor-pointer"
            >
                <div className='absolute p-6 '>
                    <svg
                        // Use Tailwind for icon rotation animation
                        className={`w-5 h-5 text-gray-600 transform w-min transition-transform duration-300 ease-out w-20 ${iconRotation}`}
                        fill="none"
                        stroke="black"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
                <span className="w-full text-center text-xl text-gray-800 font-normal underline">{title}</span>
            </button>

            {/* Collapsible Content Area - Applying style object */}
            <div style={contentStyle}>
                {/* Inner div with ref for height measurement */}
                {/* Tailwind for padding/border is still fine here */}
                <div ref={contentRef} className="p-4">
                    {children}
                </div>
            </div>
        </div >
    );
};



export default SideBarCollapsible;