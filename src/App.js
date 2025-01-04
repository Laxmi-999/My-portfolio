import logo from './logo.svg';
import './App.css';
import React from 'react';



const About = () => {
  return (
    <div
    className="relative h-screen flex flex-col items-center justify-center"
    style={{ background: 'linear-gradient(180deg, #1E4F6B, #162B41)' }}
  >
    <div
      className="container mx-auto px-4 flex flex-col md:flex-col sm:flex-col lg:flex-row items-center lg:justify-between md:justify-center gap-6"
    >
      {/* Left Section */}
      <div className="mt-10 md:mt-6 relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        <img
          src={process.env.PUBLIC_URL + '20240825_064958.jpg'}
          alt="WP Dev"
          className="rounded-full shadow-lg w-3/4 md:w-2/3 lg:w-3/4 mx-auto"
        />
      </div>
  
      {/* Right Section */}
      <div className="text-center lg:text-left text-white p-4 md:p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hi, I am Laxmi Regmi.
        </h1>
        <p className="text-lg md:text-xl font-light mb-6">
          React JS Developer
        </p>
        <p className="text-sm md:text-base">
          I am a dedicated and self-motivated BIM graduate with a solid foundation in JavaScript, React, HTML, and CSS.
          Seeking a job opportunity to apply and enhance my web development skills in a dynamic and collaborative environment.
        </p>
      </div>
    </div>
  </div>
  
  );
};

function Experience() {
  return (
    <section className="py-8 md:py-10" style={{ background: 'linear-gradient(180deg, #1E4F6B, #162B41)' }} >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Experience</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg md:text-xl font-semibold">React js Intern - Bitmap IT Solution(BITS).</h3>
            <p className="text-white text-sm md:text-base">15th Apr 2024, to 2nd Aug 2024.</p>
            <p className="text-white  text-sm md:text-base">Partial development of multiple web applications using React and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = ['React', 'JavaScript', 'Node.js', 'HTML/CSS', 'Tailwind CSS', 'Git', 'MongoDB'];
  
  return (
    <section className="py-8 md:py-10" style={{ background: 'linear-gradient(180deg, #1E4F6B, #162B41)' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 md:px-4 py-1 md:py-2 bg-blue-500 text-white rounded-full text-sm md:text-base">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


function Projects() {
  return (
    <section className="py-8 md:py-10" style={{ background: 'linear-gradient(180deg, #1E4F6B, #162B41)' }} >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Personal Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-2">E-commerce Platform</h3>
            <p className="text-gray-700 text-sm md:text-base">https://github.com/Laxmi-999/e-commerce</p>
            <p className="text-gray-700 text-sm md:text-base">https://github.com/Laxmi-999/ecomapi</p>

          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Real Time ChatApp</h3>
            <p className="text-gray-700 text-sm md:text-base">https://github.com/Laxmi-999/ChatApp</p>
            <p className="text-gray-700 text-sm md:text-base">https://github.com/Laxmi-999/ChatAppServer</p>

          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-700 text-sm md:text-base">https://github.com/Laxmi-999/Portfolio</p>
          </div>
        </div>
      </div>



      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Internship Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-2">website for Education Consultancy</h3>
            <p className="text-gray-700 text-sm md:text-base">https://educationsafari.com/</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Admin Panel with CRUD operation </h3>
            <p className="text-gray-700 text-sm md:text-base">React base admin panel with its essesntial fuctionalities.</p>
          </div>
          {/* <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-700 text-sm md:text-base">Personal portfolio built with React and Tailwind CSS</p>
          </div> */}
        </div>
      </div>


     
    </section>
    

    
  );
}
   

function Contact() {
  return (
    <section className="py-8 md:py-10 bg-gray-100" style={{ background: 'linear-gradient(180deg, #1E4F6B, #162B41)' }}>
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Contact Me</h2>
        <div className="max-w-md w-full">
          <form className="space-y-3 md:space-y-4">
            <div>
              <label className="block text-white mb-1 md:mb-2 text-sm md:text-base">Name</label>
              <input type="text" className="w-full px-3 md:px-4 py-2 border rounded-md text-sm md:text-base" />
            </div>
            <div>
              <label className="block text-white mb-1 md:mb-2 text-sm md:text-base">Email</label>
              <input type="email" className="w-full px-3 md:px-4 py-2 border rounded-md text-sm md:text-base" />
            </div>
            <div>
              <label className="block text-white mb-1 md:mb-2 text-sm md:text-base">Message</label>
              <textarea className="w-full px-3 md:px-4 py-2 border rounded-md h-32 text-sm md:text-base" />
            </div>
            <button type="submit" className="w-full md:w-auto bg-blue-500 text-white px-4 md:px-6 py-2 rounded-md hover:bg-blue-600 text-sm md:text-base">
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Details */}

      </div>
    </section>
  );
}


        const ContactDetails = () =>{
          return(
            <div
            className="py-8 md:py-10"
            style={{ background: 'linear-gradient(180deg, #1E4F6B, #162B41)' }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center md:text-left lg:ml-[9rem]">
              Contact Details
            </h3>
            <div className="space-y-4 mt-4 flex flex-col md:flex-row md:space-y-0 md:space-x-6 lg:ml-[9rem] lg:mr-[9rem] lg:items-left lg:justify-between">
              <p className="text-gray-700 text-sm md:text-base bg-white rounded-full px-6 py-3 w-full md:w-auto text-center ">
              <span className="font-bold">Email:</span> regmilaxmi325@gmail.com

              </p>
              <p className="text-gray-700 text-sm md:text-base bg-white rounded-full px-6 py-3 w-full md:w-auto text-center ">
              <span className="font-bold">LinkedIn:</span> https://www.linkedin.com/in/laxmi-regmi-a21820292/
              </p>
              <p className="text-gray-700 text-sm md:text-base bg-white rounded-full px-6 py-3 w-full md:w-auto text-center  ">
                <span className="font-bold">GitHub:</span> https://github.com/Laxmi-999
              </p>
            </div>
          </div>
          
          )
        }

function App() {
  return (
    <div className="min-h-screen">
      <header className="py-4 md:py-6" style={{ background: 'linear-gradient(180deg, #1E4F6B, #162B41)' }}>
        <h1 className="text-white text-3xl md:text-4xl text-center font-bold px-4"  >My Portfolio</h1>
      </header>
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ContactDetails />
        <Contact />
      </main>
    </div>
  );
}



export default App;
