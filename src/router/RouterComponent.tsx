import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Navigate to={`/${tabs[0].id}`} replace={true} />} />
          {array}
        </Route>
        <Route path="*" element={<p>no page</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
