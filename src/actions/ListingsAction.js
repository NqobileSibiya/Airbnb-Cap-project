import axios from 'axios';
import { 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  LOGOUT, 
  REGISTER_REQUEST, 
  REGISTER_SUCCESS, 
  REGISTER_FAIL 
} from "../constants/UserConstants"; 

//  initiating login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    
    const { data } = await axios.post('/api/users/login', { email, password });
    
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });
    
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

// logging out
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: LOGOUT });
};

//  user registration
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    
    const { data } = await axios.post('/api/users/register', { name, email, password });
    
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    });
    
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

export const fetchPropertiesNearby = (location) => async (dispatch) => {
  try {
    // You might want to dispatch a loading action here (optional)
    const { data } = await axios.get(
      `http://localhost:5000/properties?near=${location.latitude},${location.longitude}` // Replace with your API or JSON server endpoint
    );

    // Dispatching the fetched properties data
    dispatch({
      type: 'SET_PROPERTIES',
      payload: data
    });
  } catch (error) {
    console.error('Error fetching nearby properties:', error);
  }
};