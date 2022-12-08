import { Routes, Route, HashRouter as Router } from 'react-router-dom';

import Layout from 'widgets/Layout';
import MainPage from 'pages/MainPage';
import { ROUTE_PATH } from './lib/constants';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_PATH.INDEX} element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MainRoutes;
