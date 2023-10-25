import React from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader.tsx';
import Header from '../../components/Header/Header.tsx';
import cls from './styles.module.scss';

const RootLayout: React.FC = () => {
  return (
    <div className={cls.page}>
      <Header />
      <React.Suspense fallback={<Loader />}>
        <Outlet />
      </React.Suspense>
    </div>
  );
};

export default RootLayout;
