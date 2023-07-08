import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import { SizeVariant, ThemeVariant } from 'shared/types';

type CardTheme = ThemeVariant;

type CardSize = SizeVariant;

interface CardTabListType {
  key: string;
  tab: ReactNode;
  disabled?: boolean;
}

type HtmlDivProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'>;

export interface CardProps extends HtmlDivProps {
  className?: string;
  children?: ReactNode;
  prefixCls?: string;
  title?: ReactNode;
  extra?: ReactNode;
  // bordered?: boolean;
  headStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  style?: CSSProperties;
  loading?: boolean;
  // hoverable?: boolean;
  // id?: string;
  size?: CardSize;
  theme?: CardTheme;
  cover?: ReactNode;
  actions?: ReactNode[];
  tabList?: CardTabListType[];
  tabBarExtraContent?: ReactNode;
  onTabChange?: (key: string) => void;
  activeTabKey?: string;
  defaultActiveTabKey?: string;
  // tabProps?: TabsProps;
}

// type SelectionCardView = 'outlined' | 'clear';
// type ContainerCardView = 'outlined' | 'filled' | 'raised';

// type CardType = 'selection' | 'action' | 'container';
// type CardTheme = 'normal' | 'info' | 'positive' | 'warning' | 'danger';
// type CardView = SelectionCardView | ContainerCardView;
// type CardSize = 'm' | 'l';

// export interface CardProps {
//   children: ReactNode;
//   className?: string;
//   /** Card click handler. Available for type: 'selection', 'action' */
//   onClick?: (event: MouseEvent<HTMLDivElement>) => void;
//   /** Disabled card. Available for type: 'selection', 'action' */
//   disabled?: boolean;
//   /** Selected card. Available for type: 'selection' */
//   selected?: boolean;
//   /** Card's type affects on available properties */
//   type?: CardType;
//   /** Available for type: 'container' and 'selection' */
//   view?: CardView;
//   /** Card's base color. Available for type: 'container' */
//   theme?: CardTheme;
//   /** Card's size affects on available properties */
//   size?: CardSize;
// }
