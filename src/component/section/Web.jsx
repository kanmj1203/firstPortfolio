import React, {useState, useEffect, useRef} from "react";
import styled, {keyframes} from "styled-components";
// import "../../css/default.css";
// import "../../fonts/font.css";

const Section = styled.section`
    text-align: center;
    justify-content: center;
    width : 100%;
    height : 100%;
    display : flex;
    align-items: center;
    flex-direction: column;
    transition:all 0.5s ease-out;
`;

const HomeTextBox = styled.article`
    /* font-family: 'Noto Serif KR', serif; */
    /* font-family: 'Josefin Slab', serif; */
    font-family: 'Bungee', cursive;
    line-height: 1.5;
    font-size : 4.5rem;
    /* text-align: center; */

    /* 드래그 방지 */
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    u
    ser-select: none;
`;

const HomeText = styled.span`
    color : #5E8DE8;
    text-shadow: 3px 3px 1px #c2c2c2;
`;

const text_blink = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
`;

const Blink = styled.span`
    color : #353535;
    animation: ${text_blink} 0.5s infinite;
    font-family: 'Noto Serif KR', sans-serif;
    font-size : 3.8rem; 
    vertical-align: top;
`;


  /* 스크롤 안내 */
const ScrollArrow = styled.article`
    position : absolute;
    bottom : 5%;
`;

function Web(props) {

    return (
        <Section id="home">

        </Section>
    );
}

export default Web;
// <!-- 스크롤 아이콘  제작자: fulmal - Flaticon -->