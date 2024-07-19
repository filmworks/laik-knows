'use client';

import Img, { ImgDataTypes } from '@/components/ui/image';
import styles from './OpenVideoButton.module.scss';

type OpenVideoButtonTypes = {
  image: ImgDataTypes;
};

export default function OpenVideoButton({ image }: OpenVideoButtonTypes) {
  return (
    <button onClick={() => console.log('Video opened!')} className={styles.open}>
      <Img data={image} sizes='' />
      <div>
        <VideoIcon />
      </div>
    </button>
  );
}

const VideoIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
    <path stroke='#C3D5E2' strokeLinejoin='bevel' d='m3.363 1.656 11.283 6.657-11.282 6.656V1.656Z' />
  </svg>
);
