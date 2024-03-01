import HeaderButton from '@/components/buttons/HeaderButton.vue'
import BackIcon from '@/assets/icons/back-icon.svg'

export default {
  title: 'Design/Buttons/HeaderButton',
  component: HeaderButton,
  tags: ['autodocs'],
}

export const Basic = {
  render: () => ({
    components: { HeaderButton, BackIcon },
    template: `
      <HeaderButton>
        <BackIcon class="size-4" />
      </HeaderButton>
    `,
  }),
}
