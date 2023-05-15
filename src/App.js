import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'; 
import Resume from './components/Resume';
import Footer from './components/Footer';
import face1 from './image/face1.jpg';


function App() {
const [currentSection, setCurrentSection] = useState('AboutMe');
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});
const handleNavigationClick = (section) => {
  setCurrentSection(section);
};

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
const handleSubmit = (e) => {
  e.preventDefault();
  //form submission logic
  console.log('Form submitted:', formData);
  //Reset form fields
  setFormData({
    name: '',
    email: '',
    message: ''
  });
};

return (
  <div>
    <Header />
    <header>
      <div className='AboutMe'>
        <img src={face1} alt='main' className='mainimage' />
        <div className='Nav'>
        <div>Abayomi</div>
        <div>AboutMe</div>
        <div>Portfolio</div>
        <div>Resume</div>
        <div>Contact</div>
        </div>
        </div>
<nav>
  <button onClick={() => handleNavigationClick('AboutMe')}>AboutMe</button>
  <button onClick={() => handleNavigationClick('Portfolio')}>Portfolio</button>
  <button onClick={() => handleNavigationClick('Contact')}>Contact</button>
  <button onClick={() => handleNavigationClick('Resume')}>Resume</button>
  </nav>
  </header>
<main>
  {currentSection === 'AboutMe' && <AboutMe />}
  {currentSection === 'Portfolio' && <Portfolio />}
  {currentSection === 'Contact' && <Contact />}
 <Contact
 formData={formData}
 handleInputChange={handleInputChange}
 handleSubmit={handleSubmit}
 />


{currentSection === 'Resume' && <Resume />}
</main>
      <Footer />
    </div>
  );
}

export default App;


