import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import $ from "jquery";
// import logo from './logo.svg';
// import './App.css';
// Pages
import Home from "./component/section/Home";
import About from "./component/section/About";
import Design from "./component/section/Design";
import Web from "./component/section/Web";

import MainPage from "./component/page/MainPage";

const PointerWrap = styled.div`
    width : 100vw;
    height : 100vh;
    overflow-x : hidden;
    overflow-y : hidden;
`;

const Pointer = styled.div`
    position:absolute; 
    width:20px; 
    height:20px;
    border-radius:100%; 
    background:rgba(94,141,232, 0.3); 
    transition:all 0.2s ease-out;
    z-index : 1000;
    pointer-events: none;
   
`;

// call this to Disable
// function disableScroll() {
//   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
//   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
//   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
// }
 
// // call this to Enable
// function enableScroll() {
//   window.removeEventListener('DOMMouseScroll', preventDefault, false);
//   window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
//   window.removeEventListener('touchmove', preventDefault, wheelOpt);
//   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
// }

function App() {
  const [xy,setXY] = useState({x:0,y:0});

  const handleMouseMove=(e)=>{
        setXY({x:e.clientX,y:e.clientY});
        // console.log(xy);
    }

  useEffect(() => {
      // console.log();
  });

  window.addEventListener("wheel", function(e){
    e.preventDefault();
  },{passive : false}); 
  

  return (
    <PointerWrap onMouseMove={(e) => handleMouseMove(e)}>
      <Pointer style={{left:xy.x-10,top:xy.y-10}}/>
      <MainPage></MainPage>
    </PointerWrap>
  );
}



  // 포인터 따라다니는 원
  // var pointSize = $(".pointer").width()/2;
  // handleMouseMove(event) {
  //   this.setState({
  //     x: event.clientX,
  //     y: event.clientY
  //   });
  // }
  // $("body").mousemove(function(e){    
  //     $('.pointer').css("top", e.pageY-pointSize);
  //     $('.pointer').css("left", e.pageX-pointSize);
  //     $('.pointer').fadeIn();
  // });
  // $("body").on("mouseleave", function(){
  //   $('.pointer').fadeOut();
  // });


export default App;
