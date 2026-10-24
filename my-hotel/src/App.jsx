import './App.css';
import Hero from './components/Hero';
import MainLayout from './layout/MainLayout';
import { CssBaseline } from '@mui/material';
import Menu from './components/Meneu';
import Gallery from './components/Gallary';
import Contact from './components/Contact,';

const App = () => {
  return (
    <>
      <CssBaseline />
      <MainLayout>
        <Hero />
        <Menu />
        <Gallery />
        <Contact />
      </MainLayout>
    </>
  )
}

export default App
