import React from 'react';
import { H4, Small } from '../CardCSS';

const CurrencyFormatter = ({ balance, size, align, separator }) => {
   return (
      <H4 style={{ margin: `${separator ? '0' : '8px 0'}`, fontSize: `${size}px`, textAlign: align }}>
         <Small>{separator} £</Small>
         {(balance / 100).toFixed(2)}
      </H4>
   );
};

export default CurrencyFormatter;
