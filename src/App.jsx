import './App.css'
import Header from './components/header'
import Home from './components/home'
import Team from './components/team'
import Contact from './components/contact'
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/team' element={<Team></Team>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    </>
  )
}

export default App
