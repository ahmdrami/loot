import * as actions from './index';

describe('App actions', () => {
   it('should match the type GET_ITEM_ID', () => {
      expect(actions.getIdItem(2)).toEqual({
         type: 'GET_ID_ITEM',
         id: 2
      });
   });
});
