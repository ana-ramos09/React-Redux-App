import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import AddList from "./Components/Add/AddList.js";
import List from "./Components/List/List.js";
import MiniList from "./Components/miniList/miniList.js";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "./firebaseUtils.js";
import { loadLists, deleteLists } from "./Store/Actions/index.js";
import { deleteList } from "./firebaseFuncs";
import { routes } from "./Routes.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const dispatch = useDispatch();

	const [listName, setListName] = useState("Parques");
	const [listLocation, setListlocation] = useState("São Paulo");

	const cities = useSelector((state) => state.main.cities);

	useEffect(() => {
		loadAllLists();
	}, []);

	const loadAllLists = () => {
		firestore
			.collection("lists")
			.get()
			.then((resp) => resp.docs.map((item) => item.data()))
			.then((citiesArray) => dispatch(loadLists(citiesArray)));
	};

	const deleteOneList = (index) => {
		dispatch(deleteLists(index));
	};

	return (
		<div className="App">
			<Header />
			<AddList
				listName={listName}
				setListName={setListName}
				listLocation={listLocation}
				setListlocation={setListlocation}
				updateLists={loadAllLists}
			/>
			<div className="main-container">
			<Router>
				<div className="lists-container">
					{cities.map((city, index) => (
						<MiniList
							key={index}
							index={index}
							location={city.location}
							name={city.name}
							points={city.points}
							delete={deleteOneList}
						/>
					))}
						<Switch>
							<Route exact path={routes[0].path} component={MiniList}/>
							<Route path={routes[1].path} component={List}/>
						</Switch>
					
					
					{/* <List
            			listName={listName}
            			setListName={setListName}
            			listLocation={listLocation}
            			setListlocation={setListlocation} */}
          			{/* /> */}
				</div>
			</Router>
				<div id="map" className="map-container"></div>
			</div>
		</div>
	);
}

export default App;
