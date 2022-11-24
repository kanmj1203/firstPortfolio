import React, {useState, useEffect, useRef} from "react";
import styled, {keyframes} from "styled-components";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import '../../slickStyle.css';
import '../../slick-theme.css';
// import "../../css/default.css";
// import "../../fonts/font.css";

const Section = styled.section`
    width : 100%;
    height : 100%;
    transition:all 0.5s ease-out;

    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content : space-space;

    text-align : center;
`;

const DesignArticle = styled.article`
    width : 100%;
    height : 100%;

    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content : space-between;
    text-align : center;
    vertical-align: top;

    // color : white;
    word-wrap: break-word;

    @media screen and (max-width: 768px) {
        width : 40%;
    }
`;

// 왼쪽 소개상자
const LeftBox = styled.div`
    width : 35%;
    // height : 30vh;

    // margin : 5% auto;
    margin-right : 2%;

    display : inline-block;
    text-align : left;

    word-wrap: break-word;
    vertical-align: middle;
    
    background-color : white;

    border-radius : 15px;
    box-shadow : 0px 4px 4px rgba(0,0,0,.25);
    
    @media screen and (max-width: 768px) {
        // width : 40%;
    }

    & > div {
        margin : 30px 30px;

        @media screen and (max-width: 1024px) {
            margin : 10% 8%;
        }
    
        @media screen and (max-width: 500px) {
        }
    }
`;

const DesignTitle = styled.div`
    font-size : 1.5rem;
    
    @media screen and (max-width: 1024px) {
        font-size : 1.375rem;
    }

    @media screen and (max-width: 500px) {
        font-size : 1.25rem;
    }
`;

const DesignText = styled.div`
    min-height : 100px;
    font-size : 1.375rem;

    @media screen and (max-width: 1024px) {
        font-size : 1.25rem;

        & > img {
            width : 20px;
            height : 20px;
        }
    }

    @media screen and (max-width: 500px) {
        font-size : 1rem;
    }

`;

const DesignTag = styled.div`

    font-size : 1rem;

    @media screen and (max-width: 1024px) {
        font-size : 0.875rem;
    }

    @media screen and (max-width: 500px) {
        font-size : 0.75rem;
    }

    & > span { 
        padding : 2px 8px;
        margin-right : 8px;
        border-radius : 100px;
        background-color : rgba(0,0,0,.1);
        transition:all 0.3s ease-out;

        &:hover {
            background-color : rgba(0,0,0,.2);
            transition:all 0.3s ease-out;
        }
    }

`;


// 오른쪽 이미지, 파일 설명
const RightBox = styled.div`
    width : 50%;

    // margin : 5% auto;
    // margin-right : -5%;

    display : inline-block;
   
    text-align : left;

    border-radius : 15px;

    word-wrap: break-word;
    background-color : pink;
    vertical-align: middle;


    @media screen and (max-width: 768px) {
        width : 40%;
    }

    & > div {
        height: 300px;
    }
`;




function Design(props) {
    const page = props.pages;

    const OpenFile =(e) => {
        e.preventDefault();
        window.location.href='#';
    }
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Section id={page.id}>
       {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
            <DesignArticle>
                <LeftBox>
                    <DesignTitle>타이틀</DesignTitle>
                    <DesignText><p>소개</p></DesignText>
                    <DesignTag><span>#태그1</span><span>#태그1</span></DesignTag>
                </LeftBox>
                <RightBox>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <button type="button" onClick={OpenFile}>
                            sdfdsf
                        </button>
                    </div>
                </RightBox>
            </DesignArticle>
            <DesignArticle><div>2</div></DesignArticle>
            <DesignArticle><div>3</div></DesignArticle>
            <DesignArticle><div>4</div></DesignArticle>
        </Slider>
        </Section>
    );
}

export default Design;