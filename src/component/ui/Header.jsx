import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
// import "../../css/default.css";
// import "../../fonts/font.css";

const StyledHeader = styled.header`
    position: fixed;
    width : 100%;
    font-family: 'Noto Sans KR', sans-serif;
    color : #414141;
    z-index: 999;

    & > *  a {
        color : #414141;
        text-decoration: none;
        transition:all 0.3s ease-out;
    }
`;

const HeaderCanvas = styled.canvas`
    width : 100%;
    height : 70px;
`;

const Logo = styled.div`
    position : absolute;
    display : inline-block;
    font-size : 2rem;
    left : 15vw;
    top : 20%;
`;

const NavContainer = styled.nav`
    position : absolute;
    display : inline-block;
    text-align: right;
    right : 15vw;
    top : 28%;
    font-size : 1.25rem;

    & > ul > li  {
        margin-left : 3.3vw;
        display : inline-block;
    }
`;

const header_active = {
    width : '13px',
    height : '13px',
    backgroundColor : '#7A9DE2',
    /* transition: 0.3s; */
  };


function Header(props) {
    const {pages} = props;
    // const scrollIndex = props.scrollIndex;
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState();  //캔버스 컨텍스트를 useState로 상태관리
    // console.log(pages, scrollIndex);
    useEffect(() => {
        // const canva s: HTMLCanvasElement = canvasRef.current;
        const canvas = canvasRef.current;
  
        // wWidth = $(window).width();
        // wHeight = $(window).height();
        // // 디스플레이 크기 설정 (css 픽셀)
        // canvas.style.width = `${wWidth}px`;
        // canvas.style.height = `${wHeight}px`;
      
        // // 메모리에 실제 크기 설정 (픽셀 밀도를 고려하여 크기 조정)
        // const dpr = window.devicePixelRatio;
      
        //   canvas.width =  1920;
        // //   wWidth * dpr;
        //   canvas.height = 70;
        // //   wHeight * dpr;

          setCtx(canvas.getContext('2d'));
        //   console.log(ctx);
          if(!canvas || !ctx) return;
          // CSS에서 설정한 크기와 맞춰주기 위한 scale 조정
          // ctx.scale(dpr, dpr);
          // 도형 그리기
          ctx.beginPath();
          ctx.fillStyle = "rgb(255,255,255)";
          // 시작점 지정
          ctx.moveTo(180, 0);
          // ctx.quadraticCurveTo(곡선 그려질 x축, y축, 끝나는 지점x, y);

          ctx.quadraticCurveTo(170, 55, 310, 68);
          ctx.quadraticCurveTo(420, 70, 460, 67);
          ctx.quadraticCurveTo(800, 45, 1350, 68);
          ctx.quadraticCurveTo(1430, 70, 1480, 69);
          ctx.quadraticCurveTo(1750, 70, 1740, 0);
      
          ctx.fill();

    });
    // style={page.id== scrollIndex ? 'backgroundColor : #7A9DE2' : {} } 
    return (
        <StyledHeader>
            <HeaderCanvas ref={canvasRef} width="1920" height="70" />
            <Logo><a href="#">K.MINJI</a></Logo>
            <NavContainer>
                <ul>
                    {pages.map((page) => {
                        // var id = page.id;
                         return <li key={page.id} onClick={() => {props.scrollIndex = page.id}}><a href="#">{page.title.toUpperCase()}</a></li>;
                    })}
                </ul>
            </NavContainer>
        </StyledHeader>
    );
}

export default Header;