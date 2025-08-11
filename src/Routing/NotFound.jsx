import { useNavigate } from "react-router-dom";
import ErrorImg from '../assets/Images/8632.jpg'

function NotFound() {

  const navigate= useNavigate()

  function HandlegGoBack(){
    navigate('/home')
  }
  return( 
    <>
    <div style={{ textAlign: 'center' }}>
      <img src={ErrorImg} alt=""  width="500" height="400"  />
  <h2 style={{ marginBottom:'20px' }}>404 - Page Not Found</h2>
  <button onClick={HandlegGoBack}
          style={{  width:"150px", height:"50px", borderRadius:"15px",backgroundColor:'#FF6666',fontSize:'18x'}}>Go-Back Home</button>
          </div>
  </>
  )
}
export default NotFound;