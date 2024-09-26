import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  // useEffect(() => {
   
  //   const timer = setTimeout(() => {
  //     setLoading(false); 
  //     nav("/main");
  //   }, 3000);

   
  //   return () => clearTimeout(timer);
  // }, [nav]);

  return (
    <div style={{"width":"100%", "height":"100vh"}}>
      {loading ? <Loader /> : null}
    </div>
  );
}
