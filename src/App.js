import logo from './logo.png';
import './App.css';
import Courses from './components/Courses/Courses';
import fakeData from './fakeData/db.json';
import Cart from './components/Cart/Cart';
import { useState } from 'react';


function App() {

 const data=fakeData;
//  console.log(data)

let [cart,setCart]=useState([]);


const handleCourseNum=(el)=>{
 
  // console.log(cart);
  let newCart=[...cart,el];
  setCart(newCart);
 
}
  return (
    <div className="App">
     <div className="header">
       <img src={logo} alt=""/>
     </div>
     <div className="academy-container row">
       <div className="courses-container col-md-8">
           {
             data.map(el=><Courses course={el} id={el.id} handleCourseNum={handleCourseNum}></Courses>)
           }
       </div>
       <div className="cart-container col-md-4">
          
            <Cart cart={cart}></Cart>

       </div>
     </div>
    </div>
  );
}

export default App;
