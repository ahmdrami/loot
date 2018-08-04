import React from 'react';
import { Link } from 'react-router-dom';
import IconLoader from './IconLoader';
import styled from 'styled-components';
import { Label } from '../CardCSS';

const StatusContainer = styled.div`
   position: relative;
   color: #fff;
   padding 1px;
   border-radius: 5px;
   display: inline-flex;
   margin-bottom: 1em;
   background-color: #f6cb47;
   &.completed {
      background-color: #4db7c3
   }
   &.readmore {
      position: absolute;
      top: -14px;
      right: 1em;
   }
`;

const Status = ({ linkId, status }) => {
   const itemStatus = status === 'COMPLETED' ? true : false;
   return (
      <StatusContainer
      className= {
         [
            linkId ? 'readmore' : '',
            itemStatus ? 'completed' : ''
         ].join(' ')
      }
         >
         {linkId ? (
            <Link to={`/goals/${linkId}`}>
               <IconLoader icon="detail" width="25" height="25" fill="#fff" />
            </Link>
         ) : itemStatus ? (
            <Label>Release Funds</Label>
         ) : (
            ''
         )}
      </StatusContainer>
   );
};

export default Status;
