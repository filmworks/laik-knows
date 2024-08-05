'use client';

import Img from '../image';
import Video from '../video';
import { useState } from 'react';
import styles from './OpenVideoBox.module.scss';
import { VideoBoxTypes } from './OpenVideoBox.types';

export default function VideoBox({ video, img, sizes, videoIcon }: VideoBoxTypes) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className={styles.container} data-loading={isLoading}>
      <button
        aria-label='Otwórz wideo kursantki'
        onClick={() => {
          setIsOpen(prev => !prev);
          if (!isOpen) setIsLoading(true);
        }}
        className={styles.open}
      >
        <Img data={img} sizes={sizes} />
        <div>{videoIcon}</div>
      </button>
      {isOpen && (
        <>
          {isLoading && (
            <div className={styles.loader}>
              <div />
            </div>
          )}
          <Video
            onClick={() => setIsOpen(false)}
            className={styles.video}
            loop
            onLoadStart={() => setIsLoading(true)}
            onLoadedData={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setIsOpen(false);
            }}
            muted
            autoPlay
            src={video.asset.url}
          />
        </>
      )}
    </div>
  );
}
