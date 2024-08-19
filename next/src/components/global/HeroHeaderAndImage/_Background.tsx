'use client';

import { useEffect, useRef, useState } from 'react';
import Img from '@/components/ui/image';
import styles from './HeroHeaderAndImage.module.scss';
import { BackgroundTypes } from './HeroHeaderAndImage.types';

declare global {
  interface Window {
    Vimeo: {
      Player: new (element: HTMLIFrameElement) => VimeoPlayer;
    };
    onVimeoAPIReady?: () => void;
  }
}

interface VimeoPlayer {
  on(event: 'loaded', callback: () => void): void;
}

export default function Background({ video, img }: BackgroundTypes) {
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<VimeoPlayer | null>(null);

  useEffect(() => {
    const initializePlayer = () => {
      if (window.Vimeo && iframeRef.current) {
        playerRef.current = new window.Vimeo.Player(iframeRef.current);
        playerRef.current.on('loaded', () => {
          setIsVideoReady(true);
        });
      }
    };

    if (window.Vimeo) {
      initializePlayer();
    } else {
      window.onVimeoAPIReady = initializePlayer;
    }
  }, []);

  return (
    <>
      <Img data-video={isVideoReady} data={img} priority sizes='100vw' />
      <div className={styles.video} data-video={isVideoReady}>
        <iframe
          ref={iframeRef}
          loading='lazy'
          title='Twórz profesjonalne kursy video'
          src={`https://player.vimeo.com/video/${video}?h=8f0ffe497b&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1&background=1`}
          allow='autoplay; fullscreen'
        ></iframe>
      </div>
    </>
  );
}
