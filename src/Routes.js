import CityDashboard from "./Components/CityDashboard/CityDashboard";
import CityTasksContainer from "./Components/CityTasksContainer/CityTasksContainer";

export const routes = [
	{
		path: "/list",
		component: CityTasksContainer,
	},
	{
		path: "/",
		component: CityDashboard,
	},
];
