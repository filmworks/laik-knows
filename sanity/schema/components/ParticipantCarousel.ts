import { defineField } from 'sanity'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja z karuzelą kursantek'
const icon = () => '🌟'

export default defineField({
  name: 'ParticipantCarousel',
  type: 'object',
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
      title: 'Lista',
      of: [
        {
          type: 'reference',
          to: [{ type: 'Participant_Collection' }],
        },
      ],
      validation: (Rule) =>
        Rule.required().max(6).error('List może zawierać maksymalnie 6 elementów').unique(),
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
