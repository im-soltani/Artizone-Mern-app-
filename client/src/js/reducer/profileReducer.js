import { GET_CURRENT_PROFILE,GET_PROFILES,SET_LOADING,GET_PROFILE_ID} from '../const/actionType';
  const initialState = {
   profile:{},
    profiles: [],
    isLoading: false
  }
  export default function (state = initialState , { type, payload }) {
    switch (type) {
      case SET_LOADING:
        return { ...state, isLoading: true };
        case GET_CURRENT_PROFILE:
      return {
        ...state,profile:payload};
        case GET_PROFILES:
          return {...state,profiles: payload,loading: false}
          case GET_PROFILE_ID:
            return {...state,isloading: false, profile: payload };
              default:
                return state;
            }
          }

  