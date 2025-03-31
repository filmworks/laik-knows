'use client';

import Img from '../image';
import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import styles from './OpenVideoBox.module.scss';
import { VideoBoxTypes } from './OpenVideoBox.types';

export default function VideoBox({ video, img, sizes, videoIcon }: VideoBoxTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
    setIsLoading(true);
  };

  const handleClose = () => {
dev
    playerRef.current?.unload(); // zatrzymuje i czyści video
 main
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && iframeRef.current) {
      playerRef.current = new Player(iframeRef.current);
    }
  }, [isOpen]);

  return (
    <div className={styles.container} data-loading={isLoading}>
      {!isOpen && (
        <button
          aria-label='Otwórz wideo kursantki'
          onClick={handleOpen}
          className={styles.open}
        >
          <Img data={img} sizes={sizes} />
          <div>{videoIcon}</div>
        </button>
      )}

      {isOpen && (
        <div className={styles.video}>
          <iframe
            ref={iframeRef}
            onLoad={() => setIsLoading(false)}
            title='Film kursantki'
            src={`https://player.vimeo.com/video/${video}?h=8f0ffe497b&autoplay=1&controls=1&title=0&byline=0&portrait=0&dnt=1&api=1`}
            allow='autoplay; fullscreen'
            allowFullScreen
          ></iframe>

 dev
          <button onClick={handleClose} className={styles.closeButton} aria-label='Zamknij wideo'>
            ❌
          </button>

          <div className={styles.loader}>
            <div />
          </div>
        </div>
      )}
    </div>
  );
}
