import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { fetchProperties } from "../store/actions";

export default () => {
  const history = useHistory();
  const { provinceName, typeName, statusName } = useParams();
  const dispatch = useDispatch();
  let properties = useSelector((state) => state.properties);

  useEffect(() => {
    dispatch(fetchProperties(provinceName, typeName, statusName));
  }, [dispatch, provinceName, typeName, statusName]);

  const handleBack = (event) => {
    event.preventDefault();
    history.goBack();
  };

  const handleDetail = (event, property) => {
    event.preventDefault();
    history.push(`/properties/${property.id}`);
  };

  return (
    <>
      <div className="container">
        <div
          className="row align-items-center"
          style={{ alignItem: "center", marginTop: "10px" }}
        >
          <div className="col-1 m-1 text-secondary" align="end">
            <i
              onClick={(e) => handleBack(e)}
              className="fa fa-arrow-left fa-2x"
            ></i>
          </div>
          <div className="col-8 m-1" align="center">
            <div className="row justify-content-start">
              <input
                type="search"
                style={{ marginLeft: "20px" }}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Rent House at Jakarta Selatan at..."
              />
            </div>
          </div>
          <div className="col-1 text-secondary" align="end">
            <i className="fa fa-search fa-2x"></i>
          </div>
        </div>
        <hr />

        <div className="row text-secondary">
          <div className="col justify-content-center">
            <h6>{properties.length} Homes found at Jakarta Selatan...</h6>
            {properties.map((property, i) => (
              <div className="col" key={i}>
                <div className="row justify-content-center">
                  <img
                    className="d-block w-100"
                    onClick={(e) => handleDetail(e, property)}
                    src={property.image}
                    alt="Second slide"
                  />
                </div>
                <div className="row ">
                  <div className="col ">
                    <div className="row align-items-center m-2">
                      <h6>{property.bedroom} ROOMS - </h6>
                      <h6>{property.bedroom} BATH ROOM - </h6>
                      <h6>{property.size} M2</h6>
                    </div>
                    <div className="row align-items-center m-2">
                      <h3>{property.description}</h3>
                    </div>
                    <div className="row">
                      <h5 className="strong" style={{ fontSize: "18px" }}>
                        {property.price}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row">
          <nav
            className="navbar fixed-bottom navbar-light bg-white text-secondary"
            style={{ paddingTop: "15px", boxShadow: "0px -1px 20px #F0F0F0" }}
          >
            <div
              className="col"
              align="center"
              style={{ borderRight: "3px solid #EEEEEE" }}
            >
              <div className="row justify-content-center align-items-end">
                <i
                  className="fa fa-filter fa-2x"
                  style={{ marginRight: "10px" }}
                ></i>
                <h6>Filter</h6>
              </div>
            </div>
            <div className="col" align="center">
              <div className="row justify-content-center align-items-end">
                <i
                  className="fa fa-sort-amount-asc fa-2x"
                  style={{ marginRight: "10px" }}
                ></i>
                <h6>Sort</h6>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
