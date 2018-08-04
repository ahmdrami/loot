export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const GET_ID_ITEM = "GET_ID_ITEM";


export const requestData = () => ({
  type: REQUEST_DATA
});

export const receiveData = resp => ({
  type: RECEIVE_DATA,
  result: resp,
});


const fetchData = () => dispatch => {

  dispatch(requestData());

  return fetch(`http://localhost:3001/api/goals`)
    .then(resp => resp.json())
    .then(resp => {
      dispatch(receiveData(resp));
    });
};

const shouldFetchData = (state) => {
  return state.AppState.data.length > 0 ?  false: true;

};

export const fetchDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchData(getState())) {
    return dispatch(fetchData())
  }

};

export const getIdItem = id => ({
   type: GET_ID_ITEM,
   id: id
})


