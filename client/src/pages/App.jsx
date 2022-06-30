import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Cards from "./Cards";
import NotFound from "./NotFound";
import AddContact from "./AddContact";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
