import React, { createContext, useState } from "react";

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
