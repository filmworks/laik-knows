'use client';

import { useState } from 'react';
import Img from '../image';
import styles from './OpenVideoBox.module.scss';
import type { OpenVideoBoxTypes } from './OpenVideoBox.types';
import Video from '../video';

// Temporary solution with fullscreen ------------

export default function OpenVideoBox({ video, img }: OpenVideoBoxTypes) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(video.asset.url);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.open}>
        <Img data={img} sizes='' />
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
