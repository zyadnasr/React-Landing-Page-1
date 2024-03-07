import React from 'react';

const Button = ( { styles } ) => (
    <button type='button' onClick={()=>{window.open('https://www.hoobank.com')}} className={`rounded-[10px] py-4 px-6 bg-transparent font-poppins font-medium text-[18px] text-gradient outline-none border border-[#33bbcf] ${styles}`}>
        Get Started
    </button>
)

export default Button