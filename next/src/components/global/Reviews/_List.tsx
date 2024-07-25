'use client';

import { useRef, useState } from 'react';
import { ListTypes } from './Reviews.types';
import Img from '@/components/ui/image';
import OpenVideoBox from '@/components/ui/OpenVideoBox';
import styles from './Reviews.module.scss';
import Button from '@/components/ui/Button';
import { removeMarkdown } from '@/utils/remove-markdown';

const REVIEWS_AT_ONCE = 6;
const SCROLL_OFFSET = 120;

export default function List({ list }: ListTypes) {
  const [visibleReviews, setVisibleReviews] = useState(REVIEWS_AT_ONCE);
  const listRef = useRef<HTMLUListElement>(null);
  const imgSizes = '(max-width: 459px) 63vw, (max-width: 1035px) 22vw, (max-width: 1259px) 222px, 209px';
  return (
    <>
      <ul className={styles.list} ref={listRef}>
        {list.slice(0, visibleReviews).map(({ name, content, instagram, image, video }, i) => (
          <li className={styles.item} key={i}>
            <div className={styles.instagram}>
              <span className={styles.name}>{name}</span>
              <a target='_blank' rel='noreferrer' className={styles.link} href={instagram.url || '/'}>
                <span>{instagram.username}</span>
              </a>
            </div>
            <div className={styles.container}>
              <div className={styles.box}>
                {video ? (
                  <OpenVideoBox img={image} video={video} sizes={imgSizes} />
                ) : (
                  <Img data={image} sizes={imgSizes} />
                )}
              </div>
            </div>
            {removeMarkdown(content)}
          </li>
        ))}
      </ul>
      <div className={styles.buttons}>
        {visibleReviews !== REVIEWS_AT_ONCE && (
          <Button
            onClick={() => {
              setVisibleReviews(REVIEWS_AT_ONCE);
              if (listRef.current) {
                const top = listRef.current.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
                window.scrollTo({ top, behavior: 'auto' });
              }
            }}
          >
            Zobacz mniej
          </Button>
        )}
        {visibleReviews < list.length && (
          <Button onClick={() => setVisibleReviews(prev => prev + REVIEWS_AT_ONCE)}>Zobacz więcej</Button>
        )}
      </div>
    </>
  );
}
