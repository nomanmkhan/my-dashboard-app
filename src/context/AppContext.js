import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AppContext
const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        // Fetch the apps from a backend service or local storage (for this example, we'll use dummy data)
        const fetchApps = () => {
            // Simulate fetching apps from a backend API
            const dummyApps = [
                { id: 1, name: 'App One', subscription: 'Monthly', details: 'Subscription details here' },
                { id: 2, name: 'App Two', subscription: 'Yearly', details: 'Subscription details here' },
            ];
            setApps(dummyApps);
        };
        fetchApps();
    }, []);

    const createApp = (app) => {
        setApps([...apps, { ...app, }]);
    };

    const editApp = (updatedApp) => {
        setApps(apps.map(app => (app.id === updatedApp.id ? updatedApp : app)));
    };

    const deleteApp = (appId) => {
        setApps(apps.filter(app => app.id !== appId));
    };

    return (
        <AppContext.Provider value={{ apps, createApp, editApp, deleteApp }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
