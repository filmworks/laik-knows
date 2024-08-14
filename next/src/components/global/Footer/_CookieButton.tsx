'use client';

import { setCookie } from '@/utils/set-cookie';

export default function CookieButton() {
  return (
    <button
      className='link'
      onClick={() => {
        setCookie('cookie-content', '', -1);
        window.location.reload();
      }}
    >
      Zarządzaj ciasteczkami
    </button>
  );
}
