// src/pages/Dashboard.js
import React, { useState } from 'react';
import AppList from '../components/AppList'; // Adjust the import path as needed
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component
import AddAppModal from '../components/AddAppModal'; // Create this component
import { useApp } from '../context/AppContext'; // Import the context

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [editApp, setEditApp] = useState(null); // Track the app being edited
    const { apps, createApp, editApp: updateApp, deleteApp } = useApp(); // Use the context

    const handleAddApp = (newApp) => {
        createApp(newApp); // Add the new app using context
        setShowModal(false); // Close the modal after adding
    };

    const handleEditApp = (app) => {
        setEditApp(app); // Set the app to be edited
        setShowModal(true); // Open the modal for editing
    };

    const handleUpdateApp = (updatedApp) => {
        updateApp(updatedApp); // Update the app using context
        setShowModal(false); // Close the modal after updating
        setEditApp(null); // Reset the editing state
    };

    const handleDeleteApp = (id) => {
        deleteApp(id); // Delete the app using context
    };

    return (
        <div>
            <Navbar />
            <div className="dashboard-content">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>Welcome to Your Dashboard</h1>
                    <button style={{ width: "100px", borderRadius: "5px" }} className="add-app-button" onClick={() => {
                        setEditApp(null); // Reset edit state for new app
                        setShowModal(true); // Open modal for adding new app
                    }}>
                        Add App
                    </button>
                </div>
                <div style={{ width: "400px", marginTop: "20px" }}>
                    {
                        apps.length > 0 ?
                            <AppList apps={apps} onEdit={handleEditApp} onDelete={handleDeleteApp} /> :
                            <div>No App Data</div>
                    }
                </div>
                {showModal && (
                    <AddAppModal
                        onAddApp={(data, flag) => flag === "update" ? handleUpdateApp(data) : handleAddApp(data)}
                        onClose={() => setShowModal(false)}
                        editApp={editApp} // Pass the app being edited
                    />
                )}
            </div>
        </div>
    );
};

export default Dashboard;
