import React from "react";
import { Link } from "react-router-dom";


function PersonRow(props){
const {firstName,lastName,age,carsCount,id} = props.Person
const { onDeleteClick, onAddClick} = props;
return(
    console.log(carsCount),
<tr>
<td>{firstName}</td>
<td>{lastName}</td>
<td>{age}</td>
<td>{carsCount}</td>
<td><Link to={`/add-car/${id}`}>
 <button onClick={onAddClick} className="btn btn-primary">AddCar</button></Link></td>
<td><button onClick={onDeleteClick} className="btn btn-danger">Delete Cars</button></td>
</tr>



)
}

export default PersonRow;