'use client';

import Img from '../image';
import { useEffect, useRef, useState } from 'react';
import styles from './OpenVideoBox.module.scss';
import { VideoBoxTypes } from './OpenVideoBox.types';
import type Player from '@vimeo/player'; // 👈 poprawne typowanie

export default function VideoBox({ video, img, sizes, videoIcon }: VideoBoxTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<Player | null>(null); // 👈 unikamy `any`

  const handleOpen = () => {
    setIsOpen(true);
    setIsLoading(true);
  };

  const handleClose = () => {
    if (playerRef.current) {
      playerRef.current.pause().then(() => {
        playerRef.current?.setCurrentTime(0);
        setIsOpen(false);
      });
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen && iframeRef.current) {
      import('@vimeo/player').then(({ default: Player }) => {
        playerRef.current = new Player(iframeRef.current!);
      });
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
        <div className={styles.video} onClick={handleClose}>
          <iframe
            ref={iframeRef}
            onLoad={() => setIsLoading(false)}
            title='Film kursantki'
            src={`https://player.vimeo.com/video/${video}?h=8f0ffe497b&autoplay=1&controls=1&title=0&byline=0&portrait=0&dnt=1&api=1`}
            allow='autoplay; fullscreen'
            allowFullScreen
          ></iframe>

          <div className={styles.loader}>
            <div />
          </div>
        </div>
      )}
    </div>
  );
}
