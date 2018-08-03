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


export const fetchData = () => dispatch => {

  dispatch(requestData());

  return fetch(`http://localhost:3001/api/goals`)
    .then(resp => resp.json())
    .then(resp => {
       console.log(resp);
      dispatch(receiveData(resp));
    });
};

export const getIdItem = id => ({
   type: GET_ID_ITEM,
   id: id
})
