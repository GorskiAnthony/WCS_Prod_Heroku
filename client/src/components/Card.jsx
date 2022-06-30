import React, { useContext } from "react";
import { PhoneIcon, MailIcon, UserRemoveIcon } from "@heroicons/react/solid";
import api from "../services/api";
import { ContactContext } from "../context/ContactContext";
import { toastSuccess, toastError } from "../services/toast";

const Card = ({ id, last_name, first_name, email, phone_number }) => {
  const { contacts, setContacts } = useContext(ContactContext);
  const handleDelete = (userID) => {
    api
      .delete(`/api/delete/${userID}`)
      .then((res) => {
        toastSuccess(res.data.message);
        setContacts(contacts.filter((contact) => contact.id !== userID));
      })
      .catch((err) => {
        toastError(err.response.data.message);
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col">
      <img
        src={`https://robohash.org/${id}.png?size=300x300&set=set1`}
        alt={`${first_name} ${last_name}`}
        className="rounded-lg h-60 w-full bg-gray-200  hover:shadow-lg"
      />
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-bold">
          {first_name} {last_name}
        </h2>
        <span className="relative z-0 inline-flex">
          <a
            href={`mailto:${email}`}
            type="button"
            className="relative inline-flex grow justify-center items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <MailIcon className="w-5 h-5" />
          </a>
          <a
            href={`tel:${phone_number}`}
            type="button"
            className="-ml-px relative inline-flex grow justify-center items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <PhoneIcon className="w-5 h-5" />
          </a>
          <button
            onClick={() => handleDelete(id)}
            type="button"
            className="-ml-px relative inline-flex grow justify-center items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <UserRemoveIcon className="w-5 h-5" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Card;
