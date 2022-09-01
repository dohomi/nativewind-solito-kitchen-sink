import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { OverviewComponents } from '../../features/overview-components/OverviewComponents'

const Stack = createNativeStackNavigator<{
  home: undefined
  'components-overview': undefined
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='home'
        component={HomeScreen}
        options={{
          title: 'Home'
        }}
      />
      <Stack.Screen
        name='user-detail'
        component={UserDetailScreen}
        options={{
          title: 'User'
        }}
      />
      <Stack.Screen
        name='components-overview'
        component={OverviewComponents}
        options={{
          title: 'ComponentsOverview'
        }}
      />
    </Stack.Navigator>
  )
}
