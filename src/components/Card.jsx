import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
// import detailIcon from "../assets/icons/details_icon.svg";
import CurrencyFormatter from "./CurrencyFormatter";
import ProgreeBar from "./ProgressBar";
const Figure = styled.figure`
  flex: 25%;
  border-radius: 5px;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  height: 250px;
  display: flex;
  position: relative;
  background-color: grey;
  justify-content: center;
  align-items: center;
  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(1, 1, 1, 0.5);
    top: 0;
    left: 0;
  }

  > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

const Name = styled.h3`
  color: white;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
`;

const FigCaption = styled.figcaption``;
const Balance = styled.h4`

`
const Amount = styled.small`
  text-align: right;
`


const Card = ({ item }) => {
  console.log(item);
  return (
    <Figure>
      <ImgWrapper>
        <Name> {item.name} </Name>
        {item.image_url ? <img src={item.image_url} alt={item.name} /> : ""}
      </ImgWrapper>

      <FigCaption>
         <Balance><CurrencyFormatter balance={item.balance}/></Balance>
         <ProgreeBar percentage={item.percentage}/>
         <Amount><CurrencyFormatter balance={item.amount}/></Amount>
         <Link to={ `/goals/${item.id}` }>Read more</Link>
        {/* <svg
         
        >
          <use xlinkHref={`${detailIcon}#detail`} />
        </svg> */}
      </FigCaption>
    </Figure>
  );
};

export default Card;
