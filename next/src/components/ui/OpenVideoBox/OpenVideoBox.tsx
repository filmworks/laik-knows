'use client';

import Img from '../image';
import Video from '../video';
import { useState } from 'react';
import styles from './OpenVideoBox.module.scss';
import type { OpenVideoBoxTypes } from './OpenVideoBox.types';

// Temporary solution with fullscreen ------------

export default function OpenVideoBox({ video, img, sizes = '' }: OpenVideoBoxTypes) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.open}>
        <Img data={img} sizes={sizes} />
        <div>
          <VideoIcon />
        </div>
      </button>
      {isOpen && <Video onClick={() => setIsOpen(false)} className={styles.video} autoPlay src={video.asset.url} />}
    </>
  );
}

const VideoIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
    <path stroke='#C3D5E2' strokeLinejoin='bevel' d='m3.363 1.656 11.283 6.657-11.282 6.656V1.656Z' />
  </svg>
);
