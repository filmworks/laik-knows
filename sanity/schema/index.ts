import Content from '../components/Content'
import Participant_Collection from './collectionTypes/Participant_Collection'
import { global } from './singleTypes/global'
import { course } from './singleTypes/course.js'
import seo from './components/seo'
import Index_Page from './singleTypes/Index_Page'
import cta from './ui/cta'
import fullCtaBox from './ui/fullCtaBox'

export const schemaTypes = [
  Index_Page,
  Content,
  seo,
  global,
  course,
  cta,
  Participant_Collection,
  fullCtaBox,
]
