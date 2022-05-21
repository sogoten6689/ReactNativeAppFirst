import { LanguageEnum } from '@src/core/libs/constants';
import {
  RootAppState,
  AppActionTypes,
  SET_VISIBLE_SPINNER,
  SET_ALERT_PRESENT,
  UPDATE_LANGUAGE_CODE,
} from './types';

const initialState: RootAppState = {
  visibleSpinner: false,
  alertPresent: false,
  languageCode: LanguageEnum.VietNamese,
};

export const appReducer = (
  state = initialState,
  action: AppActionTypes,
): RootAppState => {
  switch (action.type) {
    case SET_VISIBLE_SPINNER: {
      return {
        ...state,
        visibleSpinner: action.payload,
      };
    }
    case SET_ALERT_PRESENT: {
      return {
        ...state,
        alertPresent: action.payload,
      };
    }

    case UPDATE_LANGUAGE_CODE: {
      return {
        ...state,
        languageCode: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
