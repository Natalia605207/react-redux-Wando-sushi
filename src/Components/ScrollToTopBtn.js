import React, { useState, useEffect } from 'react';
import { SlArrowUp } from "react-icons/sl";

export const ScrollToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button onClick={scrollToTop}>
                    <SlArrowUp className="topBtn-icon" />
                </button>
            )}
        </div>
    );
}