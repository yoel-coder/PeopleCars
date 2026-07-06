import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import PeopleTable from './Pages/PeopleTable';
import AddPerson from './Pages/AddPerson';
import AddCar from './Pages/AddCar';
import DeleteCars from './Pages/DeleteCars';
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<PeopleTable />} />
                <Route path = '/add-person' element={<AddPerson />} />
                <Route path = '/add-car/:id' element={<AddCar />} />
               <Route path='/DeleteCars/:id' element={<DeleteCars />}/>
            </Routes>
        </Layout>
    );
}

export default App;