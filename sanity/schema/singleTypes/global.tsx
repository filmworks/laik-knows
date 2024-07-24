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
      name: 'socials',
      type: 'object',
      title: 'Social media',
      options: { collapsible: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'instagram',
          type: 'url',
          title: 'Instagram',
          validation: (Rule) =>
            Rule.uri({ scheme: ['https'] }).error(
              'Podaj prawidłowy adres URL (rozpoczynający się od https://)',
            ),
        }),
        defineField({
          name: 'youtube',
          type: 'url',
          title: 'YouTube',
          validation: (Rule) =>
            Rule.uri({ scheme: ['https'] }).error(
              'Podaj prawidłowy adres URL (rozpoczynający się od https://)',
            ),
        }),
        defineField({
          name: 'linkedin',
          type: 'url',
          title: 'LinkedIn',
          validation: (Rule) =>
            Rule.uri({ scheme: ['https'] }).error(
              'Podaj prawidłowy adres URL (rozpoczynający się od https://)',
            ),
        }),
      ],
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
