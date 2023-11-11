import React, { useState } from 'react';
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
function Form({type, ids=[""]})
{
	const [id, id_s] = useState("");
	const [city, city_s] = useState("");
	const [country, country_s] = useState("");
	const [population, population_s] = useState("");
	const setId = (e) => id_s(e.target.value);
	const setCity = (e) => city_s(e.target.value);
	const setCountry = (e) => country_s(e.target.value);
	const setPopulation = (e) => population_s(e.target.value);
	function handler(e)
	{
		e.preventDefault();
		if (type == "create")
			reqF("POST", "/city", {}, {city: city, country: country, population:population});
		if (type == "update")
			reqF("PUT", "/city/" + id, {}, {city: city, country: country, population: population});
		if (type == "delete")
			reqF("DELETE", "/city/" + id, {}, {});
	}
	return (
	<div>
		<form onSubmit={handler}>
			{ type != "create" && <select onChange={setId}><option selected disabled>Enter id</option> {ids.map(x => (<option> {x} </option>))} </select> }
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
	const [Data, setData] = useState({});
	const [allData, setAllData] = useState([]);
	let ids = allData.map(x => x._id);
	React.useEffect(() => {
		reqF("GET", "/city", setAllData, {});
	}, []);
	return (
		<div>
			<div>This is fine</div>
			<table border="solid">{allData.map(el => <tr>
				<td>{el._id}</td>
				<td>{el.city}</td>
				<td>{el.country}</td>
				<td>{el.population}</td>
			</tr>)}</table>
			<Form type="create" ids={ids} />
			<Form type="delete" ids={ids}/>
			<Form type="update" ids={ids}/>
		</div>
	);
};
export default City;
