import { defineField } from 'sanity'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja z nagłókiem i paragrafem'
const icon = () => '📌'

export default defineField({
  name: 'HeadingParagraph',
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
      name: 'enlarged',
      type: 'object',
      title: 'Sekcja powiększona',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: 'top',
          type: 'boolean',
          title: 'Powiększenie z góry',
          initialValue: false,
        }),
        defineField({
          name: 'bottom',
          type: 'boolean',
          title: 'Powiększenie z dołu',
          initialValue: false,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({ heading }) => ({
      title,
      subtitle: removeMarkdown(heading),
      icon,
    }),
  },
})
