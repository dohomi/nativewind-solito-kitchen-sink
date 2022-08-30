import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { OverviewComopnents } from '../../features/overview-components/OverviewComopnents'

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
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
      <Stack.Screen
        name="components-overview"
        component={OverviewComopnents}
        options={{
          title: 'ComponentsOverview',
        }}
      />
    </Stack.Navigator>
  )
}
