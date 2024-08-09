import { defineField } from 'sanity'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja HERO z nagłówkiem i obrazem'
const icon = () => '⭐️'

export default defineField({
  name: 'HeroHeaderAndImage',
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
      name: 'cta',
      type: 'fullCtaBox',
      title: 'Wezwanie do działania',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      type: 'string',
      title: 'ID Wideo (Opcjonalne)',
      description: 'Kiedy wideo jest wprowadzone, pokazuję się ono zamiast zdjęcia w tle.',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      media: 'img',
    },
    prepare: ({ heading, media }) => ({
      title: title,
      subtitle: removeMarkdown(heading),
      media,
      icon,
    }),
  },
})
