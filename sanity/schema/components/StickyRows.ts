import { defineField } from 'sanity'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja z nachodzącymi wierszami'
const icon = () => '🚩'

export default defineField({
  name: 'StickyRows',
  type: 'document',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rows',
      type: 'array',
      title: 'Wiersze',
      of: [
        defineField({
          name: 'row',
          type: 'object',
          title: 'Wiersz',
          fields: [
            defineField({
              name: 'img',
              type: 'image',
              title: 'Zdjęcie',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'heading',
              type: 'markdown',
              title: 'Nagłówek',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'paragraph',
              type: 'markdown',
              title: 'Paragraf',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              heading: 'heading',
              paragraph: 'paragraph',
              media: 'img',
            },
            prepare: ({ heading, media, paragraph }) => ({
              title: removeMarkdown(heading),
              subtitle: removeMarkdown(paragraph),
              media,
            }),
          },
        }),
      ],
      validation: (Rule) => Rule.required().length(3).error('Lista musi zawierać 3 elementy.'),
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({ heading }) => ({
      title: title,
      subtitle: removeMarkdown(heading),
      icon,
    }),
  },
})
