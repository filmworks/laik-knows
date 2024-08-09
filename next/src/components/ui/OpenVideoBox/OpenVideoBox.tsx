import Img from '../image';
import styles from './OpenVideoBox.module.scss';
import type { OpenVideoBoxTypes } from './OpenVideoBox.types';
import VideoBox from './_VideoBox';

export default function OpenVideoBox({ video, img, sizes = '' }: OpenVideoBoxTypes) {
  if (!video) return <Img data={img} sizes={sizes} className={styles.img} />;
  return <VideoBox video={video} img={img} sizes={sizes} videoIcon={VideoIcon} />;
}

const VideoIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
    <path stroke='#C3D5E2' strokeLinejoin='bevel' d='m3.363 1.656 11.283 6.657-11.282 6.656V1.656Z' />
  </svg>
);
