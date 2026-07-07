import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import PersonRow from "../PersonRow";
import DeleteCars from "./DeleteCars";
import withRouter from "../components/withRouter";



class PeopleTable extends React.Component {
state = {
    people: [],
    searchpeople: [],
    SearchTerm: '',
    isSearching: false
}
componentDidMount=() => {
    this.loadPeople();
};
loadPeople = async() => {
    console.log("loadPeople");
  const {data} = await axios.get('/api/PeopleCars/getall');
        this.setState({ people: data });

        
    };
clearSearch = () => {
    this.setState({ searchpeople: [], isSearching: false , SearchTerm: ''});
}
onSearchChange = (e) => {
    this.setState({ isSearching: true });
    this.setState({ SearchTerm: e.target.value });
    const searchTerm = e.target.value;
    const filteredpeople = this.state.people.filter(p =>
        p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ searchpeople: filteredpeople });
}
render() {
    return (
        
        <div className="container mt-5">
            <p style={{ marginTop: '100px' }}></p>
            <input type="text" className="form-control" value={this.state.SearchTerm}
             placeholder="Search..." onChange={this.onSearchChange} />
            <button className="btn btn-secondary" onClick={this.clearSearch}>Clear Search</button>
            <button className="btn btn-primary"><Link to="/add-person" className="text-light">Add Person</Link></button>
            <div className="row">
            <table className="table table-hover table-striped table-bordered mt-3">
          <thead>
       <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Age</td>
        <td>Car Count</td>
        <td>Add Car</td>
        <td> Delete Cars</td>
       </tr>
          </thead>
     <tbody>
   {(this.state.isSearching ? this.state.searchpeople : this.state.people).map(p => (
        <PersonRow key={p.id} Person={p}
 />
    ))}
    </tbody>
            </table>
        </div>
        </div>

);
}}

export default withRouter(PeopleTable); 














