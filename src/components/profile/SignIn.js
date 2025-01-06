import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/UserActions"; // Adjust the path as needed
import "./SignIn.css"; // Ensure you have your styles

const Sign = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister) || {}; // Default to an empty object
  const { loading, error, userInfo } = userRegister;

  const submitRegister = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password)); // Action to handle registration
  };

  // Clear the form and close modal upon successful registration
  useEffect(() => {
    if (userInfo) {
      setName("");
      setEmail("");
      setPassword("");
      onClose(); // Close the modal
    }
  }, [userInfo, onClose]); // Depend on userInfo and onClose

  return (
    <div className="modal-sign"> {/* Modal wrapper */}
      <div className="modal-sign-content"> {/* Modal content */}
        <span className="modal-sign-close" onClick={onClose}>&times;</span> {/* Close button */}
        <h2>Sign Up</h2>
        {error && <h2 className="error-message">{error}</h2>} {/* Display error message */}
        {loading && <h2>Loading...</h2>}
        <form onSubmit={submitRegister}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="browser-default"
            placeholder="Full Name"
            style={{ backgroundColor: "white" }}
            required // Ensure this field is filled
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="browser-default"
            placeholder="Email address"
            style={{ backgroundColor: "white" }}
            required // Ensure this field is filled
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="browser-default"
            placeholder="Password"
            style={{ backgroundColor: "white" }}
            required // Ensure this field is filled
          />
          <button type="submit" className="sign-up-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
