import { defineField, defineType } from 'sanity'

const title = 'Uczestniczki'
const icon = () => '👸'

export default defineType({
  name: 'Participant_Collection',
  type: 'document',
  title,
  icon,
  fields: [
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
      name: 'review',
      type: 'object',
      title: 'Recenzja',
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
          name: 'content',
          type: 'markdown',
          title: 'Recenzja',
          hidden: ({ parent }) => !parent?.visible,
          validation: (Rule) =>
            Rule.custom((content, context) => {
              if ((context.parent as { visible: boolean })?.visible && !content) {
                return 'Recenzja jest wymagana jeśli jest widoczna.'
              }
              return true
            }),
        }),
      ],
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
      title: 'Plik Wideo (Opcjonalny)',
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
      instagramUsername: 'instagram.username',
      image: 'image',
    },
    prepare: ({ name, instagramUsername, image }) => {
      return {
        title: name,
        subtitle: instagramUsername,
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
