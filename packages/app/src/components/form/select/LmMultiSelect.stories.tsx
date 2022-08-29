import { LmMultiSelect } from './LmMultiSelect'

export default {
  title: 'ui/form/MultiSelect',
  component: LmMultiSelect
}

const options = [{}, { value: 1, label: 'first' }, { value: 2, label: 'second' }]


const Template = (args) => <LmMultiSelect {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: 'single',
  options
}

export const Multiple = Template.bind({})
Multiple.args = {
  name: 'single',
  options,
  multiple: true
}