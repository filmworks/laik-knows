'use client';

import Img from '../image';
import { useState, useRef } from 'react';
import styles from './OpenVideoBox.module.scss';
import { VideoBoxTypes } from './OpenVideoBox.types';

export default function VideoBox({ video, img, sizes, videoIcon }: VideoBoxTypes) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
    setIsLoading(true);
  };

  const handlePause = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        { method: 'pause' },
        '*'
      );
    }
  };

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
            src={`https://player.vimeo.com/video/${video}?h=8f0ffe497b&autoplay=1&controls=1&title=0&byline=0&portrait=0&dnt=1`}
            allow='autoplay; fullscreen'
            allowFullScreen
          ></iframe>

          <button onClick={handlePause} className={styles.pauseButton}>
            ⏸️ Pauza
          </button>

          <div className={styles.loader}>
            <div />
          </div>
        </div>
      )}
    </div>
  );
}
