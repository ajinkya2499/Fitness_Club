import { Routes, Route } from 'react-router-dom';
import Layout from '../Routing/Layout';
import Home from '../Pages/Home';

import Login from '../Components/EntryPages/Login';
import SignUpForm from '../Components/EntryPages/SignUpForm'

import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';
import Contact from '../Pages/Contact';
import Products from '../Pages/Products/ProductsDetails'
import Workout from '../Pages/WorkoutTrainer/WorkoutTrainer'


function Routing() {
  return (
    <>
   <Routes>
      <Route path="/login" element={<Login />} />
     

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
             
          </PrivateRoute>
        }
      > 
         <Route path= "home" element={<Home/>}/>
      <Route path= "products" element={<Products/>}/>
      <Route path="WorkoutTrainer" element={<Workout/>}/>
      <Route path="SignUpForm" element={<SignUpForm />} />
      </Route>
      
      <Route path="/contact" element={<Contact/>}/>
    

      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default Routing;
