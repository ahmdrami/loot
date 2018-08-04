import AppState from './index';

describe('App reducer', () => {
   it('should initialise an empty state with data empty and isFetching false', () => {
      expect(AppState(undefined, {})).toEqual({
         AppState: {
            data: [],
            isFetching: false
         }
      });
   });
});
