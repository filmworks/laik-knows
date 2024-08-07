import { defineField, defineType } from 'sanity'

const title = 'Partnerzy'
const icon = () => '🤝'

export default defineType({
  name: 'Partners_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    defineField({
      name: 'img',
      type: 'image',
      title: 'Logo',
      options: {
        accept: 'image/*',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'url',
      title: 'Link',
      validation: (Rule) =>
        Rule.required()
          .uri({ scheme: ['https'] })
          .error('Podaj prawidłowy adres URL (rozpoczynający się od https://)'),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'href',
      media: 'img',
    },
  },
})
