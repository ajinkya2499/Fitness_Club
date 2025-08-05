import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#111', padding: '1rem', color: '#fff' }}>
      <Link to="/Home" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
      <Link to="product" style={{ marginRight: '1rem', color: '#fff' }}>Products</Link>
      <Link to='DietNutrition' style={{ marginRight: '1rem', color: '#fff' }}>Diet-Nutritionist</Link>
       <Link to='WorkoutTrainer' style={{ marginRight: '1rem', color: '#fff' }}>Workout-Trainer</Link>
      <Link to="contact" style={{ color: '#fff' }}>Contact</Link>

      <Link to='SignIn' style={{marginLeft:'100px' , color: '#fff'}}> Sign IN</Link>
    </nav>
  );
}


export default Navbar;
