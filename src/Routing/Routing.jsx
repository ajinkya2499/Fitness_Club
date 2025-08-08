import { Routes, Route } from 'react-router-dom';
import Layout from '../Routing/Layout';
import Home from '../Pages/Home';
import ProductDetails from '../Pages/Products/ProductsDetails';
import Contact from '../Pages/Contact';
import ProductPage from '../Pages/Products/ProductPage';
import All_Whey from '../Pages/Products/All_Whey';
import DietNutrition from '../Pages/DietNutrition/DietNutrition';
import WorkoutTrainer from '../Pages/WorkoutTrainer/WorkoutTrainer';
import Login from '../Components/EntryPages/Login';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';
import SignUpForm from '../Components/EntryPages/SignUpForm'

function Routing() {
  return (
    <>
   <Routes>
      <Route path="/" element={<Login />} />
     

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
         <Route path="SignUpForm" element={<SignUpForm/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="DietNutrition" element={<DietNutrition />} />
        <Route path="WorkoutTrainer" element={<WorkoutTrainer />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default Routing;
