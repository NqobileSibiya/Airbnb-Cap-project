import axios from 'axios';
import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    LOGOUT 
} from '../constants/UserConstants';

// Login action
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const { data: users } = await axios.get('http://localhost:5000/users'); // Fetch all users
        const user = users.find(user => user.email === email && user.password === password); // Check for matching user

        if (user) {
            dispatch({ type: LOGIN_SUCCESS, payload: user }); // Dispatch success if found
        } else {
            dispatch({ type: LOGIN_FAIL, payload: 'Invalid email or password' }); // Dispatch failure if not found
        }
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.message });
    }
};

// Register action
export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST });
        
        // Check if email already exists
        const { data: users } = await axios.get('http://localhost:5000/users');
        const existingUser = users.find(user => user.email === email);
        
        if (existingUser) {
            dispatch({ type: REGISTER_FAIL, payload: 'Email already exists' });
            return;
        }

        // Create new user object
        const newUser = { name, email, password };
        const { data } = await axios.post('http://localhost:5000/users', newUser); // Save new user
        dispatch({ type: REGISTER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.message });
    }
};

// Logout action
export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
};
