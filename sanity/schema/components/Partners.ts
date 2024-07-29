import { defineField } from 'sanity'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja z partnerami'
const icon = () => '🤝'

export default defineField({
  name: 'Partners',
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
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'Partners_Collection' }],
        },
      ],
      validation: (Rule) =>
        Rule.required().max(9).error('Lista może zawierać maksymalnie 9 elementów.'),
      title: 'Lista',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      icon: 'icon',
    },
    prepare: ({ heading, icon }) => ({
      title,
      subtitle: removeMarkdown(heading),
      icon,
    }),
  },
})
