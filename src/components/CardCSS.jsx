import styled from 'styled-components';
export const H4 = styled.h4`
   color: black;
   font-weight: 400;
   font-size: 20px;
   text-transform: capitalize;
   margin: 8px 0;
`;

export const Small = styled.small`
   margin-right: 3px;
`;

export const Label = styled.label`
   padding: 2px 18px;
`;


export const ImgWrapper = styled.div`
  height: 250px;
  display: flex;
  position: relative;
  background-color: grey;
  justify-content: center;
  align-items: center;
  &.overlay::after {
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