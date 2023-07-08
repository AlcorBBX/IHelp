import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type HtmlParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export interface ParagraphProps extends Omit<HtmlParagraphProps, 'className'> {
  className?: string;
  text?: string;
  loading?: boolean;
}
