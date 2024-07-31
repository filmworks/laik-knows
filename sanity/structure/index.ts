import type { StructureResolver } from 'sanity/structure'
import { createSingleton } from '../utils/create-singleton'

export const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
export const singletonTypes = new Set(['global'])

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Zawartość')
    .items([
      createSingleton(S, 'global'),
      S.divider(),

      createSingleton(S, 'Index_Page'),
      createSingleton(S, 'NotFound_Page'),
      S.divider(),
      createSingleton(S, 'course'),
      S.documentTypeListItem('Participant_Collection'),
      S.documentTypeListItem('Partners_Collection'),
      S.documentTypeListItem('Faq_Collection'),
    ])
