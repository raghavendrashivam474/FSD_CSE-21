import React from 'react'
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '1rem', backgroundColor: '#d76b6b' }}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
       </nav>
       <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App ;
