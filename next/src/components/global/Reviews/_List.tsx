'use client';

import { useState } from 'react';
import { ListTypes, SingleReviewType } from './Reviews.types';
import sanityFetch from '@/utils/sanity.fetch';
import { SingleReview_Query } from '@/components/global/Reviews';
import Img from '@/components/ui/image';
import OpenVideoBox from '@/components/ui/OpenVideoBox';
import Link from 'next/link';
import styles from './Reviews.module.scss';
import Loader from '@/components/ui/Loader';
import Button from '@/components/ui/Button';
import { removeMarkdown } from '@/utils/remove-markdown';

export default function List({ list, reviewNum }: ListTypes) {
  const VISIBLE_REVIEWS = 6;
  const [reviews, setReviews] = useState<SingleReviewType[]>(list);
  const [isLoading, setIsLoading] = useState(false);
  const imgSizes = '(max-width: 459px) 63vw, (max-width: 1035px) 22vw, (max-width: 1259px) 222px, 209px';
  const fetchMoreReviews = async () => {
    setIsLoading(true);

    const additionalReviews: (SingleReviewType & { content: string })[] = await sanityFetch({
      query: `
              *[_type == "Index_Page"][0].content[_type == "Reviews"].list[${reviews.length} ... ${reviews.length + VISIBLE_REVIEWS}] -> ${SingleReview_Query}
        `,
    });
    setReviews(prev => [...prev, ...additionalReviews]);
    setIsLoading(false);
  };
  return (
    <>
      <ul className={styles.list}>
        {reviews.map(({ name, content, instagram, image, video }, i) => (
          <li className={styles.item} key={i}>
            <div className={styles.instagram}>
              <span className={styles.name}>{name}</span>
              <Link className={styles.link} href={instagram.url || '/'}>
                <span>{instagram.username}</span>
              </Link>
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
      {isLoading && <Loader center />}
      {!isLoading && (
        <div className={styles.buttons}>
          {reviews.length !== VISIBLE_REVIEWS && <Button onClick={() => setReviews(list)}>Zobacz mniej</Button>}
          {reviews.length < reviewNum && <Button onClick={fetchMoreReviews}>Zobacz więcej</Button>}
        </div>
      )}
    </>
  );
}
