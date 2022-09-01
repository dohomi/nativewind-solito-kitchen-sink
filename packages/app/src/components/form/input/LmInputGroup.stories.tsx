import { LmInputGroup } from './LmInputGroup'

export default {
  title: 'ui/form/LmInputGroup',
  component: LmInputGroup
}

const Template = (args) => <LmInputGroup {...args}/>

export const Basic = Template.bind({})
Basic.args = {
  name: 'Basic',
}

export const Vertical = Template.bind({})
Vertical.args = {
  name: 'Vertical',
  vertical: true
}

export const Label = Template.bind({})
Label.args = {
  name: 'Label',
  label: 'Basic Input Group Label'
}

