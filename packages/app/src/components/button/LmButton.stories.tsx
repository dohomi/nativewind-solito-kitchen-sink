import { LmButton } from './LmButton'

export default {
  title: 'ui/Button/LmButton',
  component: LmButton
}

const Template = (args) => <LmButton {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Basic'
}

export const IconButton = Template.bind({})
IconButton.args = {
  label: 'Basic',
  iconLeft: 'camera',
  iconRight: 'eye'
}

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
  label: 'Basic',
  iconLeft: 'camera',
  iconRight: 'eye'
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Basic',
  iconLeft: 'camera',
  iconRight: 'eye',
  outlined: true
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Basic',
  iconLeft: 'camera',
  iconRight: 'eye',
  loading: true
}