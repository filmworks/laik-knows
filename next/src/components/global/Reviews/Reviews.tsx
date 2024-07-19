import Markdown from '@/components/ui/markdown';
import styles from './Reviews.module.scss';
import type { ReviewsTypes } from './Reviews.types';
import Link from 'next/link';
import Img from '@/components/ui/image';
import Button from '@/components/ui/Button';
import OpenVideoButton from './OpenVideoButton/OpenVideoButton';

export default function Reviews({ heading, list }: ReviewsTypes) {
  console.log(list);
  return (
    <section className={styles.section}>
      <div className='max-width'>
        <Markdown.h2>{heading}</Markdown.h2>
        <ul className={styles.list}>
          {list.map(({ name, content, instagram, image, video }, i) => (
            <li className={styles.item} key={i}>
              <div className={styles.instagram}>
                <span className={styles.name}>{name}</span>
                <Link className={styles.link} href={instagram.url || '/'}>
                  <span>{instagram.username}</span>
                </Link>
              </div>
              <div className={styles.container}>
                <div className={styles.box}>
                  {video ? <OpenVideoButton image={image} /> : <Img data={image} sizes='' />}
                </div>
              </div>
              <Markdown.p>{content}</Markdown.p>
            </li>
          ))}
        </ul>
        <Button>Zobacz więcej</Button>
      </div>
    </section>
  );
}
