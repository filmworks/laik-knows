import { defineField } from 'sanity'

export default defineField({
  name: 'contactForm',
  type: 'object',
  title: 'Formularz kontaktowy',
  icon: () => '📞',
  options: { collapsible: true, collapsed: false },
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
      title: 'Paragraf (Opcjonalny)',
    }),
    defineField({
      name: 'cta',
      type: 'string',
      title: 'Wezwanie do działania - tekst',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
