import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/home';
import Navbar from './components/navbar';
import AddWorkouts from './pages/addWorkouts';
import EditWorkouts from './pages/editWorkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
          <Routes>
            <Route
              path='/add'
              element={<AddWorkouts />}
            />
          </Routes>
          <Routes>
            <Route
              path='/edit/:_id'
              element={<EditWorkouts/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
