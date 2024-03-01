import ButtonWhite from '@/components/buttons/ButtonWhite.vue'

export default {
  title: 'Design/Buttons/ButtonWhite',
  component: ButtonWhite,
  tags: ['autodocs'],
  render: (args) => ({
    components: { ButtonWhite },
    setup() {
      return { args }
    },
    template: `<ButtonWhite v-bind="args" class="px-2">A</ButtonWhite>`,
    args: {
      disabled: false,
    },
  }),
}

export const Basic = {
  args: {
    disabled: false,
  },
}
