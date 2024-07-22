import {defineField} from 'sanity'
import {removeMarkdown} from '../../utils/remove-markdown'

const title = 'Sekcja z opisem grupy dolecowej'
const icon = () => '🙋‍♀️'

export default defineField({
  name: 'TargetGroup',
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
          fields: [
            {name: 'img', type: 'image', title: 'Zdjęcie', validation: (Rule) => Rule.required()},
            {
              name: 'heading',
              type: 'markdown',
              title: 'Nagłówek',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'paragraph',
              type: 'markdown',
              title: 'Paragraf',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              media: 'img',
              heading: 'heading',
              paragraph: 'paragraph',
            },
            prepare: ({media, heading, paragraph}) => ({
              title: removeMarkdown(heading),
              subtitle: removeMarkdown(paragraph),
              media,
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
    },
    prepare: ({heading}) => ({
      title: title,
      subtitle: removeMarkdown(heading),
      icon,
    }),
  },
})
