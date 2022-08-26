import { LmSelect } from './LmSelect'

export default {
  title: 'ui/form/Select',
  component: LmSelect
}

const options = [{ value: 1, label: 'first' }, { value: 2, label: 'second' }]


const Template = (args) => <LmSelect {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: 'single',
  options
}

export const Multiple = Template.bind({})
Multiple.args = {
  name: 'multi',
  multiple: true,
  value: [options[0]],
  options
}