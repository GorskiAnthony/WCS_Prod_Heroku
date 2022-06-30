import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Cards = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/users/random_user?size=10")
      .then((res) => setContacts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5">
      {contacts.map((contact) => (
        <Card key={contact.id} {...contact} />
      ))}
    </div>
  );
};

export default Cards;
