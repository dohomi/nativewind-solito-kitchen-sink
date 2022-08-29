import { LmSelect } from './LmSelect'
import { selectDemoOptions } from './demoOptions'

export default {
  title: 'ui/form/Select',
  component: LmSelect
}

const options = selectDemoOptions


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