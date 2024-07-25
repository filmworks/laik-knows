import { defineField } from 'sanity'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja ze statystykami'
const icon = () => '📝'
const listIcon = () => '%'

export default defineField({
  name: 'Numbers',
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
              name: 'percent',
              type: 'number',
              title: 'Procent',
              description: 'Tutaj wyznaczamy procent jaki chcemy ukazać na stronie (bez znaczka %)',
              validation: (Rule) => Rule.required(),
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
              heading: 'percent',
              paragraph: 'description',
              icon: 'icon',
            },
            prepare: ({ icon, heading, paragraph }) => ({
              icon,
              title: `${heading}%`,
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
