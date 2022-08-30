import React, { Suspense, lazy } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import theme from './themes/index';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Forecast from './components/Forecast';

const Home = lazy(() => import('./components/Home'));
const Finder = lazy(() => import('./components/Finder'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route
                exact
                path="/"
                element={<Home />}
              />
              <Route
                path='/finder'
                element={<Finder />}
              />
              <Route
                path='/forecast'
                element={<Forecast />}
              />
            </Routes>
            <Footer />
          </div>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
