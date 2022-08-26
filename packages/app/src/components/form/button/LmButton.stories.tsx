import { LmButton } from './LmButton'

export default {
  title: 'ui/form/Button',
  component: LmButton
}

const Template = (args) => <LmButton {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic',
}

export const Contained = Template.bind({})
Contained.args = {
  children: 'Contained',
  mode: 'contained'
}