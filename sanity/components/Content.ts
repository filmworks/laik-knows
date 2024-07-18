import {defineType} from 'sanity'
import HeroSection from '../schema/components/HeroSection'

export default defineType({
  name: 'content',
  type: 'array',
  title: 'Komponenty',
  of: [HeroSection],
})
