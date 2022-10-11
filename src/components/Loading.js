import React from "react";
import './Loading.css'
// import loading from "../assets/rotate.svg";
import { InfinitySpin } from 'react-loader-spinner'
const Loading = () => (
 <div className='loadposition'>
  <InfinitySpin 
  width='200'
  color="#000"
/>
</div>
);

export default Loading;
