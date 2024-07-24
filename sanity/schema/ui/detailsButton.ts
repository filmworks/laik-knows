import { defineType } from 'sanity'

export default defineType({
  name: 'detailsButton',
  type: 'string',
  title: 'Tekst przycisku nawigacyjnego',
  description: 'Kliknięcie tego przycisku przenosi użytkownika di sekcji ze spisem modułów',
  icon: () => '✈',
  initialValue: 'Zobacz plan kursu',
  validation: (Rule) => Rule.required(),
})
