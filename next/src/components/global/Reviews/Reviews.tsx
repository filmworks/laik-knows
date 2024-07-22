'use client';

import styles from './Reviews.module.scss';
import type { ReviewsTypes, SingleReviewType } from './Reviews.types';
import Link from 'next/link';
import Img from '@/components/ui/image';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import sanityFetch from '@/utils/sanity.fetch';
import Loader from '@/components/ui/Loader';
import { VISIBLE_REVIEWS } from '@/global/constants';
import { SingleReview_Query } from '.';
import OpenVideoBox from '@/components/ui/OpenVideoBox';

export default function Reviews({ heading, list, reviewNum }: ReviewsTypes) {
  const [reviews, setReviews] = useState<SingleReviewType[]>(list);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMoreReviews = async () => {
    setIsLoading(true);

    const additionalReviews: SingleReviewType[] = await sanityFetch({
      query: `
            *[_type == "Index_Page"][0].content[_type == "Reviews"].list[${reviews.length} ... ${reviews.length + VISIBLE_REVIEWS}] -> ${SingleReview_Query}
      `,
    });
    setReviews(prev => [...prev, ...additionalReviews]);
    setIsLoading(false);
  };

  console.log(reviews);
  return (
    <section className={styles.section}>
      <div className='max-width'>
        <h2>{heading}</h2>
        {/* Markdown error on client component -- To fix */}
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
                  {video ? <OpenVideoBox img={image} video={video} /> : <Img data={image} sizes='' />}
                </div>
              </div>
              <p>{content}</p>
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
      </div>
    </section>
  );
}
