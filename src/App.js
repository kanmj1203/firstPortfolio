import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import {FullPage, Slide} from "react-full-page";
// import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import $ from "jquery";

// import logo from './logo.svg';
import './App.css';
// Pages
import Footer from "./component/ui/Footer";
import Header from "./component/ui/Header";
// import Aside from "../ui/Aside";
import Home from "./component/section/Home";
import About from "./component/section/About";
import Design from "./component/section/Design";
import Web from "./component/section/Web";
// import $ from "jquery";

const PointerWrap = styled.div`
    width : 100vw;
    height : 100vh;
    background-color: #f5f5f5;
    
    // display : fixed;
    // overflow-x : hidden;
    // overflow-y : hidden;
`;

const Pointer = styled.div`
    position : fixed;
    width:20px; 
    height:20px;
    border-radius:100%; 
    background:rgba(94,141,232, 0.3); 
    transition:all 0.2s ease-out;
    z-index : 1000;
    pointer-events: none;
   
`;

const Main = styled.main`
    background-color: #f5f5f5;
    width : 100vw;
    height : 100vh;
    font-size : 1rem;
    // overflow-x : hidden;
    // overflow-y : hidden;
`;

// const Wrapper = styled.div`
//     width : 100vw;
//     height : 100vh;
//     margin-left: calc(-50vw + 50%);
// `;


const pages = [
    {
        id : 1,
        title : "home",
    },
    {
        id : 2,
        title : "about",
    },
    {
        id : 3,
        title : "design",
    },
    {
        id : 4,
        title : "web",
    },
];


function App() {
  const [xy,setXY] = useState({x:0,y:0});

  const handleMouseMove=(e)=>{
        setXY({x:e.clientX ,y:e.clientY });
        // console.log(xy);
    }

  const scrollRef = useRef(null);

  // const [scrollIndex, setScrollIndex] = useState(1);

  // const scrollPageChange = (scrollIndex) => {
  //   setScrollIndex(scrollIndex);
  // }


  return (
    <PointerWrap onMouseMove={(e) => handleMouseMove(e)}>
      <Pointer style={{left:xy.x-10,top:xy.y-10}}/>
      <Main>
          <Header 
              pages = {pages} 
              // scrollIndex = {scrollIndex}
              // onscrollPageChange = {scrollPageChange}
          ></Header>
          <FullPage controls controlsProps={{className: 'slide-navigation'}}>
              <Slide><Home pages = {pages[0]} ></Home></Slide>
              <Slide><About pages = {pages[1]} ></About></Slide>
              <Slide><Design pages = {pages[2]} ></Design></Slide>
              <Slide><Web pages = {pages[3]} ></Web></Slide>
          </FullPage>
          {/* <Home pages = {pages[0]} ></Home>
              <About pages = {pages[1]} ></About>
              <Design pages = {pages[2]} ></Design>
              <Web pages = {pages[3]} ></Web> */}
          <Footer></Footer>
      </Main>
    </PointerWrap>
  );
}

export default App;
