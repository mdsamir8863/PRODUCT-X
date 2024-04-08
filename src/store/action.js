export const actionTypes = {
  SET_POPUP_FORM: 'SET_POPUP_FORM',
  UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
  SET_ERRORS: 'SET_ERRORS',
  ADD_USER: 'ADD_USER',
  DELETE_USER: 'DELETE_USER',
  TOGGLE_FEATURE: 'TOGGLE_FEATURE',
};

export const setPopupForm = (isVisible) => ({
  type: actionTypes.SET_POPUP_FORM,
  payload: isVisible,
});

export const updateFormData = (formData) => ({
  type: actionTypes.UPDATE_FORM_DATA,
  payload: formData,
});

export const setErrors = (errors) => ({
  type: actionTypes.SET_ERRORS,
  payload: errors,
});

export const addUser = (user) => ({
  type: actionTypes.ADD_USER,
  payload: user,
});

export const deleteUser = (index) => ({
  type: actionTypes.DELETE_USER,
  payload: index,
});

export const toggleFeature = (id) => ({
  type: actionTypes.TOGGLE_FEATURE,
  payload: id,
});
