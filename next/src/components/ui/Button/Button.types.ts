export type ButtonTypes = (
  | {
      data: ButtonDataTypes;
      href?: never;
      children?: never;
    }
  | {
      data?: never;
      href?: ButtonDataTypes['href'];
      children: ButtonDataTypes['value'];
    }
) & { isLoading?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonDataTypes = {
  href: string;
  value: string | React.ReactNode;
  role: string;
};

export type CtaDataTypes = {
  list: {
    role: string;
    value: string;
    href: string;
  }[];
  additionalInfo: string;
};
