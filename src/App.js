
import './App.css';

import SignUp from './components/SignUp'
import Login from './components/Login'
import Options from './components/OptionsPage'
import BookARide from './components/BookARide'
import OfferARide from './components/OfferARide'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  var Data=[
    {
        email:'reshma@gmail.com',
        password:'reshma@123'
    },
    {
        email:'spider@gmail.com',
        password:'spider@123'
    }
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SignUp Data={Data}></SignUp>} />
          <Route path='/Login' element={<Login Data={Data}></Login>} />
          <Route path='/OptionsPage' element={<Options Data={Data}></Options>}/>
          <Route path='/BookARide'element={<BookARide Data={Data}></BookARide>}/>
          <Route path='/OfferARide'element={<OfferARide Data={Data}></OfferARide>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
