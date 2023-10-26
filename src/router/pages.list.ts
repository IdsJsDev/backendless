import React from 'react';

export const pagesList = [
  {
    path: '/src/pages/DummyChart/DummyChart.tsx',
    id: 'dummyChart',
    component: React.lazy(() => import('../pages/DummyChart/DummyChart.tsx')),
  },
  {
    path: '/src/pages/DummyList/DummyList.tsx',
    id: 'dummyList',
    component: React.lazy(() => import('../pages/DummyList/DummyList.tsx')),
  },
  {
    path: '/src/pages/DummyTable/DummyTable.tsx',
    id: 'dummyTable',
    component: React.lazy(() => import('../pages/DummyTable/DummyTable.tsx')),
  },
];
