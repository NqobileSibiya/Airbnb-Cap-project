import React, {useState, useRef} from 'react';
import "./CreateListings.css";

const CreateListings = () => {
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
      bedrooms: '',
      description: '',
      // Add other form fields as needed
    });
  
    const handleUploadClick = () => {
      fileInputRef.current.click(); // Simulate click on the hidden file input
    };
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result); // Set the image state to display the preview
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      }
    };
  
    const handleUpdate = () => {
      // Handle the update logic, like sending form data to the server
      console.log('Updating with data:', formData);
      // Add your update logic here (e.g., API call to the admin page)
    };
  
    const handleDelete = () => {
      setImage(null); // Clear the image state
      // Optionally, reset other form data
      setFormData({
        bedrooms: '',
        description: '',
        // Reset other fields as needed
      });
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    return (
      <div className="listings-form">
        <h1>Create Listings</h1>
        <form className="form-container">
          {/* First row: Three inputs */}
          <div className="form-row">
            <div className="form-group-title">
              <label htmlFor="title">Listing Title</label>
              <input type="text" id="title" name="title" placeholder="Enter listing title" />
            </div>
  
            <div className="form-group-Price">
              <label htmlFor="price">Price</label>
              <input type="number" id="price" name="price" placeholder="Enter price" />
            </div>
  
            <div className="form-group-Type">
              <label htmlFor="type">Type</label>
              <input type="text" id="type" name="type" placeholder="Enter type (e.g., house)" />
            </div>
          </div>
  
          {/* Second row: Two inputs */}
          <div className="form-row-two">
            <div className="form-group-Location">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" name="location" placeholder="Enter location" />
            </div>
  
            <div className="form-group age-group">
            <label htmlFor="age">Age</label>
               <input
               type="number"
               id="age"
               name="age"
               placeholder="Enter age"
            />
            </div>

            <div className="form-group-Bedroom">
              <label htmlFor="bedrooms">Bedrooms</label>
              <input type="number" id="bedrooms" name="bedrooms" placeholder="Enter number of bedrooms" />
            </div>

            <div className="form-group-Bathroom">
              <label htmlFor="bathrooms">Bathrooms</label>
              <input type="number" id="bedrooms" name="bedrooms" placeholder="Enter number of bedrooms" />
            </div>
          </div>
        
  
          {/* Third row: Two inputs */}
          <div className="form-row-two">
          <div className="form-group">
      {/* Upload Image Button */}
      <button 
        type="button" 
        onClick={handleUploadClick} 
        className="upload-button">
        Upload Image
      </button>
      
      {/* Image Preview Container */}
      <div className="image-preview-box">
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          style={{ display: 'none' }} // Hide the file input
        />
        
        {/* Display the chosen image */}
        {image && (
          <div className="image-preview-container">
            <img src={image} alt="Uploaded Preview" className="image-preview" />
          </div>
        )}
      </div>
      </div>
      </div>

        <div className="button-container">
          <button type="button" className="update-button" onClick={handleUpdate}>Update</button>
          <button type="button" className="delete-button" onClick={handleDelete}>Delete</button>
        </div>

            <label htmlFor="amenities">Amenities</label>
          <div className="amenities-input-container">
            <input
              type="text"
              id="amenities"
              name="amenities"
              placeholder="Enter amenities"
            />
            <button type="button" className="add-button">Add</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default CreateListings;
  
  