import Content from '../components/Content'
import Review_Collection from './collectionTypes/Review_Collection'
import { global } from './components/global'
import { course } from './components/course.js'
import seo from './components/seo'
import Index_Page from './singleTypes/Index_Page'
import cta from './ui/cta'
import detailsButton from './ui/detailsButton'

export const schemaTypes = [
  Index_Page,
  Content,
  seo,
  global,
  course,
  cta,
  Review_Collection,
  detailsButton,
]
