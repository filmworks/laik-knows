import { defineField } from 'sanity'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja opinii'
const icon = () => '👍'

export default defineField({
  name: 'Reviews',
  type: 'object',
  title,
  icon,
  fields: [
    defineField({
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
      initialValue: 'Zobacz opinie kursantek',
    }),
    defineField({
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'Review_Collection' }],
        },
      ],
      title: 'Lista opinii',
      validation: (Rule) => Rule.required().unique(),
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
