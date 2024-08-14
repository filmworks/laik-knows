'use client';

import { useEffect, useState } from 'react';
import { getCookie } from '@/utils/get-cookie';
import { setCookie } from '@/utils/set-cookie';
import Button from '@/components/ui/Button';
import Switch from '@/components/ui/Switch';
import styles from './CookieConsent.module.scss';

/* eslint-disable prefer-rest-params */

const gtag: Gtag.Gtag = function () {
  window.dataLayer?.push(arguments);
};

const cookieObjectKeys = ['preferences', 'statistics', 'marketing'];

type CookiesObject = {
  preferences: 'granted' | 'denied';
  statistics: 'granted' | 'denied';
  marketing: 'granted' | 'denied';
};

const activeCookiesObject: CookiesObject = cookieObjectKeys.reduce((acc, name) => {
  acc[name as keyof CookiesObject] = 'denied';
  return acc;
}, {} as CookiesObject);

export default function Content() {
  const [showSettings, setShowSettings] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [activeCookies, setActiveCookies] = useState(activeCookiesObject);

  const handleKeyDown = (name: string, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const target = e.target as HTMLInputElement;
      target.checked = !target.checked;
      e.target.dispatchEvent(new Event('change', { bubbles: true }));
      changeConsent(name as keyof CookiesObject, e);
    }
  };

  useEffect(() => {
    const cookieValue = getCookie('cookie-content');
    if (cookieValue) {
      const cookie = JSON.parse(cookieValue) as CookiesObject;
      gtag('consent', 'default', {
        ad_personalization: cookie.marketing,
        ad_storage: cookie.marketing,
        ad_user_data: cookie.marketing,
        analytics_storage: cookie.statistics,
        functionality_storage: cookie.preferences,
        personalization_storage: cookie.preferences,
        security_storage: 'granted',
        wait_for_update: 2500,
      });
    } else {
      gtag('consent', 'default', {
        ad_personalization: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'denied',
        personalization_storage: 'denied',
        security_storage: 'granted',
        wait_for_update: 2500,
      });
      setShowBanner(true);
    }
    gtag('set', 'ads_data_redaction', true);
  }, []);

  const acceptAll = () => {
    setShowBanner(false);
    const cookies: CookiesObject = cookieObjectKeys.reduce((acc, name) => {
      acc[name as keyof CookiesObject] = 'granted';
      return acc;
    }, {} as CookiesObject);
    setCookie('cookie-content', JSON.stringify(cookies), 90);
    gtag('consent', 'update', {
      ad_personalization: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted',
      wait_for_update: 2500,
    });
  };

  const rejectAll = () => {
    setShowBanner(false);
    const cookies: CookiesObject = cookieObjectKeys.reduce((acc, name) => {
      acc[name as keyof CookiesObject] = 'denied';
      return acc;
    }, {} as CookiesObject);
    setCookie('cookie-content', JSON.stringify(cookies), 90);
    gtag('consent', 'update', {
      ad_personalization: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted',
      wait_for_update: 2500,
    });
  };

  const changeConsent = (
    name: keyof CookiesObject,
    event: React.MouseEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const target = event.target as Element;
    if (target.matches('input'))
      setActiveCookies(prevState => {
        const newState: CookiesObject = { ...prevState };
        newState[name] = prevState[name] === 'granted' ? 'denied' : 'granted';
        return newState;
      });
  };

  const acceptPart = () => {
    setShowBanner(false);
    setCookie('cookie-content', JSON.stringify(activeCookies), 90);
    gtag('consent', 'update', {
      ad_personalization: activeCookies.marketing,
      ad_storage: activeCookies.marketing,
      ad_user_data: activeCookies.marketing,
      analytics_storage: activeCookies.statistics,
      functionality_storage: activeCookies.preferences,
      personalization_storage: activeCookies.preferences,
      security_storage: 'granted',
      wait_for_update: 2500,
    });
  };

  return (
    <div className={styles['Content']} aria-hidden={!showBanner}>
      <header>
        <h2>{showSettings ? 'Ustawienia Cookies' : 'Korzystając ze strony zgadzasz się na użycie ciasteczek'}</h2>
        <p className={styles.paragraph}>
          Korzystamy z cookie i podobnych technologii, by analizować ruch na stronie, dopasować ją do Ciebie
          i wyświetlać trafniejsze reklamy.&nbsp;
          <a
            className='link'
            href='https://policies.google.com/technologies/cookies?hl=pl'
            target='_blank'
            rel='noreferrer'
          >
            Dowiedz się więcej
          </a>
        </p>
      </header>
      <div
        className={styles.settings}
        style={{ display: showSettings ? undefined : 'none' }}
        data-visible={showSettings}
      >
        <div className={styles.group}>
          <Switch
            inputProps={{
              checked: true,
              disabled: true,
            }}
          />

          <div className={styles.content}>
            <h3>Niezbędne</h3>
            <p>
              {' '}
              Niezbędne pliki cookie przyczyniają się do użyteczności strony poprzez umożliwianie podstawowych funkcji,
              takich jak nawigacja na stronie i dostęp do bezpiecznych obszarów strony internetowej. Strona www nie może
              funkcjonować poprawnie bez tych ciasteczek.
            </p>
          </div>
          <p className={styles.description}></p>
        </div>
        <div className={styles.group}>
          <Switch
            inputProps={{
              onClick: e => changeConsent('preferences', e),
              onKeyDown: e => handleKeyDown('preferences', e),
            }}
          />

          <div className={styles.content}>
            <h3>Preferencje</h3>
            <p>
              Pliki cookie dotyczące preferencji umożliwiają stronie zapamiętanie informacji, które zmieniają wygląd lub
              funkcjonowanie strony, np. preferowany język lub region, w którym znajduje się użytkownik.
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <Switch
            inputProps={{
              onClick: e => changeConsent('statistics', e),
              onKeyDown: e => handleKeyDown('statistics', e),
            }}
          />

          <div className={styles.content}>
            <h3>Statystyka</h3>
            <p>
              Statystyczne pliki cookie pomagają właścicielom stron internetowych zrozumieć, w jaki sposób różni
              użytkownicy zachowują się na stronie, gromadząc i zgłaszając anonimowe informacje.
            </p>
          </div>
          <p className={styles.description}></p>
        </div>
        <div className={styles.group}>
          <Switch
            inputProps={{
              onClick: e => changeConsent('marketing', e),
              onKeyDown: e => handleKeyDown('marketing', e),
            }}
          />
          <div className={styles.content}>
            <h3>Marketing</h3>
            <p>
              Marketingowe pliki cookie stosowane są w celu śledzenia użytkowników na stronach internetowych. Ich celem
              jest wyświetlanie reklam, które są istotne i interesujące dla poszczególnych użytkowników i tym samym
              bardziej cenne dla wydawców oraz reklamodawców strony trzeciej.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <Button theme='primary' onClick={() => acceptAll()}>
          Zgoda na wszystkie
        </Button>
        <div className={styles.row}>
          {showSettings ? (
            <Button onClick={() => acceptPart()}>Zapisz</Button>
          ) : (
            <Button onClick={() => setShowSettings(true)}>Ustaw Preferencje</Button>
          )}

          <Button onClick={() => rejectAll()}>Odmowa</Button>
        </div>
      </div>
    </div>
  );
}
