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

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  disabled: true
}

export const Block = Template.bind({})
Block.args = {
  label: 'Block',
  block: true
}

export const IconButton = Template.bind({})
IconButton.args = {
  label: 'IconButton',
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

export const Glass = Template.bind({})
Glass.args = {
  label: 'Glass',
  iconLeft: 'camera',
  glass: true
}

export const Wide = Template.bind({})
Wide.args = {
  label: 'Wide',
  iconLeft: 'camera',
  wide: true
}

export const CustomClassNames = Template.bind({})
CustomClassNames.args = {
  label: 'CustomClassNames',
  iconLeft: 'camera',
  loading: true,
  classNames: 'mt-8 ml-4'
}