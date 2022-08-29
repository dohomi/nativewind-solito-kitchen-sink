import { LmSelect } from './LmSelect'

export default {
  title: 'ui/form/Select',
  component: LmSelect
}

const options = [{}, { value: 1, label: 'first' }, { value: 2, label: 'second' }]


const Template = (args) => <LmSelect {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: 'single',
  options
}

export const SinglePreselect = Template.bind({})
SinglePreselect.args = {
  name: 'single_pre',
  value: [options[0]],
  options
}