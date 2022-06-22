import React from "react";

function NoTask({ list }) {
	console.log(list);
	if (list.length === 0) {
		return (
			<div>
				<p className="no-task-p">
					No hay ninguna tarea. Escribela y pulsa enter para añadirla
				</p>
			</div>
		);
	} else {
		return <></>;
	}
}

export default NoTask;
