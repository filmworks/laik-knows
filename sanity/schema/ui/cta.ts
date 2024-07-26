import { defineField } from 'sanity'

export default defineField({
  name: 'cta',
  type: 'object',
  title: 'Przycisk (CTA)',
  icon: () => '📢',
  fields: [
    defineField({
      name: 'role',
      type: 'string',
      title: 'Gatunek',
      options: {
        list: [
          { value: 'primary', title: 'Główne' },
          { value: 'secondary', title: 'Dodatkowe' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      type: 'string',
      title: 'Tekst',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'string',
      title: 'Link',
      description: 'Link relatywny lub absolutny (wymagany protokół https://)',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (
            value &&
            !value.startsWith('#') &&
            !value.startsWith('/') &&
            !value.startsWith('https://')
          ) {
            return 'Nieprawidłowy adres URL.'
          }
          return true
        }).required(),
    }),
  ],
  preview: {
    select: {
      heading: 'value',
      paragraph: 'href',
      role: 'role',
      icon: 'icon',
    },
    prepare: ({ heading, paragraph, icon, role }) => {
      const roleTitle = role === 'primary' ? 'Główne' : 'Dodatkowe'
      return {
        title: `(${roleTitle}) ${heading}`,
        subtitle: paragraph,
        icon,
      }
    },
  },
})
