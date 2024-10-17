import React, { createContext, useState, useEffect } from "react";

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
    const [selectedFont, setSelectedFont] = useState('Source');

    const fonts = ['Public', 'Source', 'Poppins', 'Nunito'];

    useEffect(() => {
        document.body.className = selectedFont;
    }, [selectedFont]);
    
    return (
        <FontContext.Provider value={{ selectedFont, setSelectedFont, fonts }}>
            {children}
        </FontContext.Provider>
    );
};
