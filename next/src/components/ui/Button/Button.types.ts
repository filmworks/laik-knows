export type ButtonTypes = (
  | {
      data: ButtonDataTypes;
      href?: never;
      children?: never;
    }
  | {
      data?: never;
      href?: ButtonDataTypes['href'];
      children: ButtonDataTypes['text'];
    }
) & { isLoading?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonDataTypes = {
  href: string;
  text: string | React.ReactNode;
};

export type CtaDataTypes = {
  button: ButtonDataTypes;
  paragraph: string;
};
