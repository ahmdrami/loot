import React from 'react';
import {connect} from 'react-redux';
import { getIdItem } from '../actions';

class CardDetail extends React.Component {

   componentDidMount() {
      const { dispatch, match } = this.props;
      dispatch(getIdItem(match.params.id));
    }

    render() {
       console.log(this.props.item);
      return (
         <h2>Card detail</h2>
      )
    }
}


const mapStateToProps = state => {
   const { AppState } = state;
   const { item } = AppState || {
      data: []
   };
   // console.log(data, 'card detail')
   return {
     item
   };
 };
export default connect(mapStateToProps)(CardDetail);