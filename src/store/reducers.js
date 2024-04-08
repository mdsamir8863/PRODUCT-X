const initialState = {
  popupForm: false,
  formData: {
    name: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phoneNumber: "",
  },
  errors: {
    name: false,
    companyName: false,
    address: false,
    city: false,
    state: false,
    zip: false,
    country: false,
    phoneNumber: false,
  },
  users: [],
  features: [
    { id: 1, name: "Feature 1", isChecked: false },
    { id: 2, name: "Feature 2", isChecked: false },
    { id: 3, name: "Feature 3", isChecked: false },
    { id: 4, name: "Feature 4", isChecked: false },
    { id: 5, name: "Feature 5", isChecked: false },
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_POPUP_FORM":
      return {
        ...state,
        popupForm: action.payload,
      };
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        formData: { ...state.formData, ...action.payload },
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: { ...state.errors, ...action.payload },
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER": {
      const updatedUsers = [...state.users];
      updatedUsers.splice(action.payload, 1);
      return {
        ...state,
        users: updatedUsers,
      };
    }
    case "TOGGLE_FEATURE": {
      const updatedFeatures = state.features.map((feature) =>
        feature.id === action.payload
          ? { ...feature, isChecked: !feature.isChecked }
          : feature
      );
      return {
        ...state,
        features: updatedFeatures,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
