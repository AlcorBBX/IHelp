import cls from './HeaderLogo.module.scss';

export const HeaderLogo = () => (
  <div className={cls.headerLogo}>
    <span className={cls.companyName}>alnero</span>
    <p className={cls.projectName}>interviewhelp</p>
  </div>
);
