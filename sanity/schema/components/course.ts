import { defineField, defineType } from 'sanity'

export const course = defineType({
  name: 'course',
  type: 'document',
  title: 'Detale Kursu',
  icon: () => '🎥',
  description: 'Wszystkie informacje dotyczące kursu',
  validation: (Rule) => Rule.required(),

  fields: [
    defineField({
      name: 'fullPrice',
      type: 'number',
      title: 'Cena kursu',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'discountPrice',
      type: 'number',
      title: 'Cena po obniżce',
      description:
        'Cena kursu po obniżce, jeżeli kurs nie jest na żadnej obniżce, nie należy tutaj nic wpisywać.',
    }),
    defineField({
      name: 'smallestPrice',
      type: 'number',
      title: 'Najniższa cena z ostatnich 30 dni',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'saleFinishDate',
      type: 'datetime',
      title: 'Data zakończenia sprzedaży kursu',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      icon: 'icon',
    },
  },
})
