import { defineField, defineType } from 'sanity'

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
    defineField({
      name: 'email',
      type: 'string',
      title: 'Adres e-mail',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [
        defineField({
          name: 'og_Img',
          type: 'image',
          title: 'OG Image',
          description:
            'Zdjęcie, które jest widoczne przy udostępnianiu strony w mediach społecznościowych. Wymiary zdjęcia powinny mieć 1200x630px',
        }),
      ],
    }),
    defineField({
      name: 'OrganizationSchema',
      type: 'object',
      title: 'Uporządkowane dane organizacji',
      description: (
        <a
          href="https://developers.google.com/search/docs/appearance/structured-data/organization?hl=pl"
          target="_blank"
          rel="noreferrer"
        >
          Więcej informacji o Schema
        </a>
      ),
      fields: [
        defineField({
          name: 'name',
          type: 'string',
          title: 'Nazwa Twojej organizacji',
        }),
        defineField({
          name: 'description',
          type: 'text',
          rows: 3,
          title: 'Opis Twojej organizacji',
        }),
      ],
      options: { collapsible: true, collapsed: true },
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Globalne ustawienia',
    }),
  },
})
