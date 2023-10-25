import React from 'react';
import cls from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={cls.loaderWrapper}>
      <span className={cls.loader}></span>
    </div>
  );
};

export default Loader;
