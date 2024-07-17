import React, { useState } from 'react';

const AddContact = ({ onAddContact }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { nombre, apellido, telefono };
    onAddContact(newContact);
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <div>
      <h2>Agregar Nuevo Contacto</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input 
          type="text" 
          id="nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />
        <br />
        <label htmlFor="apellido">Apellido:</label>
        <input 
          type="text" 
          id="apellido" 
          value={apellido} 
          onChange={(e) => setApellido(e.target.value)} 
          required 
        />
        <br />
        <label htmlFor="telefono">Teléfono:</label>
        <input 
          type="text" 
          id="telefono" 
          value={telefono} 
          onChange={(e) => setTelefono(e.target.value)} 
          required 
        />
        <br />
        <button type="submit">Agregar Contacto</button>
      </form>
    </div>
  );
};

export default AddContact;
