import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Cards from "./Cards";
import NotFound from "./NotFound";
import AddContact from "./AddContact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
};

export default App;
