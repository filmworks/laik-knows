import { defineField } from 'sanity'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja z listą i wezwaniem do działania'
const icon = () => '📜'

export default defineField({
  name: 'FeatureList',
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
      name: 'imgLg',
      type: 'image',
      title: 'Zdjęcie duże',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imgSm',
      type: 'image',
      title: 'Zdjęcie małe',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Lista',
      of: [{ type: 'string' }],
      validation: (Rule) =>
        Rule.required().max(5).error('Lista może zawierać maksimum 5 elementów'),
    }),
    defineField({
      name: 'cta',
      type: 'fullCtaBox',
      title: 'Wezwanie do działania',
      validation: (Rule) => Rule.required(),
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
