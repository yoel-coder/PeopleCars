import React, { Component } from "react";
import axios from "axios";
import withRouter from "../components/withRouter";
import CarRow from "../CarRow";

class DeleteCars extends React.Component {
     state = {
    cars: []
    }

componentDidMount = async () => {
        const { data } = await axios.get(`/api/PeopleCars/GetCarByPerson?id=${this.props.params.id}`);
        this.setState({cars: data});
        console.log(data)
    }
    onDeleteClick = async()=>{
        await axios.post(`/api/PeopleCars/DeleteCars?Id=${this.props.params.id}`)
       this.props.navigate('/');
    }

  render() {
    return <div className="container">
   <div className="row">
 <div className="col-md-12">
<table className="table table-hover table-striped table-bordered mt-3 ">
<thead>
<tr>
<th>Make</th>
<th>Model</th>
<th>Year</th>
</tr>
</thead>
<tbody>
{this.state.cars.map(c=> <CarRow key={c.id} car={c}/>)}
</tbody>
</table>
<button className="btn btn-danger" onClick={this.onDeleteClick}>Delete</button>
</div>
   </div>
   </div>
    
   

  }
  }
  export default withRouter(DeleteCars)