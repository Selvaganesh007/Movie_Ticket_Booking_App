import Header from '../Header/Header';
import './LandingPage.scss';
import { useState } from 'react';

function LandingPage() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <Header />
      </>
    )
  }
  
  export default LandingPage;