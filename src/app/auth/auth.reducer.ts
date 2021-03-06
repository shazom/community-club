import {LOGIN, LOGIN_SUCCESS, LOGOUT} from './actions.service';
export function authReducer(state = {}, action) {

  switch (action.type) {
    case LOGIN: {
      console.log('We are now in the reducer. We chose LOGIN and we set Pending to true.');
      return Object.assign({}, state, {pending: true, user: action.payload});
    }
    case LOGIN_SUCCESS:
    {
      console.log('Were in the reducer, at LOGIN_SUCCESS');
      return Object.assign({}, state, {user: action.payload, pending: false, secureGroup: 'USER'});
    }
    case LOGOUT:
      return Object.assign({}, state, {user: null, secureGroup: null, pending: false});

    default:
    {
      console.log('Reducer reached default case, returning same state');
      return state;
    }
  }

}
