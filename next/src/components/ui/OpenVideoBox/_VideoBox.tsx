'use client';

import Img from '../image';
import Video from '../video';
import { useState } from 'react';
import styles from './OpenVideoBox.module.scss';
import { VideoBoxTypes } from './OpenVideoBox.types';

export default function VideoBox({ video, img, sizes, videoIcon }: VideoBoxTypes) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.open}>
        <Img data={img} sizes={sizes} />
        <div>{videoIcon}</div>
      </button>
      {isOpen && <Video onClick={() => setIsOpen(false)} className={styles.video} autoPlay src={video.asset.url} />}
    </>
  );
}
