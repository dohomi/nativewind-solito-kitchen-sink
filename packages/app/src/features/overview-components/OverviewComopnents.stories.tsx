import { OverviewComponents } from './OverviewComponents'

export default {
  title: 'screen/OverviewComponents',
  component: OverviewComponents
}

const Template = ({ args }) => <OverviewComponents {...args} />

export const Basic = Template.bind({})