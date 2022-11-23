import React from 'react';

const Button = ({ children, classes, handler }) => {
    return (
        <div>
            <button
                onClick={handler}
                className={`hover:text-gray-100 btn bg-gradient-to-r from-cyan-500 to-blue-500e ${classes}`}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;