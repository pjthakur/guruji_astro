import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    addressInfo: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: '',
    },
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [category, field] = name.split('.');
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [category]: { ...prevFormData[category], [field]: value },
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  switch (step) {
    case 1:
      return (
        <div>
          <h2>Step 1: Personal Information</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="personalInfo.name"
                value={formData.personalInfo.name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="personalInfo.email"
                value={formData.personalInfo.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="tel"
                name="personalInfo.phone"
                value={formData.personalInfo.phone}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button onClick={handleNextStep}>Next Step</button>
          </form>
        </div>
      );
    case 2:
      return (
        <div>
          <h2>Step 2: Address Information</h2>
          <form>
            <label>
              Address Line 1:
              <input
                type="text"
                name="addressInfo.addressLine1"
                value={formData.addressInfo.addressLine1}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Address Line 2:
              <input
                type="text"
                name="addressInfo.addressLine2"
                value={formData.addressInfo.addressLine2}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              City:
              <input
                type="text"
                name="addressInfo.city"
                value={formData.addressInfo.city}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              State:
              <input
                type="text"
                name="addressInfo.state"
                value={formData.addressInfo.state}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Zip Code:
              <input
                type="text"
                name="addressInfo.zipCode"
                value={formData.addressInfo.zipCode}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button onClick={handlePreviousStep}>Previous Step</button>
            <button onClick={handleNextStep}>Next Step</button>
          </form>
        </div>
      );
    case 3:
      return (
        <div>
          <h2>Step 3: Confirmation</h2>
          <h3>Review your entered data:</h3>
          <ul>
            <li>
              Name: {formData.personalInfo.name}
            </li>
            <li>
              Email: {formData.personalInfo.email}
            </li>
            <li>
              Phone: {formData.personalInfo.phone}
            </li>
            <li>
              Address Line 1: {formData.addressInfo.addressLine1}
            </li>
            <li>
              Address Line 2: {formData.addressInfo.addressLine2}
            </li>
            <li>
              City: {formData.addressInfo.city}
            </li>
            <li>
              State: {formData.addressInfo.state}
            </li>
            <li>
              Zip Code: {formData.addressInfo.zipCode}
            </li>
          </ul>
          <button onClick={handlePreviousStep}>Previous Step</button>
          <button onClick={handleSubmit}>Submit Form</button>
        </div>
      );
    default:
      return <div>Invalid step</div>;
  }
};

export default MultiStepForm