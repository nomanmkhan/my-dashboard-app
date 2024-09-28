import React, { useState, useEffect } from 'react';
import './AddAppModal.css'; // Optional: Add your modal styles

const AddAppModal = ({ onAddApp, onClose, editApp }) => {
    const [fields, setFields] = useState({
        name: '',
        details: '',
        subscription: ''
    })


    // If editing an app, populate the fields
    useEffect(() => {
        if (editApp) {
            setFields({
                ...editApp
            })
        }
    }, [editApp]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newApp = {
            id: editApp ? editApp.id : Date.now(), // Use the same ID if editing
            ...fields
        };
        onAddApp(newApp, editApp ? 'update' : 'add'); // Call the handler passed as prop
    };

    function setter(e) {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{editApp ? 'Edit App' : 'Add New App'}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        name='name'
                        type="text"
                        placeholder="App Name"
                        value={fields.name}
                        onChange={setter}
                        required
                    />
                    <input
                        name='details'
                        type="text"
                        placeholder="Details"
                        value={fields.details}
                        onChange={setter}

                        required
                    />
                    <select
                        name='subscription'
                        value={fields.subscription}
                        onChange={setter}
                    >
                        <option value={'monthly'}>Monthly</option>
                        <option value={'yearly'}>Yearly</option>
                        <option value={'lifetime'}>LifeTime</option>
                    </select>
                    <div className='modal-btn'>
                        <button type="submit">{editApp ? 'Update App' : 'Add App'}</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAppModal;
