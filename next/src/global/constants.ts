/**
 * Global declaration of domain name of the website. Be aware of the protocol and www or non-www prefix.
 * @constant
 */
export const DOMAIN: string = 'https://filmworksacademy.pl/';

/**
 * Global default title.
 * @constant
 */
export const DEFAULT_TITLE: string = 'Laik Knows';

/**
 * Global default title.
 * @constant
 */
export const SHORT_TITLE: string = 'LaikKnows';

/**
 * URL for the main logo.
 * @constant
 */
export const LOGO_URL: string = `${DOMAIN}/icon-512.png`;

/**
 * Global description.
 * @constant
 */
export const DEFAULT_DESCRIPTION: string =
  'Odkryj tajniki tworzenia wysokiej jakości wideo, które przyciągają klientów i zwiększają sprzedaż. Zdobądź niezbędne umiejętności, aby wyróżnić się w branży beauty.';

/**
 * Global declaration of themeColor in HEX format.
 * @constant
 */
export const THEME_COLOR: string = '#101010';

/**
 * Global declaration of backgroundColor in HEX format.
 * @constant
 */
export const BACKGROUND_COLOR: string = '#000';

/**
 * Global declaration of page language.
 * @constant
 */
export const LOCALE: string = 'pl';

/**
 * Declaration of global easing.
 * @constant
 */
export const EASING: number[] = [0.5, 1, 0.89, 1];

export const REGEX: { email: RegExp; phone: RegExp; string: RegExp } = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/,
  string: /^(?!\s+$)(.*?)\s*$/,
};
