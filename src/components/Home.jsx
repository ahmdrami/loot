import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Wrapper = styled.section`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
`;
const Home = ({ data }) => {
   return <Wrapper>{data.map((item, i) => <Card key={i} item={item} />)}</Wrapper>;
};

export default Home;
