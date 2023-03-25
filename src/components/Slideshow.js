import React, { useRef, useState } from 'react'
import imgOne from "../imgs/1.jpg"
import imgTwo from "../imgs/2.jpg"
import imgThree from "../imgs/3.jpg"

import './styles.css'


export default function Slideshow() {
    const [count,setCount] = useState(1);
    const slideRef = useRef();

    function prevHandler(){
        if(count === 3){
            setCount(1);
            return
        }
        slideRef.current.style.transition ="all 0.5s ease";
        setCount(prev => prev+1)
        slideRef.current.style.transform ="translateX("+(-730)+"px)";

    }

    function nextHandler(){


        slideRef.current.style.transition ="all 0.5s ease";
        setCount(prev => prev+1)
        slideRef.current.style.transform ="translateX("+(730)+"px)";

    }


  return (
    <>
    <div class="container">
    <div class="slide" ref={slideRef}>
      <img src={imgOne} alt="" id="lastClone" />
      <img src={imgTwo} alt="" />
      <img src={imgThree} alt="" id="firstClone" />
    </div>
  </div>
  <button id="prev" onClick={prevHandler}>Prev</button>
  <button id="next" onClick={nextHandler} >Next</button>
  </>
  )
}
