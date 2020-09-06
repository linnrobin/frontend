import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { fetchProperty } from "../store/actions";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { propertyId } = useParams();
  let property = useSelector((state) => state.property);

  useEffect(() => {
    dispatch(fetchProperty(propertyId));
  }, [dispatch, propertyId]);

  const handleBack = (event) => {
    event.preventDefault();
    history.goBack();
  };

  const handleChat = (event) => {
    event.preventDefault();
    history.push(`/chat/${property.UserId}`);
  };

  return (
    <>
      <div className="container">
        <div
          className="row align-items-center bg-secondary"
          style={{ padding: "10px", alignItem: "center" }}
        >
          <i
            onClick={(e) => handleBack(e)}
            className="fa fa-arrow-left fa-2x text-white"
          ></i>
        </div>

        <div className="row">
          <img
            className="d-block w-100"
            src={property.image}
            alt="Second slide"
          />
        </div>

        <div className="row">
          <div className="col">
            <div className="row align-items-center m-2">
              <h6>{property.bedroom} ROOMS - </h6>
              <h6>{property.bathroom} BATH ROOM - </h6>
              <h6>{property.size} M2</h6>
            </div>
            <div className="row align-items-center m-2">
              <h3>{property.description}</h3>
            </div>
            <div className="col">
              <div className="row justify-content-center m-2">
                <button
                  type="button"
                  className="col-3 btn btn-secondary m-1"
                  style={{ borderRadius: "50px" }}
                >
                  Detail
                </button>
                <button
                  type="button"
                  className="col-3 btn btn-light m-1"
                  style={{ borderRadius: "50px" }}
                >
                  Map
                </button>
                <button
                  type="button"
                  className="col-3 btn btn-light m-1"
                  style={{ borderRadius: "50px" }}
                >
                  Loan
                </button>
              </div>
              <div
                className="row"
                style={{ marginLeft: "50px", marginTop: "20px" }}
              >
                <div className="col-12">
                  <h6 className="text-secondary">Type of Property</h6>
                  <h5 className="strong">{property.type}</h5>
                  <hr />
                </div>
                <div className="col-12">
                  <h6 className="text-secondary">Status</h6>
                  <h5 className="strong">{property.status}</h5>
                  <hr />
                </div>
                <div className="col-12">
                  <h6 className="text-secondary">Certification</h6>
                  <h5 className="strong">{property.certification}</h5>
                  <hr />
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>

        <div className="row">
          <nav
            className="navbar fixed-bottom navbar-light bg-white"
            style={{ paddingTop: "15px", boxShadow: "0px -1px 20px #F0F0F0" }}
          >
            <div className="col-5 ">
              <h6 className="text-secondary" style={{ fontSize: "14px" }}>
                Price Start From:
              </h6>
              <h5 className="strong" style={{ fontSize: "18px" }}>
                {property.price}
              </h5>
            </div>
            <div className="col-7 " align="center">
              <button
                onClick={(e) => handleChat(e)}
                type="button"
                className="btn btn-secondary btn-lg btn-block mt-1 mb-1 p-2"
                style={{ fontSize: "11px" }}
              >
                <i
                  className="fa fa-comment fa-2x bg-secondary text-white"
                  style={{ marginRight: "10px" }}
                ></i>
                CONTACT LANDLORD
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
