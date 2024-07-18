import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schema'
import {markdownSchema} from 'sanity-plugin-markdown'
import {CustomMarkdown} from './components/CustomMarkdown'
import {singletonActions, singletonTypes} from './structure'
import {structure} from './structure'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'laik-knows',

  projectId: 'h8ffy8gu',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
    media(),
    markdownSchema({input: CustomMarkdown}),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
