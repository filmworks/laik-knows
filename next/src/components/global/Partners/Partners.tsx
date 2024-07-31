import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './Partners.module.scss';
import type { PartnersTypes } from './Partners.types';

export default function Partners({ heading, paragraph, list, index }: PartnersTypes) {
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;

  return (
    <section className={styles.section}>
      <div className='max-width'>
        <header>
          <Heading>{heading}</Heading>
          <Markdown.p>{paragraph}</Markdown.p>
        </header>
      </div>
      <div className={styles.container}>
        <ul className='max-width'>
          {list.map(({ name, href, img }, i) => (
            <li key={i}>
              <a href={href} target='_blank' rel='noreferrer' aria-label={`Przejdź do strony ${name}`}>
                <Img data={img} sizes='(max-width: 1023px) 35vw, (max-width: 1286px) 25vw, 313px' />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
