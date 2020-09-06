import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { fetchUser } from "../store/actions";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { UserId } = useParams();
  let user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser(UserId));
  }, [dispatch, UserId]);

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
              <h4 style={{ marginLeft: "30px" }}>&#8226; {user.name}</h4>
            </div>
          </div>
          <div className="col-1">
            <i class="fa fa-ellipsis-v fa-2x"></i>
          </div>
        </div>

        <div className="row text-secondary">
          <div className="col justify-content-center m-5" align="center">
            <div className="row justify-content-center">
              <h2>Zzz...</h2>
            </div>
            <div className="row justify-content-center">
              <i class="fa fa-bed fa-5x"></i>
            </div>
            <div className="row justify-content-center m-2">
              <h2>Landlord Offline</h2>
            </div>
            <div className="row justify-content-center">
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
            </div>
          </div>
        </div>

        <div className="row">
          <nav
            className="navbar fixed-bottom navbar-light bg-secondary"
            style={{ paddingTop: "15px", boxShadow: "0px -1px 20px #F0F0F0" }}
          >
            <form className="btn-block">
              <div className="row">
                <div className="col form-group">
                  <input
                    type="message"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Type Message..."
                    style={{ borderRadius: "30px" }}
                  />
                </div>
                <i className="col-2 fa fa-paper-plane-o fa-2x text-white"></i>
              </div>
            </form>
          </nav>
        </div>
      </div>
    </>
  );
};
