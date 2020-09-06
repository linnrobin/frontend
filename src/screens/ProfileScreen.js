import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  const handleBack = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <>
      <div className="container">
        <div
          className="row align-items-center bg-secondary text-white"
          style={{ padding: "10px", alignItem: "center" }}
        >
          <div className="col-1">
            <i
              onClick={(e) => handleBack(e)}
              className="fa fa-arrow-left fa-2x"
            ></i>
          </div>
          <div className="col">
            <div className="row justify-content-start">
              <h4 style={{ marginLeft: "30px" }}>Profile</h4>
            </div>
          </div>
          <div className="col-1">
            <i className="fa fa-ellipsis-v fa-2x"></i>
          </div>
        </div>

        <div className="row text-secondary">
          <div className="col justify-content-center m-5" align="center">
            <div className="row justify-content-center">
              <h2>COMING SOON!!!</h2>
            </div>
            <div className="row justify-content-center">
              <i className="fa fa-building fa-5x"></i>
            </div>
            <div className="row justify-content-center m-2">
              <h2>Real Estate Inc App</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
