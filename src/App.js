import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home';
import { useState } from 'react';
import { UserSearch } from './pages/userSearch/UserSearch';
import { UserDetails } from './components/userDetails/UserDetails';
import { Contacts } from './pages/Contacts';
import { Footer } from './components/footer/Footer';
import { NotFound } from './pages/not-found/NotFound';
import { GlobalStyle } from './styles/main';

export const App = () => {
  const [users, setUsers] = useState([]);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/surfer' element={<UserSearch users={users} setUsers={setUsers} />} />
          <Route path='/user/:id' element={<UserDetails users={users} />}></Route>
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};
