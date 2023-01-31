import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';


const Shop = () => {
  return(
    <h1>Shop Test</h1>
  )
}

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index='true' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;