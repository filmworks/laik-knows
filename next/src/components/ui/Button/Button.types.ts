export type ButtonTypes = {
  theme?: 'primary' | 'secondary';
  href?: string;
  text?: string | React.ReactNode;
  children?: string | React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
