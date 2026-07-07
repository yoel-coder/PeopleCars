import React, { Component } from "react";
import axios from "axios";
import withRouter from "../components/withRouter";
import CarRow from "../CarRow";

class DeleteCars extends React.Component {
     state = {
    cars: [],
    
    searchedCars: [],
    SearchTerm: '',
    isSearching: false
    }
onSearchChange = (e) => {this.setState({ isSearching: true });
    this.setState({ SearchTerm: e.target.value });
    const searchTerm = e.target.value;
    const filterdCars = this.state.cars.filter(c =>
        c.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.model.toLowerCase().includes(searchTerm.toLowerCase()));
       this.setState({searchedCars:filterdCars})
    }
    clearSearch = () => {
    this.setState({ searchedCars: [], isSearching: false , SearchTerm: ''});
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
        
            <p style={{ marginTop: '100px' }}></p>
            <input type="text" className="form-control" value={this.state.SearchTerm}
             placeholder="Search..." onChange={this.onSearchChange} />
            <button className="btn btn-secondary" onClick={this.clearSearch}>Clear Search</button>
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
{(this.state.isSearching?this.state.searchedCars:this.state.cars).map(c=> <CarRow key={c.id} car={c}/>)}
</tbody>
</table>
<button className="btn btn-danger" onClick={this.onDeleteClick}>Delete</button>
</div>
   </div>
   </div>
    
   

  }
  }
  export default withRouter(DeleteCars)