import Hero from '@/components/global/Hero';

const HeroObj = {
  heading: 'Naucz się nagrywać doskonałe wideo marki makijażowej',
  paragraph:
    'Odkryj tajniki tworzenia wysokiej jakości wideo, które przyciągają klientów i zwiększają sprzedaż. Zdobądź niezbędne umiejętności, aby wyróżnić się w branży beauty.',
  fullPrice: 150,
  discountPrice: 50,
  smallestPriceMonth: 79,
  index: 0,
  cta: { href: 'https://www.google.pl/', text: 'Kup teraz' },
  ctaText: 'Zostaniesz przekierowany na stronę EasyCart',
};

export default function Home() {
  return (
    <>
      <Hero {...HeroObj} />
    </>
  );
}
