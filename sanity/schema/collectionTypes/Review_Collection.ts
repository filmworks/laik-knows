import {defineField, defineType} from 'sanity'
import {removeMarkdown} from '../../utils/remove-markdown'

const title = 'Zbiór opinii'
const icon = () => '👍'

export default defineType({
  name: 'Review_Collection',
  type: 'document',
  title,
  icon,
  fields: [
    defineField({
      name: 'visible',
      type: 'boolean',
      title: 'Czy recencja widoczna?',
      description: 'Zaznacz, jeśli recenzja ma być widoczna na stronie.',
      validation: (Rule) => Rule.required(),
      initialValue: false,
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Imię i nazwisko',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instagram',
      type: 'object',
      title: 'Instagram',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'url',
          type: 'string',
          title: 'Link do konta',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'username',
          type: 'string',
          title: 'Nazwa użytkownika',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'content',
      type: 'markdown',
      title: 'Treść',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      type: 'file',
      title: 'Plik Wideo',
      description:
        'Wideo pokazuje się po kliknięciu na zdjęcie kursantki. Wideo nie jest wymagane.',
      options: {
        accept: 'video/mp4',
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      name: 'name',
      content: 'content',
      image: 'image',
    },
    prepare: ({name, image, content}) => {
      return {
        title: name,
        subtitle: removeMarkdown(content),
        media: image,
      }
    },
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
})
