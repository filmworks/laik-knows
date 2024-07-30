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
      createSingleton(S, 'Index_Page'),
      createSingleton(S, 'NotFound_Page'),
      createSingleton(S, 'course'),
      S.divider(),
      S.documentTypeListItem('Participant_Collection'),
      S.documentTypeListItem('Partners_Collection'),
      S.documentTypeListItem('Faq_Collection'),
    ])
