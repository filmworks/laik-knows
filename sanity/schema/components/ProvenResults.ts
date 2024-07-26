import { defineField } from 'sanity'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja ze statystykami'
const icon = () => '📝'
const listIcon = () => '⭐'

export default defineField({
  name: 'ProvenResults',
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
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: listIcon,
          fields: [
            {
              name: 'value',
              type: 'number',
              title: 'Wartość',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'percent',
              type: 'boolean',
              title: 'Czy wartość ma być w procentach?',
              initialValue: false,
            },
            {
              name: 'description',
              type: 'markdown',
              title: 'Opis',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              heading: 'value',
              paragraph: 'description',
              icon: 'icon',
              isPercent: 'percent',
            },
            prepare: ({ icon, heading, paragraph, isPercent }) => ({
              icon,
              title: `${heading}${isPercent ? '%' : ''}`,
              subtitle: removeMarkdown(paragraph),
            }),
          },
        },
      ],
      validation: (Rule) => Rule.required().length(3).error('Lista musi zawierać 3 elementy.'),
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
