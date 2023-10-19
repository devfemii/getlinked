import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../components/nav/nav'
import girl from '../assets/register/1f6b6-2640.svg'
import boy from '../assets/register/image_processing20200511-10310-13mnlsx.svg'
import reg from '../assets/register/regImage.webp'
import { RegWrap } from '../styles/contact.style'
import { Button, RegForm } from '../styles/global.style'
import Footer from '../components/Footer'
import useFetch from '../useFetch'

const Register = () => {

    const [data] = useFetch('https://backend.getlinked.ai/hackathon/categories-list');

    const [user, setUser] = useState({
        team_name: "",
        phone_number: "",
        email: "",
        project_topic: "",
        category: "",
        group_size: "",
        privacy_poclicy_accepted: true
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        console.log("new value", e.target.value);
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({
            ...user,
            [e.target.name]: value
          });
          console.log({
            ...user,
            [e.target.name]: value
          });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
    
        // Your validation logic...
    
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, prepare the data as JSON
            const jsonData = {
              team_name: user.team_name,
              phone_number: user.phone_number,
              email: user.email,
              project_topic: user.project_topic,
              category: user.category,
              group_size: user.group_size,
              privacy_policy_accepted: user.privacy_policy_accepted,
            };
      
    
          // Send the data to the API using Axios
          setIsSubmitting(true);
          axios
        .post('https://backend.getlinked.ai/hackathon/registration', jsonData, {
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
        })
        .then((response) => {
          // Handle the API response
          console.log('API Response:', response.data);
        })
        .catch((error) => {
            console.error('API Error:', error);

            if (error.response && error.response.data && error.response.data.email) {
            const errorMessage = error.response.data.email[0];
            toast.warn(errorMessage);
            } else {
            toast.error('An error occurred while making the request.');
            }
          })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
    {/* {errors && <p>Error: {errors}</p>} */}
    { data ?
    <>
        <Nav />
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
         />
        <RegWrap>
            <div className="leftWrap">
                <img src={reg} alt="" />
            </div>
            <div className="rightWrap">
                <RegForm>
                    <h3>Register
                    </h3>
                    <div id="part"><p>Be part of the movement</p>
                    <span>
                        <img src={boy} alt="" />
                        <img src={girl} alt="" />
                    </span>
                    </div>
                    <h4>Create Your Account</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="splitForm">
                            <span><label>Team's Name</label>
                            <input 
                            type="text" 
                            onChange={handleChange} 
                            value={user.team_name} 
                            name='team_name' 
                            placeholder="Enter group name" />
                            </span>
                            <span><label>Phone</label><input 
                            type="tel" 
                            onChange={handleChange} 
                            value={user.phone_number} 
                            placeholder="Enter phone no" 
                            name="phone_number" /></span>
                        </div>
                        <div className="splitForm">
                            <span><label>Email</label><input 
                            type="email" 
                            onChange={handleChange} 
                            value={user.email} 
                            placeholder="Enter email" 
                            name="email" /></span>
                            <span><label>Project Topic</label><input 
                            type="text" 
                            onChange={handleChange} 
                            value={user.project_topic} 
                            placeholder="Enter project topic" 
                            name="project_topic" /></span>
                        </div>
                        <div className="splitForm splitLast">
                            <span><label>Category</label>
                                <select 
                                onChange={handleChange} 
                                value={user.category} 
                                name='category'
                                >
                                    {
                                        data.map((cat)=>(
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))
                                    }
                                </select>
                                </span>
                            <span><label>Group Size</label>
                                <select
                                onChange={handleChange} 
                                value={user.group_size} 
                                name='group_size'
                                >
                                    <option value="1">Select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="5">Five</option>
                                </select>
                            </span>
                        </div>
                        <p className='pinkWarning'>Please review your registration details before submitting</p>
                        <span id="checkBox">
                            <input type="checkbox" 
                            onChange={handleChange} 
                            checked={user.privacy_poclicy_accepted} 
                            name="privacy_poclicy_accepted" id="" />
                            <label>I agreed with the event terms and conditions  and privacy policy</label>
                        </span>
                        <Button>{isSubmitting ? 'Submitting...' : 'Submit' }</Button>
                    </form>
                </RegForm>
            </div>
        </RegWrap>
        <Footer />
        </>
        : (
            <div className="ring">Loading
                <span className='load'></span>
            </div>
        )}
    </>
  )
}

export default Register