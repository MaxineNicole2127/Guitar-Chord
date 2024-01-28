import React, { useEffect, useState, useContext } from 'react';

const AppContext = React.createContext();

const API_LINK = 'https://api.uberchord.com/v1/chords/';

const AppProvider = ({children}) => {
    const [guitarChord, setChord] = useState('C');
    return (
        
        <AppContext.Provider value="hello">
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};