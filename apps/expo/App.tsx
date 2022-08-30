import "expo-dev-client";
import * as SplashScreen from 'expo-splash-screen'
import { NativeNavigation } from 'app/src/navigation/native'
import { LmProvider } from 'app/src/provider'
import { useEffect, useState } from 'react'
import { connectToDevTools } from "react-devtools-core";

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false)

  // Load any resources or data that you need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()
          .then(() => {
            console.log('')
          })

      } catch (e) {
        // You might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setAppIsReady(true)
        await SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync().finally(() => {
      console.log('initial loaded, hide splash')
    })
  }, [])

  if (!appIsReady) {
    return null
  }


  return (
    <LmProvider>
      <NativeNavigation />
    </LmProvider>
  )
}
