import React from 'react';
import icons from '../../assets/icons/icons.svg';
const IconLoader = ({ icon, width, height, margin, fill }) => {
   return (
      <svg
         style={{
            width: `${width}px`,
            height: `${height}px`,
            margin: `${margin}`,
            fill: `${fill}`
         }}>
         <use xlinkHref={`${icons}#${icon}`} />
      </svg>
   );
};

export default IconLoader;
