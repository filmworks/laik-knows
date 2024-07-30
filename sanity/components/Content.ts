import { defineType } from 'sanity'
import HeroSection from '../schema/components/HeroSection'
import Benefits from '../schema/components/Benefits'
import Reviews from '../schema/components/Reviews'
import CourseDetails from '../schema/components/CourseDetails'
import SaleFinishTime from '../schema/components/SaleFinishTime'
import AboutCourseLeader from '../schema/components/AboutCourseLeader'
import HeadingParagraph from '../schema/components/HeadingParagraph'
import AdvantagesCta from '../schema/components/AdvantagesCta'
import ProvenResults from '../schema/components/ProvenResults'
import ThreeColGrid from '../schema/components/ThreeColGrid'
import StickyRows from '../schema/components/StickyRows'
import FeatureList from '../schema/components/FeatureList'
import Partners from '../schema/components/Partners'
import ParticipantCarousel from '../schema/components/ParticipantCarousel'
import Faq from '../schema/components/Faq'

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Komponenty',
  of: [
    HeroSection,
    Benefits,
    ProvenResults,
    Reviews,
    ThreeColGrid,
    CourseDetails,
    SaleFinishTime,
    AboutCourseLeader,
    HeadingParagraph,
    AdvantagesCta,
    StickyRows,
    FeatureList,
    Partners,
    ParticipantCarousel,
    Faq,
  ],
})
