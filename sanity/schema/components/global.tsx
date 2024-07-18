import {defineField, defineType} from 'sanity'

export const global = defineType({
  name: 'global',
  type: 'document',
  title: 'Globalne',
  icon: () => '🌍',
  fields: [
    defineField({
      name: 'privacyPolicy',
      type: 'url',
      title: 'Polityka Prywatności',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Globalne ustawienia',
    }),
  },
})
