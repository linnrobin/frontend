import axios from "axios";

const baseurl = "http://localhost:3001/";

export const SET_TYPES = "SET_TYPES";
export const SET_TYPE = "SET_TYPE";
export const SET_PROVINCES = "SET_PROVINCES";
export const SET_PROVINCE = "SET_PROVINCE";
export const SET_STATUSES = "SET_STATUSES";
export const SET_STATUS = "SET_STATUS";
export const SET_PROPERTIES = "SET_PROPERTIES";
export const SET_PROPERTY = "SET_PROPERTY";
export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";

export const setTypes = (data) => {
  return { type: SET_TYPES, payload: data };
};
export const setType = (data) => {
  return { type: SET_TYPE, payload: data };
};

export const setProvinces = (data) => {
  return { type: SET_PROVINCES, payload: data };
};
export const setProvince = (data) => {
  return { type: SET_PROVINCE, payload: data };
};

export const setStatuses = (data) => {
  return { type: SET_STATUSES, payload: data };
};
export const setStatus = (data) => {
  return { type: SET_STATUS, payload: data };
};

export const setProperties = (data) => {
  return { type: SET_PROPERTIES, payload: data };
};
export const setProperty = (data) => {
  return { type: SET_PROPERTY, payload: data };
};

export const setUsers = (data) => {
  return { type: SET_USERS, payload: data };
};
export const setUser = (data) => {
  return { type: SET_USER, payload: data };
};

export const fetchTypes = () => {
  return (dispatch) => {
    axios
      .get(`${baseurl}types`)
      .then(({ data }) => dispatch(setTypes(data.result)))
      .catch((err) => console.log(err));
  };
};

export const fetchType = (typeId) => {
  return (dispatch) => {
    axios
      .get(`${baseurl}types/${typeId}`)
      .then(({ data }) => dispatch(setType(data.result)))
      .catch((err) => console.log(err));
  };
};

export const fetchProvinces = () => {
  return (dispatch) => {
    axios
      .get(`${baseurl}provinces`)
      .then(({ data }) => dispatch(setProvinces(data.result)))
      .catch((err) => console.log(err));
  };
};

export const fetchProvince = (provinceId) => {
  return (dispatch) => {
    axios
      .get(`${baseurl}province/${provinceId}`)
      .then(({ data }) => dispatch(setProvince(data.result)))
      .catch((err) => console.log(err));
  };
};

export const fetchStatuses = () => {
  return (dispatch) => {
    axios
      .get(`${baseurl}statuses`)
      .then(({ data }) => dispatch(setStatuses(data.result)))
      .catch((err) => console.log(err));
  };
};

export const fetchStatus = (statusId) => {
  return (dispatch) => {
    axios
      .get(`${baseurl}statuses/${statusId}`)
      .then(({ data }) => dispatch(setStatus(data.result)))
      .catch((err) => console.log(err));
  };
};

export const fetchProperties = (provinceName, typeName, statusName) => {
  if (
    provinceName !== undefined &&
    typeName !== undefined &&
    statusName !== undefined
  ) {
    return (dispatch) => {
      axios
        .get(`${baseurl}properties/${provinceName}/${typeName}/${statusName}`)
        .then(({ data }) => dispatch(setProperties(data.result)))
        .catch((err) => console.log(err));
    };
  } else {
    return (dispatch) => {
      axios
        .get(`${baseurl}properties`)
        .then(({ data }) => dispatch(setProperties(data.result)))
        .catch((err) => console.log(err));
    };
  }
};

export const fetchProperty = (propertyId) => {
  return (dispatch) => {
    axios
      .get(`${baseurl}properties/${propertyId}`)
      .then(({ data }) => {
        dispatch(setProperty(data.result));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get(`${baseurl}users`)
      .then(({ data }) => dispatch(setUsers(data.result)))
      .catch((err) => console.log(err));
  };
};

export const fetchUser = (userId) => {
  return (dispatch) => {
    axios
      .get(`${baseurl}users/${userId}`)
      .then(({ data }) => dispatch(setUser(data.result)))
      .catch((err) => console.log(err));
  };
};
