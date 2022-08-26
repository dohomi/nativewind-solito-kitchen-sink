import { LmIconButton } from './IconButton'

export default {
  title: 'ui/form/IconButton',
  component: LmIconButton
}

const Template = (args) => <LmIconButton {...args} />

export const Basic = Template.bind({})
Basic.args = {
  icon: 'camera'
}

export const Contained = Template.bind({})
Contained.args = {
  icon: 'camera',
  mode: 'contained'
}