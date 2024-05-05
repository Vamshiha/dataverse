import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './applicationForm.css';

function ApplicationForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    highestDegree: '',
    universityName: '',
    feedback: '',
    resume: null,
    resumeContent: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setFormState({
        ...formState,
        resume: file,
        resumeContent: event.target.result,
      });
    };

    reader.readAsText(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate(formState);
    setErrors(errors);

    if (Object.keys(errors).length === 0 && formState.resume) {
      emailjs.send('service_nzfhe0h', 'template_52i1udp', {
        firstName: formState.firstName,
        lastName: formState.lastName,
        phoneNumber: formState.phoneNumber,
        email: formState.email,
        address: formState.address,
        highestDegree: formState.highestDegree,
        universityName: formState.universityName,
        feedback: formState.feedback,
        resumeContent: formState.resumeContent,
      }, 'ScYNwVYi8HsNJDgMx')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    }
    if (!values.resume) {
      errors.resume = 'Resume is required';
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit} className="recruitment-form">
      <label className="label-header">First Name</label>
      <input
        type="text"
        name="firstName"
        value={formState.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <p>{errors.firstName}</p>}
      
      <label className="label-header">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formState.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <p>{errors.lastName}</p>}
      
      <label className="label-header">Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        value={formState.phoneNumber}
        onChange={handleChange}
      />
      {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
      
      <label className="label-header">Email</label>
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      
      <label className="label-header">Address</label>
      <input
        type="text"
        name="address"
        value={formState.address}
        onChange={handleChange}
      />
      
      <label className="label-header">Highest Degree</label>
      <input
        type="text"
        name="highestDegree"
        value={formState.highestDegree}
        onChange={handleChange}
      />
      
      <label className="label-header">University Name</label>
      <input
        type="text"
        name="universityName"
        value={formState.universityName}
        onChange={handleChange}
      />
      
      <label className="label-header">Feedback</label>
      <textarea
        name="feedback"
        value={formState.feedback}
        onChange={handleChange}
        rows="4"
        cols="50"
        className="text-area"
      />
      
      <label className="label-header">Upload Resume</label>
      <input
        type="file"
        name="resume"
        onChange={handleFileChange}
      />
      {errors.resume && <p>{errors.resume}</p>}
      
      <input type="submit" value="Submit" />
    </form>
  )
}

export default ApplicationForm;
