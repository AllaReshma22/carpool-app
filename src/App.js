import './App.css';
import SignUp from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import BookCard  from './components/BookARide';
import OptionsPage from './components/OptionsPage';

import {BrowserRouter,Route , Routes,} from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<SignUp />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/options" element={<OptionsPage />} />
      <Route exact path="/BookRide" element={<BookCard/>} />
      <Route exact path="/OfferRide" element={<BookCard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;