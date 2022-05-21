// Describing the shape of the app's slice of state
export interface RootAppState {
  visibleSpinner: boolean;
  alertPresent: boolean;
  languageCode: string;
}

// Describing the different ACTION NAMES available
export const SET_VISIBLE_SPINNER = 'SET_VISIBLE_SPINNER';
export const SET_ALERT_PRESENT = 'SET_ALERT_PRESENT';
export const UPDATE_LANGUAGE_CODE = 'UPDATE_LANGUAGE_CODE';

export interface SetVisibleSpinnerAction {
  type: typeof SET_VISIBLE_SPINNER;
  payload: boolean;
}

export interface SetAlertPresentAction {
  type: typeof SET_ALERT_PRESENT;
  payload: boolean;
}

export interface UpdateLanguageCodeAction {
  type: typeof UPDATE_LANGUAGE_CODE;
  payload: string;
}

export type AppActionTypes =
  | SetVisibleSpinnerAction
  | SetAlertPresentAction
  | UpdateLanguageCodeAction;
