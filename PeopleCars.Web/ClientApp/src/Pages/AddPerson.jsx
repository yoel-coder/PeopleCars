import React from 'react';  
import axios from 'axios';
import withRouter from '../components/withRouter';
class AddPerson extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onTextChange = (e) => {
        const person = { ...this.state.person };
        person[e.target.name] = e.target.value;
        this.setState({ person });
    }
    onAddClick = async () => {
        await axios.post('/api/PeopleCars/AddPerson', this.state.person); 
        this.props.navigate('/');
    }
render() {
    const { firstName, lastName, age } = this.state.person;

    return (
        <div className="row p-5 rounded" style={{ backgroundColor: '#E9ECEF' }}>
            <div className="col-md-3">
                <input value={firstName} onChange={this.onTextChange} name='firstName' type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="col-md-3">
                <input value={lastName} onChange={this.onTextChange} name='lastName' type="text" className="form-control" placeholder="Last Name" />
            </div>
            <div className="col-md-3">
                <input value={age} onChange={this.onTextChange} name='age' type="text" className="form-control" placeholder="Age" />
            </div>
            <div className="col-md-3">
                <button onClick={this.onAddClick} className="btn btn-primary">Add Person</button>
                
            </div>
        </div>
    )
}
}
export default withRouter(AddPerson)