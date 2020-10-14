import {

  GET_USERS,
  SET_LOADING,
} from "../const/actionType";


const initialState = {

  users: [],
  isLoading: false
}
export default function (state = initialState , { type, payload }) {
  switch (type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
      case GET_USERS:
        return {...state,users: payload,isloading: false}
            default:
              return state;
          }
        }

