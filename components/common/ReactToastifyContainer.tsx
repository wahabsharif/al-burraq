import React from "react";

import { ToastContainer } from "react-toastify";
const ReactToastifyContainer = () => {
  return (
    <ToastContainer
      autoClose={2000}
      position="top-right"
      pauseOnHover={true}
      draggable={true}
      theme="light"
      toastClassName="toast-custom poppins text-sm"
    />
  );
};

export default ReactToastifyContainer;
