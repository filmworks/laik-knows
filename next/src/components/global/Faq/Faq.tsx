import getLegalLink from '@/components/ui/get-legal-link';
import Markdown from '@/components/ui/markdown';
import styles from './Faq.module.scss';
import type { FaqTypes } from './Faq.types';
import Accordion from './_Accordion';
import Form from './_Form';

export default async function Faq({ heading, paragraph, list, contactForm, index, email }: FaqTypes) {
  const { privacyPolicy } = await getLegalLink();
  const Heading = index === 0 ? Markdown.h1 : Markdown.h2;
  const Subheading = index === 0 ? Markdown.h2 : Markdown.h3;
  const _form = {
    ...contactForm,
    heading: <Subheading>{contactForm.heading}</Subheading>,
    paragraph: contactForm.paragraph ? <Markdown.p>{contactForm.paragraph}</Markdown.p> : null,
    privacyLink: privacyPolicy,
    email,
  };
  const _list = list.map(faq => ({
    ...faq,
    question: <Subheading>{faq.question}</Subheading>,
    answer: <Markdown.p>{faq.answer}</Markdown.p>,
  }));
  return (
    <section className={`${styles.section} max-width`}>
      <div>
        <header>
          <Heading>{heading}</Heading>
          <Markdown.p>{paragraph}</Markdown.p>
        </header>
        <Accordion list={_list} />
      </div>
      <Form {..._form} />
    </section>
  );
}
