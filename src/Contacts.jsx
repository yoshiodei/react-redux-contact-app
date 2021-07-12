import React from 'react';

const Contacts = ({ contacts }) => {
    return(
        contacts.map((contact, index)=>{
            return(
                <div className="contact__list" key={index}>
                    <p>Name: {contact.name}</p>
                    <p>Phone: {contact.pnum}</p>
                    <p>Location: {contact.loc}</p>
                    <hr />
                </div>
            )
        
        })
    )
        
}

export default Contacts;
