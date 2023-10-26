import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { useMemo } from 'react';
import RootLayout from '../Layouts/Root/Root.layout.tsx';
import { useTabsContext } from '../context/tabs.context.ts';
import { pagesList } from './pages.list.ts';

const imports = pagesList.map((el) => ({ ...el, component: React.lazy(() => import(/* @vite-ignore */ el.path)) }));
const RouterComponent: React.FC = () => {
  const { tabs } = useTabsContext();

  const array = useMemo(
    () =>
      tabs.map((tab, index) => {
        const LazyComponent = imports.find((el) => el.id === tab.id)?.component;
        return LazyComponent ? <Route key={index} path={`/${tab.id}`} element={<LazyComponent />} /> : null;
      }),
    [tabs],
  );

  return (
    <HashRouter basename={import.meta.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to={`/${tabs[0].id}`} replace={true} />} />
          {array}
        </Route>
        <Route path="*" element={<p>no page</p>} />
      </Routes>
    </HashRouter>
  );
};

export default RouterComponent;
