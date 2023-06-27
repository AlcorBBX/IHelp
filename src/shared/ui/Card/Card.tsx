import { type ReactNode, forwardRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';
import { CardProps } from './Card.type';

const getAction = (actions: ReactNode[]) => {
  const actionList = actions.map((action, index) => (
    // eslint-disable-next-line
    <li style={{ width: `${100 / actions.length}%` }} key={`action-${index}`}>
      <span>{action}</span>
    </li>
  ));
  return actionList;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      extra,
      headStyle = {},
      bodyStyle = {},
      title,
      loading = false,
      size = 'default',
      theme = 'backgroundInverted',
      cover,
      actions,
      tabList,
      activeTabKey,
      defaultActiveTabKey,
      tabBarExtraContent,
      ...others
    },
    ref,
  ) => {
    const loadingBlock = 'loading';

    let head: ReactNode;
    if (title || extra) {
      head = (
        <div className={cls.head} style={headStyle}>
          <div className={cls.headWrapper}>
            {title && <div className={cls.headTitle}>{title}</div>}
            {extra && <div className={cls.extra}>{extra}</div>}
          </div>
          {/* {tabs} */}
        </div>
      );
    }

    const coverDom = cover ? <div className={cls.cover}>{cover}</div> : null;

    const body = (
      <div className={cls.body} style={bodyStyle}>
        {loading ? loadingBlock : children}
      </div>
    );

    const actionDom =
      actions && actions.length ? (
        <ul className={cls.actions}>{getAction(actions)}</ul>
      ) : null;

    const mods = {
      [cls[theme]]: true,
      [cls[size]]: true,
    };

    return (
      <div
        ref={ref}
        className={classNames(cls.card, mods, [className, cls[theme]])}
        {...others}
      >
        {head}
        {/* Обложка вверху каточки */}
        {coverDom}
        {body}
        {actionDom}
      </div>
    );
  },
);
