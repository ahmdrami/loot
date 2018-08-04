import React from 'react';
import { connect } from 'react-redux';
import { getIdItem, fetchDataIfNeeded } from '../actions';
import styled from 'styled-components';
import Status from './utilities/Status';
import CurrencyFormatter from './utilities/CurrencyFormatter';
import { H4, ImgWrapper } from './CardCSS';
import DateFormatter from './utilities/DateFormatter';

const Section = styled.section``;
const SectionDetail = styled.div`
   display: flex;
   flex-wrap: wrap;
   padding: 1em;
`;

const Box = styled.div`
   flex: 50%;

   &:nth-child(odd),
   &:last-child {
      text-align: right;
   }

   &.flex-100 {
      flex: 100%;
   }
`;

const Description = styled.p`
   margin: 0;
   color: #777;
   line-height: 1.5;
`;

class CardDetail extends React.Component {
   componentDidMount() {
      const { dispatch, match } = this.props;
      dispatch(fetchDataIfNeeded());
      dispatch(getIdItem(match.params.id));
   }

   componentWillReceiveProps(nextProps) {
      const { dispatch, match } = nextProps;
      dispatch(getIdItem(match.params.id));
   }

   render() {
      const item = this.props.item;
      return item ? (
         <Section>
            <ImgWrapper>{item.image_url ? <img src={item.image_url} alt="" /> : ''}</ImgWrapper>
            <SectionDetail>
               <Box className="flex-100">
                  <Status status={item.status} />
               </Box>
               <Box>
                  <H4> {item.name} </H4>
               </Box>
               <Box className="align-right">
                  <CurrencyFormatter balance={item.balance} />
               </Box>
               <Box>
                  <Description> {item.description}</Description>
               </Box>
               <Box className="align-right">
                  <CurrencyFormatter balance={item.amount} size="14" separator="/" />
               </Box>
               {item.date ? (
                  <Box>
                     <DateFormatter date={item.date} color="#777777" />
                  </Box>
               ) : (
                  ''
               )}
            </SectionDetail>
         </Section>
      ) : (
         <h2>Not found</h2>
      );
   }
}

const mapStateToProps = state => {
   const { AppState } = state;
   const { item } = AppState || {
      item: null
   };
   return {
      item
   };
};
export default connect(mapStateToProps)(CardDetail);
