import React, { useState, useEffect } from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://www.raydelto.org/agenda.php');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error al obtener los contactos:', error);
    }
  };

  const addContact = async (contact) => {
    try {
      await fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        body: JSON.stringify(contact),
      });
      alert('Datos enviados exitosamente');
      fetchContacts();
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar los datos');
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Agenda de Contactos</h1>
      <AddContact onAddContact={addContact} />
      <ContactList contacts={contacts} searchTerm={searchTerm} onSearchChange={handleSearchChange} />
    </div>
  );
};

export default App;

