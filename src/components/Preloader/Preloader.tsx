import React from 'react';
import s from './Preloader.module.css';

const Preloader: React.FC = () => {
    return (
        <div className={s.preloaderBlock}>
            <img src="/preloader.svg" alt="preloader"/>
        </div>
    );
};

export default Preloader;
