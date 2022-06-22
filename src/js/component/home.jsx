import React from "react";
import { useState } from "react";
import Form from "./Form.jsx";
import DisplayedList from "./DisplayedList.jsx";
//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	return (
		<div className="contenedor-principal">
			<div>
				<h1>LISTA DE TAREAS</h1>
			</div>
			<div>
				<Form list={list} setList={setList} />
				<DisplayedList list={list} setList={setList} />
			</div>
		</div>
	);
};

export default Home;
