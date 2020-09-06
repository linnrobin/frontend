import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  fetchTypes,
  fetchProvinces,
  fetchStatuses,
  fetchProperties,
} from "../store/actions";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let types = useSelector((state) => state.types);
  let provinces = useSelector((state) => state.provinces);
  let statuses = useSelector((state) => state.statuses);
  let properties = useSelector((state) => state.properties);
  const [valueProvince, setValueProvince] = useState("Jakarta Utara");
  const [valueType, setValueType] = useState("House");
  const [valueStatus, setValueStatus] = useState("Rent");

  useEffect(() => {
    dispatch(fetchProvinces());
    dispatch(fetchTypes());
    dispatch(fetchStatuses());
    dispatch(fetchProperties());
  }, [dispatch]);

  const handleFind = (event) => {
    event.preventDefault();
    history.push(`/search/${valueProvince}/${valueType}/${valueStatus}`);
  };

  const handleChangeProvince = (event) => {
    setValueProvince(event.target.value);
  };

  const handleChangeType = (event) => {
    setValueType(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setValueStatus(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    history.push("./search");
  };

  const handleChatLobby = (event) => {
    event.preventDefault();
    history.push("./chatLobby");
  };

  const handleProfile = (event) => {
    event.preventDefault();
    history.push("./profile");
  };

  const handleHistory = (event) => {
    event.preventDefault();
    history.push("./history");
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
          style={{ padding: "10px", alignItem: "center" }}
        >
          <div className="col">
            <h5 className="text-secondary">REAL ESTATE FINDER</h5>
          </div>
          <div className="col-2" align="end">
            <i className="fa fa-bell fa-2x text-secondary"></i>
          </div>
          <div className="col-2" align="end">
            <i className="fa fa-heart fa-2x text-secondary"></i>
          </div>
        </div>

        <div
          className="row"
          style={{ flexWrap: "nowrap", overflow: "auto", marginRight: "5px" }}
        >
          {properties.map((property, i) => (
            <div
              className="card text-white bg-primary m-3"
              key={i}
              onClick={(e) => handleDetail(e, property)}
              style={{
                maxWidth: "18rem",
                borderRadius: "20px",
                flex: "0 0 auto",
                backgroundImage: `url(${property.image})`,
                backgroundSize: "cover",
              }}
            >
              <div className="card-body">
                <br />
                <br />
                <br />
                <br />
                <br />
                <p className="card-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col">
            <form onSubmit={(e) => handleFind(e)}>
              <div className="row align-items-center">
                <div
                  className="col-2"
                  align="center"
                  style={{ padding: "30px" }}
                >
                  <i className="fa fa-map-marker fa-3x text-secondary"></i>
                </div>
                <div
                  className="col"
                  style={{ paddingRight: "30px", paddingLeft: "30px" }}
                >
                  <div className="form-group">
                    <label>Pick Location</label>
                    <select
                      className="form-control"
                      id="provinceName"
                      onChange={handleChangeProvince}
                      value={valueProvince}
                    >
                      {provinces.map((province, i) => (
                        <option key={i} value={province.name}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div
                  className="col-2 "
                  align="center"
                  style={{ padding: "30px" }}
                >
                  <i className="fa fa-home fa-3x text-secondary"></i>
                </div>
                <div
                  className="col"
                  style={{ paddingRight: "30px", paddingLeft: "30px" }}
                >
                  <div className="form-group">
                    <label>Type of Property</label>
                    <select
                      className="form-control"
                      id="typeName"
                      onChange={handleChangeType}
                      value={valueType}
                    >
                      {types.map((type, i) => (
                        <option key={i} value={type.name}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div
                  className="col-2 "
                  align="center"
                  style={{ padding: "30px" }}
                >
                  <i className="fa fa-check fa-3x text-secondary"></i>
                </div>
                <div
                  className="col"
                  style={{ paddingRight: "30px", paddingLeft: "30px" }}
                >
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      className="form-control"
                      id="statusName"
                      onChange={handleChangeStatus}
                      value={valueStatus}
                    >
                      {statuses.map((status, i) => (
                        <option key={i} value={status.name}>
                          {status.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-secondary btn-lg btn-block mt-3 mb-3"
                style={{ borderRadius: "50px" }}
              >
                FIND
              </button>
            </form>
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
            <div className="col-2 " onClick={(e) => handleSearch(e)}>
              <div className="row justify-content-center">
                <i
                  className="fa fa-search fa-2x bg-secondary p-3 text-white"
                  style={{ borderRadius: "50px" }}
                ></i>
              </div>
              <div className="row justify-content-center">
                <label style={{ marginTop: "5px", fontSize: "12px" }}>
                  SEARCH
                </label>
              </div>
            </div>
            <div className="col-2" onClick={(e) => handleChatLobby(e)}>
              <div className="row justify-content-center">
                <i
                  className="fa fa-comments-o fa-2x bg-secondary p-3 text-white"
                  style={{ borderRadius: "50px" }}
                ></i>
              </div>
              <div className="row justify-content-center">
                <label style={{ marginTop: "5px", fontSize: "12px" }}>
                  CHAT
                </label>
              </div>
            </div>
            <div className="col-2 ">
              <div className="row justify-content-center">
                <i
                  className="fa fa-server fa-2x bg-secondary p-3 text-white"
                  style={{ borderRadius: "50px" }}
                ></i>
              </div>
              <div className="row justify-content-center">
                <label style={{ marginTop: "5px", fontSize: "12px" }}>
                  CATEGORY
                </label>
              </div>
            </div>
            <div className="col-2" onClick={(e) => handleHistory(e)}>
              <div className="row justify-content-center">
                <i
                  className="fa fa-history fa-2x bg-secondary p-3 text-white"
                  style={{ borderRadius: "50px" }}
                ></i>
              </div>
              <div className="row justify-content-center">
                <label style={{ marginTop: "5px", fontSize: "12px" }}>
                  HISTORY
                </label>
              </div>
            </div>
            <div className="col-2" onClick={(e) => handleProfile(e)}>
              <div className="row justify-content-center">
                <i
                  className="fa fa-user-o fa-2x bg-secondary p-3 text-white"
                  style={{ borderRadius: "50px" }}
                ></i>
              </div>
              <div className="row justify-content-center">
                <label style={{ marginTop: "5px", fontSize: "12px" }}>
                  PROFILE
                </label>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
