import React from 'react';
import styled from 'styled-components';
import CurrencyFormatter from './utilities/CurrencyFormatter';
import ProgreeBar from './utilities/ProgressBar';
import IconLoader from './utilities/IconLoader';
import DateFormatter from './utilities/DateFormatter';
import Status from './utilities/Status';
import { ImgWrapper } from './CardCSS';

const Figure = styled.figure`
   flex: 100%;
   border-radius: 5px;
   overflow: hidden;
   box-shadow: 0px 16px 52px 1px rgba(0, 0, 0, 0.09);
   transition: box-shadow 0.3s, transform 0.3s;
   margin: 2%;
   @media (min-width: 768px) {
      flex: 46%;
   }
   @media (min-width: 1024px) {
      flex: 22%;
   }
   @media (min-width: 1024px) {
      flex: 20%;
   }

   &:hover {
      box-shadow: 0px 29px 87px -22px rgba(0, 0, 0, 0.69);
      transform: translateY(-10px);
   }
`;

const Name = styled.h3`
   color: white;
   text-transform: uppercase;
   position: relative;
   z-index: 1;
`;

const FigCaption = styled.figcaption`
   display: flex;
   flex-direction: column;
   padding: 1em;
   position: relative;
`;

const Card = ({ item }) => {
   return (
      <Figure>
         <ImgWrapper className="overlay">
            <Name> {item.name} </Name>
            {item.image_url ? <img src={item.image_url} alt={item.name} /> : ''}
         </ImgWrapper>

         <FigCaption>
            <Status linkId={item.id} status={item.status} />
            <CurrencyFormatter balance={item.balance} />
            <ProgreeBar percentage={item.percentage} />
            <CurrencyFormatter balance={item.amount} size={14} align="right" />
            {item.date ? (
               <DateFormatter date={item.date} align="center" margin="2em 0 0" color="#d0d0d0" />
            ) : (
               <IconLoader icon="infinity" height="40" width="40" margin="auto" />
            )}
         </FigCaption>
      </Figure>
   );
};

export default Card;
