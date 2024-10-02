import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Preloader duration
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 z-50">
            {/* Travel-themed Animated SVG */}
            <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" fill="none" width="200" height="100">

                    <path id="wavePath" d="M 0 50 Q 50 20 100 50 T 200 50" stroke="#4ADE80" stroke-width="3" fill="none">
                        <animate attributeName="d" values="M 0 50 Q 50 20 100 50 T 200 50;
                                       M 0 50 Q 50 80 100 50 T 200 50;
                                       M 0 50 Q 50 20 100 50 T 200 50;"
                            dur="2s" repeatCount="indefinite" />
                    </path>


                    <g transform="translate(0, 0)">
                        <path d="M 0 0 L 10 5 L 0 10 L 5 5 Z" fill="#FDE047">
                            <animateMotion dur="4s" repeatCount="indefinite">
                                <mpath href="#wavePath" />
                            </animateMotion>
                        </path>
                    </g>


                    <text x="50%" y="90%" text-anchor="middle" font-size="20" fill="#FDE047" font-family="Arial" letter-spacing="2">
                        Triptide
                        <animate attributeName="opacity" values="1; 0.5; 1" dur="2s" repeatCount="indefinite" />
                    </text>
                </svg>



                <p className="mt-4 text-center text-lg">Loading...</p>
            </div>
        </div>
    );
};

export default Preloader;
