// src/layout/Layout.jsx
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Outlet /> {/* This renders the nested route component */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
