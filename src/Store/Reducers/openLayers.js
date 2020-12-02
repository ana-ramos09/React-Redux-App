export const openLayersState = {
	mapType: "StamenTerrain",
};

const openLayersReducer = (state = openLayersState, action) => {
	switch (action.type) {
		case "SELECT_BASEMAP":
			return {
                ...state,
                mapType: action.payload
            };
		default:
			return state;
	}
};

export default openLayersReducer;
