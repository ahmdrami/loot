import React from 'react';
import styled from 'styled-components';

const DateTime = styled.time`
   color: grey;
   font-size: 14px;
   display: block;
`;
const DateFormatter = ({ date, align, margin, color }) => {
   return (
      <DateTime
         dateTime={date}
         style={{
            textAlign: align,
            margin: `${margin}`,
            color: `${color}`
         }}>
         {`By ${new Date(date).toLocaleDateString()}`}
      </DateTime>
   );
};

export default DateFormatter;
