import {

    GET_ANNONCE,
    SET_LOADING,
} from "../const/actionType";
const initState = {
 annonces:[],
 isLoading: false,
};
export default function (state = initState, { type, payload }) {
    switch (type) {
      case SET_LOADING:
        return { ...state, isLoading: true };
        case GET_ANNONCE:
      return {
        ...state,
        annonces: payload, isLoading: false  };
              default:
                return state;
            }
          }
         