import React, { useCallback, useReducer, useRef } from 'react';
import Compare from '../components/comparison/compare.jsx';
import { useState } from 'react';
import Clas from '../components/clas.jsx';

const Comparison = ({ datas }) => {
  const [show, setShow] = useState(false);





  const arr = [1 ,29 ] 

  const redhsh =  arr.reduce((prev  , current)=>prev +current  , {})

console.log(redhsh)

  const getdata = (e, x, z) => {
    console.log(x);
    setShow(!show);
    datas(e, z);
  };



  return (
    <>
      <div style={{ margin: '12px' }}>
        <Compare  />
   
      </div>
  
    </>
  );
};

export default Comparison;
