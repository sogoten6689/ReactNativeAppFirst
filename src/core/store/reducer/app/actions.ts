import {
  SetAlertPresentAction,
  SetVisibleSpinnerAction,
  SET_ALERT_PRESENT,
  SET_VISIBLE_SPINNER,
  UpdateLanguageCodeAction,
  UPDATE_LANGUAGE_CODE,
} from './types';

export const onSetVisibleSpinner = (
  payload: boolean,
): SetVisibleSpinnerAction => ({
  type: SET_VISIBLE_SPINNER,
  payload,
});

export const onUpdateCurrentLanguageCode = (
  payload: string,
): UpdateLanguageCodeAction => ({
  type: UPDATE_LANGUAGE_CODE,
  payload,
});

export const onSetAlertPresent = (payload: boolean): SetAlertPresentAction => ({
  type: SET_ALERT_PRESENT,
  payload,
});
