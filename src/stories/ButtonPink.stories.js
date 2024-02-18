import ButtonPink from '@/components/buttons/ButtonPink.vue'

export default {
  title: 'Design/Buttons/ButtonPink',
  component: ButtonPink,
  tags: ['autodocs'],
}

export const Basic = {
  render: () => ({
    components: { ButtonPink },
    template: '<ButtonPink>Quit game</ButtonPink>',
  }),
}
