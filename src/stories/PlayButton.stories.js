import PlayButton from '@/components/buttons/PlayButton.vue'

export default {
  title: 'Design/Buttons/PlayButton',
  component: PlayButton,
  tags: ['autodocs'],
}

export const Basic = {
  render: () => ({
    components: { PlayButton },
    template: '<PlayButton />',
  }),
}
