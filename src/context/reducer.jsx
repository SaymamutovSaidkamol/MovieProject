const store = JSON.parse(localStorage.getItem("store"));

export const initialState = store || {
  savedCount: 0,
  saved: [],
  language: "UZ",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SAVED_MOVIE":
      let index = state.saved.findIndex(({ id }) => id === action.payload.id);
      let store = null;
      let count = state.savedCount;
      if (index < 0) {
        count += 1;
        store = {
          ...state,
          saved: [...state.saved, action.payload],
          savedCount: count,
        };
      } else {
        count -= 1;
        store = {
          ...state,
          saved: state.saved.filter(({ id }) => id !== action.payload.id),
          savedCount: count,
        };
      }
      localStorage.setItem("store", JSON.stringify(store));
      return store;

    case "LANGUAGE":
      const updatedStore = {
        ...state,
        language: action.payload,
      };
      localStorage.setItem("store", JSON.stringify(updatedStore));
      return updatedStore;
    default:
      return state;
  }
};
