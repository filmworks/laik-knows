import {defineField} from 'sanity'
import {removeMarkdown} from '../../utils/remove-markdown'

const title = 'Sekcja ze szczegółami kursu'
const icon = () => '📑'
const moduleIcon = () => '🎥'

export default defineField({
  name: 'CourseDetails',
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
          icon: moduleIcon,
          fields: [
            {
              name: 'heading',
              type: 'markdown',
              title: 'Nazwa modułu',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'paragraph',
              type: 'markdown',
              title: 'Paragraf',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'video',
              type: 'file',
              title: 'Plik Wideo',
              options: {
                accept: 'video/mp4',
              },
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              icon: 'icon',
              heading: 'heading',
              paragraph: 'paragraph',
            },
            prepare: ({icon, heading, paragraph}) => ({
              icon,
              title: removeMarkdown(heading),
              subtitle: removeMarkdown(paragraph),
            }),
          },
        },
      ],
      validation: (Rule) => Rule.required(),
      title: 'Lista',
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
    }),
    defineField({
      name: 'video',
      type: 'file',
      title: 'Plik Wideo',
      description: 'Wideo pokazuje się po kliknięciu na zdjęcie',
      options: {
        accept: 'video/mp4',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      validation: (Rule) => Rule.required(),
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
