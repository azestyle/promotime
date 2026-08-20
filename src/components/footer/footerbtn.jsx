import React from 'react';
import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";


export function Footerbtn({prompt}){
 const { t, i18n } = useTranslation();
 const navigate = useNavigate();
let text;
let address;
let id;
if (prompt.text) {
    text = prompt.text;
    address = prompt.address;
    id=prompt.id||''
} else {
    text = prompt;
}
function handleClick(){
  if(id.length>0){
    localStorage.setItem('productid',id);
   navigate(`/${i18n.language}/service/product`)
  }else{
    navigate(`/${i18n.language}/${address}`)
     window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
  }
  
}
  return (
    <StyledWrapper>
       {text.includes('href')?<button dangerouslySetInnerHTML={{ __html: text }}></button>:<button onClick={handleClick}>
        {t(text)}
      </button>}
      
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    font-size: 14px;
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 400;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    // text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  button:focus,
  button:hover {
    color: #fff;
  }

  button:focus:after,
  button:hover:after {
    width: 100%;
    left: 0%;
  }

  button:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }`;


