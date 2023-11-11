import React, { useState, useEffect } from 'react';
function reqF(method_arg, path_arg, output_arg, input_arg)
{
	let url = "http://127.0.0.1:4000/city/api/v1" + path_arg;
	let options = {
		method: method_arg,
		headers: {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json',
		},
	};
	function accept(res)
	{
		console.log(res);
		if (method_arg == "GET")
			output_arg(res);		
	}
	function erf(err)
	{
		alert("error in reqF");
		console.log(err);
	}
	if (method_arg == "PUT" || method_arg == "POST")
	{
		options.body = JSON.stringify(input_arg);
	}
	if (method_arg == "GET")
		fetch(url, options).then(res => res.json()).then(accept).catch(erf);
	else
	{
		console.log("rekt");
		fetch(url, options).catch(erf);
	}
}
function Table({context}) {
	const tableStyle = {
		border: "2px",
		borderCollapse: "separate"
	};
	return (
		<table class="table table-bordered w-auto table-dark">
			<thead>
				<tr>
					<td>id</td>
					<td>city</td>
					<td>country</td>
					<td>population</td>
				</tr>
			</thead>
			<tbody>
				{context.map(x => (
					<tr>
						<td>{x._id}</td>
						<td>{x.city}</td>
						<td>{x.country}</td>
						<td>{x.population}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
function Form({type, context=[], trigger})
{
	const [id, id_s] = useState("");
	const [city, city_s] = useState("");
	const [country, country_s] = useState("");
	const [population, population_s] = useState("");
	const setId = (e) => id_s(e.target.value);
	const setCity = (e) => city_s(e.target.value);
	const setCountry = (e) => country_s(e.target.value);
	const setPopulation = (e) => population_s(e.target.value);
	const ids = context.map( x => x._id);
	useEffect( () => {
		if (id != "")
		{
			let target = context.find(x => x._id == id);
			city_s(target.city);
			country_s(target.country);
			population_s(target.population);
		}
	}, [id]);
	function handler(e)
	{
		e.preventDefault();
		if (type == "create")
			reqF("POST", "/city", {}, {city: city, country: country, population:population});
		if (type == "update")
			reqF("PUT", "/city/" + id, {}, {city: city, country: country, population: population});
		if (type == "delete")
			reqF("DELETE", "/city/" + id, {}, {});
		trigger(Math.random());
	}
	return (
	<div>
		<form onSubmit={handler}>
			{ type != "create" && <select onChange={setId}><option selected disabled>Enter id</option>
				{ids.map(x => (<option> {x} </option>))} 
			</select> }
			{ type != "delete" && <>
				<input name="city" value={city} onChange={setCity} placeholder="city"/> 
				<input name="country" value={country} onChange={setCountry} placeholder="country"/>
				<input name="population" value={population} onChange={setPopulation} placeholder="population"/> 
			</> }
			<input type="submit" value={type} />
		</form>
	</div>
	);
}
function City()
{
	const [allData, setAllData] = useState([]);
	const [trigger, activateTrigger] = useState(0);
	const [mode, setMode] = useState(0);
	let ids = allData.map(x => x._id);
	useEffect(() => {
		reqF("GET", "/city", setAllData, {});
	}, [trigger]);
	return (
		<div>
			<div>Page</div>
			<Table context={allData} />
			<button onClick={() => setMode(1)}>Create</button>
			<button onClick={() => setMode(2)}>Update</button>
			<button onClick={() => setMode(3)}>Delete</button>
			{mode == 1 && <Form type="create" context={allData} trigger={activateTrigger} /> }
			{mode == 2 && <Form type="delete" context={allData} trigger={activateTrigger} /> }
			{mode == 3 && <Form type="update" context={allData} trigger={activateTrigger} /> }
			<LogReg />
		</div>
	);
};

class LogReg extends React.Component {
	render() {
		return (
		<>
			<form>
				<input />
				<input />
				<input type="submit" />
			</form>
		</>
		);
	}
}
export default City;
