import {
  SET_TYPES,
  SET_TYPE,
  SET_PROVINCES,
  SET_PROVINCE,
  SET_STATUSES,
  SET_STATUS,
  SET_PROPERTIES,
  SET_PROPERTY,
  SET_USERS,
  SET_USER,
} from "../actions";

const initialState = {
  types: [],
  type: {},
  provinces: [],
  province: {},
  statuses: [],
  status: {},
  properties: [],
  property: {},
  users: [],
  user: {},
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TYPES:
      return { ...state, types: payload };
    case SET_TYPE:
      return { ...state, type: payload };
    case SET_PROVINCES:
      return { ...state, provinces: payload };
    case SET_PROVINCE:
      return { ...state, province: payload };
    case SET_STATUSES:
      return { ...state, statuses: payload };
    case SET_STATUS:
      return { ...state, status: payload };
    case SET_PROPERTIES:
      return { ...state, properties: payload };
    case SET_PROPERTY:
      return { ...state, property: payload };
    case SET_USERS:
      return { ...state, users: payload };
    case SET_USER:
      return { ...state, user: payload };
    default:
      break;
  }
  return state;
}
export default reducer;
