import React from "react";
import "../Facebook Form/FacebookForm.css";
import ReactForm from "../Facebook Form/ReactHookForm";
import TopLogoBar  from "./TopLogoBar";


const FormBox = () => {
  return (
    <div>
      <TopLogoBar/>
    <div className="body">
      <div className="main-top">
        <div className="main-container">
          <h2>Create a new account</h2>
          <p>It's quick and easy.</p>
          <hr className="border" />
        <ReactForm/>
        </div>  
      </div>
      

    </div>
    </div>
  );
};

export default FormBox;
