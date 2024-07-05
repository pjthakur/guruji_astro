import React, { useState, useEffect } from 'react';
import '../styles/form.css';
import { motion, AnimatePresence } from "framer-motion"


const Form = () => {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [addressInfo, setAddressInfo] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const { personalInfo, addressInfo } = JSON.parse(storedData);
      setPersonalInfo(personalInfo);
      setAddressInfo(addressInfo);
      setStep(1); // Reset step to 1 if user revisits the form
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify({ personalInfo, addressInfo }));
  }, [personalInfo, addressInfo]);

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleAddressInfoChange = (e) => {
    setAddressInfo({ ...addressInfo, [e.target.name]: e.target.value });
  };

  const validatePersonalInfo = () => {
    const errors = {};
    if (!personalInfo.name) errors.name = 'Required';
    if (!personalInfo.email) errors.email = 'Required';
    if (!personalInfo.phone) errors.phone = 'Required';
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(personalInfo.email))
      errors.email = 'Invalid email format';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateAddressInfo = () => {
    const errors = {};
    if (!addressInfo.addressLine1) errors.addressLine1 = 'Required';
    if (!addressInfo.city) errors.city = 'Required';
    if (!addressInfo.state) errors.state = 'Required';
    if (!addressInfo.zipCode) errors.zipCode = 'Required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validatePersonalInfo()) {
      setStep(2);
    } else if (step === 2 && validateAddressInfo()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    
    setTimeout(() => {
      console.log('Form submitted successfully!');
    }, 2000);
  };

  return (
    <>
    
      <ul className="nav-tabs">
        <li className={step === 1 ? 'active' : ''}>
          <a href="#" onClick={() => setStep(1)}>Personal Information</a>
        </li>
        <li className={step === 2 ? 'active' : ''}>
          <a href="#" onClick={() => setStep(2)}>Address Information</a>
        </li>
        <li className={step === 3 ? 'active' : ''}>
          <a href="#" onClick={() => setStep(3)}>Confirmation</a>
        </li>
      </ul>
    <div className="form-container">
      {step === 1 && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
      >
        <div className="form-step">
          <h2>Personal Information</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={personalInfo.name}
                onChange={handlePersonalInfoChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </label>
          </form>
          <div className='buttons'>
          <button onClick={handleNext}>Next</button>
          </div>
        </div>
        </motion.div>
      )}
      {step === 2 && (
         <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0, transition: { duration: 2 } }}
       >
        <div className="form-step">
          <h2>Address Information</h2>
          <form>
            <label>
              Address Line 1:
              <input
                type="text"
                name="addressLine1"
                value={addressInfo.addressLine1}
                onChange={handleAddressInfoChange}
                className={errors.addressLine1? 'error' : ''}
              />
              {errors.addressLine1 && <div className="error-message">{errors.addressLine1}</div>}
            </label>
            <label>
              Address Line 2:
              <input
                type="text"
                name="addressLine2"
                value={addressInfo.addressLine2}
                onChange={handleAddressInfoChange}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={addressInfo.city}
                onChange={handleAddressInfoChange}
                className={errors.city? 'error' : ''}
              />
              {errors.city && <div className="error-message">{errors.city}</div>}
            </label>
            <label>
              State:
              <input
                type="text"
                name="state"
                value={addressInfo.state}
                onChange={handleAddressInfoChange}
                className={errors.state? 'error' : ''}
              />
              {errors.state && <div className="error-message">{errors.state}</div>}
            </label>
            <label>
              Zip Code:
              <input
                type="text"
                name="zipCode"
                value={addressInfo.zipCode}
                onChange={handleAddressInfoChange}
                className={errors.zipCode? 'error' : ''}
              />
              {errors.zipCode && <div className="error-message">{errors.zipCode}</div>}
            </label>
          </form>
          <div className='buttons'>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
          </div>
        </div>
        </motion.div>
      )}
      {step === 3 && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
      >
        <div className="form-step">
          <h2>Confirmation</h2>
          <p>Review your entered data:</p>
          <ul>
            <li>
              Name: {personalInfo.name}
            </li>
            <li>
              Email: {personalInfo.email}
            </li>
            <li>
              Phone: {personalInfo.phone}
            </li>
            <li>
              Address Line 1: {addressInfo.addressLine1}
            </li>
            <li>
              Address Line 2: {addressInfo.addressLine2}
            </li>
            <li>
              City: {addressInfo.city}
            </li>
            <li>
              State: {addressInfo.state}
            </li>
            <li>
              Zip Code: {addressInfo.zipCode}
            </li>
          </ul>
          <div className='buttons'>
            <button onClick={handleBack} >Back</button>
            <button onClick={handleSubmit} >Submit</button>
          </div>
        </div>
        </motion.div>
      )}
    </div>
   
    </>
  );
};

export default Form;