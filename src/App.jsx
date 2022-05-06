import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserListContainer } from './components/users/UserListContainer';
import { UserNew } from './components/users/UserNew';
import { UserScreen } from './components/users/UserScreen';
import { UserUpdate } from './components/users/UserUpdate';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>

        {/* <Route path='/' element={ <HeaderPublic />}>
          <Route index element={ <LogginScreen />} />
        </Route> */}

        <Route path='/' element={ <UserScreen /> }>
          <Route index element={ <UserListContainer /> } />
          <Route path='new' element={ <UserNew /> } />
          <Route path='update' element={ <UserUpdate /> } />
        </Route>
        
      </Routes>    
    </BrowserRouter>
    
  )
}

export default App;