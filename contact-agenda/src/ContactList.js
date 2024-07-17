import React from 'react';

const ContactList = ({ contacts, searchTerm, onSearchChange }) => {
  const filteredContacts = contacts.filter(contact => {
    return (
      contact.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.telefono.includes(searchTerm)
    );
  });

  return (
    <div>
      <h2>Buscar Contacto</h2>
      <input 
        type="text" 
        placeholder="Buscar..." 
        value={searchTerm} 
        onChange={onSearchChange}
      />
      <div id="contact-list">
        {filteredContacts.length === 0 ? (
          <p>No hay contactos.</p>
        ) : (
          filteredContacts.map((contact, index) => (
            <div key={index} className="contact">
              {`${contact.nombre} ${contact.apellido} - ${contact.telefono}`}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactList;
