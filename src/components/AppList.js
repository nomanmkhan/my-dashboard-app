import React from 'react';
import "./App.css"

const AppList = ({ apps, onEdit, onDelete }) => {
    return (
        <div className="app-list">
            {apps.map(app => (
                <div key={app.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <div className='app-item-card'>
                        <div>
                            <div className='tag'>Title</div>
                            <h4>{app.name}</h4>
                        </div>
                        <div>
                            <div className='tag'>Description</div>
                            <div>{app.details}</div>
                        </div>
                        <div>
                            <div className='tag'>Subscription</div>
                            <div>{app.subscription}</div>
                        </div>
                    </div>
                    <div className='app-item-btn'>
                        <button onClick={() => onEdit(app)}>Edit</button>
                        <button onClick={() => onDelete(app.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppList;
