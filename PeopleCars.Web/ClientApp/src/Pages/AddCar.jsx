import React from "react";
import axios from "axios";
import withRouter from "../components/withRouter";
class AddCar extends React.Component {
  state = {
    car: {
      make: "",
      model: "",
      year: "",
      personId: this.props.params.id
    },
     person : {
        firstName: '',
        lastName: ''
     }  
}
    

  componentDidMount = async () => {
        const { data } = await axios.get(`/api/PeopleCars/getPersonById?id=${this.props.params.id}`);
        console.log(data);
        this.setState({person: data});
    }

  onTextChange = (e) => {
    const car = { ...this.state.car };
    car[e.target.name] = e.target.value;
    this.setState({ car });
  }
    onAddClick = async () => {
        
        await axios.post(`/api/PeopleCars/AddCar`, this.state.car);
        this.props.navigate('/');
    }
    render() {

        const { make, model, year } = this.state.car;
        return (
        <>
            <h1>Add Car for {this.state.person.firstName} {this.state.person.lastName}</h1>
            <div className="row p-5 rounded" style={{ backgroundColor: '#E9ECEF' }}>
                <div className="col-md-3">
                    <input value={make} onChange={this.onTextChange} name='make' type="text" className="form-control" placeholder="Make" />
                </div>
                <div className="col-md-3">
                    <input value={model} onChange={this.onTextChange} name='model' type="text" className="form-control" placeholder="Model" />
                </div>
                <div className="col-md-3">
                    <input value={year} onChange={this.onTextChange} name='year' type="text" className="form-control" placeholder="Year" />
                </div>
                <div className="col-md-3">
                    <button onClick={this.onAddClick} className="btn btn-primary">Add Car</button>
                </div>
            </div>
            </>
    
        );
    }
}
export default withRouter(AddCar)