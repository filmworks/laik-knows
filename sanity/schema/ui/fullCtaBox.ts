import { defineField, defineType } from 'sanity'
import cta from './cta'

export default defineType({
  name: 'fullCtaBox',
  type: 'object',
  title: 'Wezwanie do działania',
  icon: () => '🗣️',
  validation: (Rule) => Rule.required(),
  fields: [
    defineField({
      name: 'list',
      type: 'array',
      title: 'Przyciski',
      of: [cta],
      validation: (Rule) => Rule.min(1).max(2).required(),
    }),

    defineField({
      name: 'additionalInfo',
      type: 'markdown',
      title: 'Dodatkowe informacje (Opcjonalne)',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'href',
    },
  },
})
