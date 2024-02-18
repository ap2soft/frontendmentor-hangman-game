import ButtonBlue from '@/components/buttons/ButtonBlue.vue'

export default {
  title: 'Design/Buttons/ButtonBlue',
  component: ButtonBlue,
  tags: ['autodocs'],
}

export const Basic = {
  render: () => ({
    components: { ButtonBlue },
    template: '<ButtonBlue>How to play</ButtonBlue>',
  }),
}
