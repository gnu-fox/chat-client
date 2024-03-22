import React from "react";
import './Activity.css';

type Contact = {
    id: string;
    name: string;
    avatar: string;
};

type Activity = {
    isOnline : boolean;
    lastTime : string;
    writting : boolean;
}

const ActivityItem = ({contact, activity} : {contact: Contact, activity: Activity} ) => (
    <div className='activity-item-container'>
        <img className='contact-thumbnail' src={contact.avatar}/>
        <div className='activity-item'>
            <p className='contact-name'>{contact.name}</p>
        </div>    
    </div>
);

export { ActivityItem }