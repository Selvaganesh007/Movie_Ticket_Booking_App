import './Base.scss';
import { useState } from 'react';
import LandingPage from '../LandingPage/LandingPage.jsx';

function Base() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <LandingPage />
      </>
    )
  }
  
  export default Base;