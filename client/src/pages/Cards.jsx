import React, { useEffect, useContext } from "react";
import Card from "../components/Card";
import api from "../services/api";
import { ContactContext } from "../context/ContactContext";

const Cards = () => {
  const { contacts, setContacts } = useContext(ContactContext);
  useEffect(() => {
    api
      .get("/api")
      .then((res) => {
        setContacts(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5">
      {(contacts.length > 0 &&
        contacts.map((contact) => <Card key={contact.id} {...contact} />)) ||
        "No contacts found"}
    </div>
  );
};

export default Cards;
