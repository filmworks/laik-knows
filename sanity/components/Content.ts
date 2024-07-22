import {defineType} from 'sanity'
import HeroSection from '../schema/components/HeroSection'
import Benefits from '../schema/components/Benefits'
import Numbers from '../schema/components/Numbers'
import Reviews from '../schema/components/Reviews'

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Komponenty',
  of: [HeroSection, Benefits, Numbers, Reviews],
})
