import React,{ useState } from 'react';
import './App.css';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    education: '',
    experience: '',
    skills: '',
    certificates: null,
  });
  const [savedData,setSavedData]=useState(null);
  const handleChange=(e)=>{
    const {name,value,type}=e.target;
    if (type==='file'){
      setFormData({
        ...formData,
        certificates:e.target.files[0],
      });
    }else{
      setFormData({
        ...formData,
        [name]:value,
      });
    }
  };
  const handleSave=()=>{
    setSavedData(formData);
  };
  const handleDisplay = () => {
    if (savedData) {
      const certificatesLink = savedData.certificates
        ? `<p>Certificates: <a href="${URL.createObjectURL(
            savedData.certificates
          )}" target="_blank" rel="noopener noreferrer">${savedData.certificates.name}</a></p>`
        : '';
      const displayContent = `
       <html>
          <head>
            <title>Saved Data</title>
          </head>
          <body class="a">
          <div class="display">
            <h1 style="color:blue;">Saved Data</h1>
            <p>Name: ${savedData.name}</p>
            <p>Email: ${savedData.email}</p>
            <p>Summary: ${savedData.summary}</p>
            <p>Education: ${savedData.education}</p>
            <p>Experience: ${savedData.experience}</p>
            <p>Phone Number: ${savedData.phoneNumber}</p>
            <p>Skills: ${savedData.skills}</p>
            ${certificatesLink}
            </div>
          </body>
        </html>
      `;
      const newWindow = window.open();
      newWindow.document.open();
      newWindow.document.write(displayContent);
      newWindow.document.close();
    }
  };
  
  return (
    <div>
      <h1>Resume Form</h1>
      <form class="resumeform">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="education">Education:</label>
          <textarea id="education" name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="experience">Experience:</label>
          <textarea id="experience" name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <textarea id="skills"  name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="certificates">Certificate (PDF):</label>
          <input type="file" id="certificates" name="certificates"
            accept=".pdf"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="button" onClick={handleSave}>Save</button>
         <a href='#display'><button type="button" onClick={handleDisplay}>Display</button></a>
        </div>
      </form>
    </div>
  );
}
export default App;




