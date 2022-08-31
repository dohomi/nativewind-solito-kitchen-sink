import { LmIconButton } from './LmIconButton'

export default {
  title: 'ui/Button/LmIconButton',
  component: LmIconButton
}

const Template = (args) => <LmIconButton {...args} />

export const Basic = Template.bind({})
Basic.args = {
  iconName: 'camera'
}

export const Colored = Template.bind({})
Colored.args = {
  iconName: 'camera',
  iconColor: 'text-warning',
  size: 'lg'
}