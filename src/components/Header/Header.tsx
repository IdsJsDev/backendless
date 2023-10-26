import React, { memo, useEffect } from 'react';
import { useTabsContext } from '../../context/tabs.context.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import cls from './Header.module.scss';
import cn from 'classnames';

const Header: React.FC = () => {
  const { tabs, active, setActiveTab } = useTabsContext();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <div className={cls.header}>
      {tabs?.map((tab) => (
        <div
          className={cn(cls.tab, { [cls.active]: active === `/${tab.id}` })}
          key={tab.key}
          onClick={() => navigate(`/${tab.id}`)}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default memo(Header);
