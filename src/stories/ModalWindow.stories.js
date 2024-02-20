import ModalWindow from '@/components/modals/ModalWindow.vue'
import ButtonBlue from '@/components/buttons/ButtonBlue.vue'
import ButtonPink from '@/components/buttons/ButtonPink.vue'
import YouWinText from '@/assets/images/you-win.svg'
import YouLoseText from '@/assets/images/you-lose.svg'

export default {
  title: 'Design/Modals/ModalWindow',
  component: ModalWindow,
  tags: ['autodocs'],
}

export const YouWInModal = {
  render: () => ({
    components: { ModalWindow, YouWinText, ButtonBlue, ButtonPink },
    template: `
      <div class="py-6">
        <ModalWindow class="min-h-48" open>
          <template #title>
            <YouWinText class="w-2/3 mx-auto" />
          </template>
          <template #body>
            <div class="grid place-items-center gap-4">
              <ButtonBlue>Continue</ButtonBlue>
              <ButtonBlue>New category</ButtonBlue>
              <ButtonPink>Quit game</ButtonPink>
            </div>
          </template>
        </ModalWindow>
      </div>
    `,
  }),
}

export const YouLoseModal = {
  render: () => ({
    components: { ModalWindow, YouLoseText, ButtonBlue, ButtonPink },
    template: `
      <div class="py-6">
        <ModalWindow class="min-h-48" open>
          <template #title>
            <YouLoseText class="w-2/3 mx-auto" />
          </template>
          <template #body>
            <div class="grid place-items-center gap-4">
              <ButtonBlue>Continue</ButtonBlue>
              <ButtonBlue>New category</ButtonBlue>
              <ButtonPink>Quit game</ButtonPink>
            </div>
          </template>
        </ModalWindow>
      </div>
    `,
  }),
}
