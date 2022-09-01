import { LmButtonGroup } from './LmButtonGroup'

export default {
  title: 'ui/Button/LmButtonGroup',
  component: LmButtonGroup
}

const Template = (args) => <LmButtonGroup {...args} />

export const Basic = Template.bind({})
Basic.args = {
  buttonLabels: ['B1', 'B2', 'B3']
}

export const Primary = Template.bind({})
Primary.args = {
  buttonLabels: ['B1', 'B2', 'B3'],
  color: 'primary'
}

export const Outlined = Template.bind({})
Outlined.args = {
  buttonLabels: ['B1', 'B2', 'B3'],
  color: 'primary',
  outlined: true
}

export const Size = Template.bind({})
Size.args = {
  buttonLabels: ['B1', 'B2', 'B3'],
  color: 'primary',
  outlined: true,
  size: 'lg'
}

export const Vertical = Template.bind({})
Vertical.args = {
  buttonLabels: ['B1', 'B2', 'B3'],
  color: 'secondary',
  outlined: true,
  vertical: true
}