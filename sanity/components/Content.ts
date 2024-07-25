import { defineType } from 'sanity'
import HeroSection from '../schema/components/HeroSection'
import Benefits from '../schema/components/Benefits'
import Numbers from '../schema/components/Numbers'
import Reviews from '../schema/components/Reviews'
import TargetGroup from '../schema/components/TargetGroup'
import CourseDetails from '../schema/components/CourseDetails'
import SaleFinishTime from '../schema/components/SaleFinishTime'
import AboutCourseLeader from '../schema/components/AboutCourseLeader'
import HeadingParagraph from '../schema/components/HeadingParagraph'
import AdvantagesCta from '../schema/components/AdvantagesCta'

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Komponenty',
  of: [
    HeroSection,
    Benefits,
    Numbers,
    Reviews,
    TargetGroup,
    CourseDetails,
    SaleFinishTime,
    AboutCourseLeader,
    HeadingParagraph,
    AdvantagesCta,
  ],
})
