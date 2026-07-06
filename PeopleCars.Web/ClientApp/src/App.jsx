import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import PeopleTable from './Pages/PeopleTable';
import AddPerson from './Pages/AddPerson';
import AddCar from './Pages/AddCar';
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<PeopleTable />} />
                <Route path = '/add-person' element={<AddPerson />} />
                <Route path = '/add-car/:id' element={<AddCar />} />
            </Routes>
        </Layout>
    );
}

export default App;