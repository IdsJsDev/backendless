import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { useMemo } from 'react';
import RootLayout from '../Layouts/Root/Root.layout.tsx';
import { useTabsContext } from '../context/tabs.context.ts';
const RouterComponent: React.FC = () => {
  const { tabs } = useTabsContext();

  const array = useMemo(
    () =>
      tabs.map((tab, index) => {
        const LazyComponent = React.lazy(() => import(/* @vite-ignore */ `/src/pages/${tab.path}.tsx`));
        return <Route key={index} path={`/${tab.id}`} element={<LazyComponent />} />;
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
