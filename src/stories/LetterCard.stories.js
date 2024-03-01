import LetterCard from '@/components/letter-card/LetterCard.vue'

export default {
  title: 'Design/LetterCard',
  component: LetterCard,
  tags: ['autodocs'],
}

export const Opened = {
  render: () => ({
    components: { LetterCard },
    template: `
      <LetterCard :letter="{ value: 'a', opened: true }" />`,
  }),
}

export const Hidden = {
  render: () => ({
    components: { LetterCard },
    template: `
      <LetterCard :letter="{ value: 'a', opened: false }" />`,
  }),
}

export const Space = {
  render: () => ({
    components: { LetterCard },
    template: `
      <LetterCard :letter="{ value: ' ' }" />`,
  }),
}
