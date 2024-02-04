import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
const AppContext = React.createContext();

const API_LINK = 'https://api.uberchord.com/v1/chords/';

const AppProvider = ({children}) => {
    const [guitarChord, setChord] = useState('C');
    const [strings, setStrings] = useState('3 2 0 0 3 3');
    const [loading, setLoading] = useState(true);
    
    const getChord = async(chord) => {
        setChord(chord);
        try {
            setLoading(true);
            const response = await axios.get(API_LINK + chord);
            setStrings(response.data[0].strings);
            setLoading(false);
        } catch(err) {
            console.error(err);
        }
    }
    
    useEffect(() => {
        getChord('C');
    }, []);
    
    
    
    return (   
        <AppContext.Provider value={{ guitarChord, getChord, loading, strings }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};