import {useState} from 'react';
import './App.css';
import Contacts from './Contacts';
import ContactsForm from './ContactsForm';

function App() {

  const [contacts, setContacts] = useState([
    {
      name:"Yoshi Odei",
      pnum:"0244-419-419",
      location:"Awoshie"},
      {
        name:"Kazu Odei",
        pnum:"0574-202-464",
        location:"Mallam"},
        {
          name:"Kwesi Odei",
          pnum:"0207-239-097",
          location:"Gbawe"},
  ]);

const handleAdd = (newContact) => {
    setContacts([...contacts, newContact])
}

  return (
    <div className="App">
              <h2>Yoshi's Contact List</h2>
              <ContactsForm handleAdd={handleAdd}/>
              <Contacts contacts={contacts} /> 
    </div>
  );
}

export default App;
