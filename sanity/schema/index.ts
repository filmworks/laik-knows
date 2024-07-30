import Content from '../components/Content'
import Participant_Collection from './collectionTypes/Participant_Collection'
import { global } from './singleTypes/global'
import { course } from './singleTypes/course.js'
import seo from './components/seo'
import Index_Page from './singleTypes/Index_Page'
import cta from './ui/cta'
import fullCtaBox from './ui/fullCtaBox'
import Partners_Collection from './collectionTypes/Partners_Collection'
import Faq_Collection from './collectionTypes/Faq_Collection'
import contactForm from './ui/contactForm'

export const schemaTypes = [
  Index_Page,
  Content,
  seo,
  global,
  course,
  cta,
  Participant_Collection,
  Partners_Collection,
  Faq_Collection,
  fullCtaBox,
  contactForm,
]
