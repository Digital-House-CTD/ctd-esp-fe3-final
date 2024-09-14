export const reducer = (state, action) => {
	switch (action.type) {
		case "GET_DENTISTS":
			return { ...state, data: action.payload };
		case "ADD_FAV":
			return { ...state, fav: [...state.fav, action.payload] };
		case "REMOVE_FAV":
			return {
				...state,
				fav: state.fav.filter((item) => item.id !== action.payload),
			};
		case "CHANGE_THEME":
			console.log(action.payload);
			return { ...state, theme: action.payload };
		default:
			throw new Error("Acción no existente");
	}
};
