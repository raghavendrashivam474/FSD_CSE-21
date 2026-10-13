import React, { useEffect, useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: ""
  });

  // 1. Fixed useEffect: Removed the alert from here so it doesn't pop up on every keystroke.
  // This is now purely for logging changes in the background.
  useEffect(() => {
    console.log("Form updated:", formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  }

  return (
    <>
      <div>
        {/* 2. Fixed Form Tag: Attached the onSubmit handler here */}
        <form onSubmit={handleSubmit}> 
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder='Enter your name:' 
            value={formData.name} 
            onChange={handleChange}
          />
          <br/>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Enter email:' 
            value={formData.email} 
            onChange={handleChange}
          />
          <br/>
          <input 
            type="password" 
            name="pass" 
            id="passw" 
            placeholder='Enter password:'
            value={formData.pass} 
            onChange={handleChange}
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

// 3. Fixed Export: Matches the name of the component defined above
export default App; 
