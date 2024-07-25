import { defineField } from 'sanity'
import { removeMarkdown } from '../../utils/remove-markdown'

const title = 'Sekcja o autorze kursu'
const icon = () => '🤵'
const socialIcon = () => '📲'

export default defineField({
  name: 'AboutCourseLeader',
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
      name: 'socials',
      type: 'array',
      title: 'Social media',
      of: [
        defineField({
          name: 'instagram',
          type: 'object',
          title: 'Instagram',
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              title: 'Link',
              icon: socialIcon,
            }),
          ],
          preview: {
            select: {
              paragraph: 'url',
            },
            prepare: ({ paragraph }) => ({
              title: 'Instagram',
              subtitle: paragraph,
              icon: socialIcon,
            }),
          },
        }),
        defineField({
          name: 'facebook',
          type: 'object',
          title: 'Facebook',
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              title: 'Link',
            }),
          ],
          preview: {
            select: {
              paragraph: 'url',
            },
            prepare: ({ paragraph }) => ({
              title: 'Facebook',
              subtitle: paragraph,
              icon: socialIcon,
            }),
          },
        }),
        defineField({
          name: 'linkedin',
          type: 'object',
          title: 'Linkedin',
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              title: 'Link',
            }),
          ],
          preview: {
            select: {
              paragraph: 'url',
            },
            prepare: ({ paragraph }) => ({
              title: 'LinkedIn',
              subtitle: paragraph,
              icon: socialIcon,
            }),
          },
        }),
        defineField({
          name: 'youtube',
          type: 'object',
          title: 'Youtube',
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              title: 'Link',
            }),
          ],
          preview: {
            select: {
              paragraph: 'url',
            },
            prepare: ({ paragraph }) => ({
              title: 'YouTube',
              subtitle: paragraph,
              icon: socialIcon,
            }),
          },
        }),
        defineField({
          name: 'tiktok',
          type: 'object',
          title: 'TikTok',
          fields: [
            defineField({
              name: 'url',
              type: 'url',
              title: 'Link',
            }),
          ],
          preview: {
            select: {
              paragraph: 'url',
            },
            prepare: ({ paragraph }) => ({
              title: 'TikTok',
              subtitle: paragraph,
              icon: socialIcon,
            }),
          },
        }),
      ],
      validation: (Rule) => Rule.unique(),
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
