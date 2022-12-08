import { Outlet } from 'react-router-dom';

import Footer from 'widgets/Footer';
import Header from 'widgets/Header';

const Layout = () => {
  return (
    <div className="grid h-screen gap-4 grid-rows-layout">
      <Header />
      <main className="container h-full px-4 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
