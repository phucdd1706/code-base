// THIRD-PARTY IMPORTS
import { InitialLoginContextProps } from '~/types/auth';

interface AuthReducerActionProps {
  type: string;
  payload?: InitialLoginContextProps;
}

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const authReducer = (state = initialState, action: AuthReducerActionProps) => {
  switch (action.type) {
    case 'LOGIN': {
      const { user } = action.payload!;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        user
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        user: null
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default authReducer;
