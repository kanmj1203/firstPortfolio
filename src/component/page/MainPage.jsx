import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Aside from "../ui/Aside";
import Home from "../section/Home";
import About from "../section/About";
import Design from "../section/Design";
import Web from "../section/Web";
import $ from "jquery";


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


const Main = styled.main`
    background-color: #f5f5f5;
    width : 100vw;
    height : 100vh;
    font-size : 1rem;
    overflow-x : hidden;
    overflow-y : hidden;
`;

const Wrapper = styled.div`
    width : 100vw;
    height : 100vh;
    margin-left: calc(-50vw + 50%);
`;

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

  
function MainPage(props) {
    
    const scrollRef = useRef(null);
    const [scrollIndex, setScrollIndex] = useState(1);
    
    useEffect(() => {

    const wheelHandler = (e) => {
        // 스크롤 행동 구현

        const { deltaY } = e;
        const { scrollTop } = scrollRef.current; // 스크롤 위쪽 끝부분 위치
        const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
        console.log(scrollTop);
        console.log(pageHeight);
        console.log(scrollIndex);
        console.log(pages.length);
        if (deltaY > 0) {

            // 스크롤 내릴 때
             if (scrollIndex == 1) { //scrollTop >= 0 && scrollTop < pageHeight
              //현재 1페이지
              console.log("첫페이지 down");
              scrollRef.current.scrollTo({
                top: pageHeight,
                left: 0,
                behavior: "smooth",
              });
              setScrollIndex(scrollIndex + 1);
            } else if (scrollIndex < pages.length) { //scrollTop >= pageHeight && scrollTop < pageHeight * pages.length
                console.log("중간 down");
                scrollRef.current.scrollTo({
                  top: pageHeight * scrollIndex,
                  left: 0,
                  behavior: "smooth",
                });
                setScrollIndex(scrollIndex + 1);
            } else {

              console.log("마지막페이지 down");
            //   scrollRef.current.scrollTo({
            //     top: pageHeight * scrollIndex,
            //     left: 0,
            //     behavior: "smooth",
            //   });
            }
          } else {
            // 스크롤 올릴 때
            if (scrollIndex == 1) { //scrollTop >= 0 && scrollTop < pageHeight
              //현재 1페이지
              console.log("현재 1페이지, up");
              scrollRef.current.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            } else if (scrollIndex < pages.length) { //scrollTop >= pageHeight && scrollTop < pageHeight * pages.length
              //현재 2페이지
              console.log("현재 2페이지, up");
              
              scrollRef.current.scrollTo({
                top: pageHeight * (scrollIndex - 1),
                left: 0,
                behavior: "smooth",
              });
              setScrollIndex(scrollIndex - 1);
            } else {
              // 현재 3페이지
              console.log("현재 3페이지, up");
              scrollRef.current.scrollTo({
                top: pageHeight * (scrollIndex - 1),
                left: 0,
                behavior: "smooth",
              });
              setScrollIndex(scrollIndex - 1);
            }
          }
        };

        const scrollToElement = scrollRef.current;
        scrollToElement.addEventListener("wheel", wheelHandler);
        return () => {
            scrollToElement.removeEventListener("wheel", wheelHandler);
        };

    }, [scrollIndex]);
    

    return (
        <Main ref={scrollRef}>
            <Header pages = {pages} scrollIndex={scrollIndex}></Header>
            <Aside pages = {pages} scrollIndex={scrollIndex}></Aside>
            <Wrapper className="outer">    
                <Home pages = {pages[0]}></Home>
                <About pages = {pages[1]}></About>
                <Design pages = {pages[2]}></Design>
                <Web pages = {pages[3]}></Web>
            </Wrapper>
            <Footer></Footer>
        </Main>
    );
}

export default MainPage;