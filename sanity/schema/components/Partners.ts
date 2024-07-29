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
          type: 'object',
          fields: [
            {
              name: 'img',
              type: 'image',
              title: 'Zdjęcie',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'name',
              type: 'markdown',
              title: 'Nazwa partnera',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              type: 'string',
              title: 'Link',
              description: 'Link absolutny (wymagany protokół https://)',
              validation: (Rule) =>
                Rule.custom((value: string) => {
                  if (value && !value.startsWith('https://')) {
                    return 'Nieprawidłowy adres URL.'
                  }
                  return true
                }).required(),
            },
          ],
          preview: {
            select: {
              heading: 'name',
              paragraph: 'href',
              media: 'img',
            },
            prepare: ({ heading, paragraph, media }) => ({
              title: removeMarkdown(heading),
              subtitle: removeMarkdown(paragraph),
              media,
            }),
          },
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
