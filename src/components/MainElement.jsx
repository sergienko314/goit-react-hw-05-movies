import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainElement = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainElement;
