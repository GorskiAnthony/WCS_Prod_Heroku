import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [currentUser, setCurrentUser] = React.useState({
    username: "Anthony",
  });
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <button className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">CRM Contact</span>
        </button>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/" className="mr-5 hover:text-gray-900">
            Tout les contacts
          </NavLink>
          <NavLink to="/add" className="mr-5 hover:text-gray-900">
            Ajouter un contact
          </NavLink>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          {currentUser ? `Bonjour ${currentUser.username}` : "Se connecter"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
