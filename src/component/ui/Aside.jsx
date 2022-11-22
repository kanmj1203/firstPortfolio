import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
// import "../../css/default.css";
// import "../../fonts/font.css";

const PageBtnsContainer = styled.aside`
    position: fixed;
    height : 100%;
    width : 4.5vw;
    right: 0;
`;

const PageBtnsWrap = styled.ul`
    position : absolute;
    top : 50%;
    transform: translateY(-50%);

    & > li {
        width : 100%;
        margin : 20px 0px;
    }
`;

const PageBtn = styled.li`
    & > div {
        width : 8px;
        height : 8px;
        background-color : #d9d9d9;
        border-radius: 100%;
        /* transition: 0.3s; */
        margin : 0 auto;
        transition:all 0.3s ease-out;
    }
`;


// #page_btn_active {
//     width : 13px;
//     height : 13px;
//     background-color : #7A9DE2;
//     /* transition: 0.3s; */
//   }

function Aside(props) {
    const {pages} = props;
    return(
        <PageBtnsContainer>
          <PageBtnsWrap>
          {pages.map((page) => {
            return <PageBtn key = {page.id}><div></div></PageBtn>
          })}
          </PageBtnsWrap>
        </PageBtnsContainer>
    );
}

export default Aside;

{/* <li><div id="page_btn_active"></div></li> */}