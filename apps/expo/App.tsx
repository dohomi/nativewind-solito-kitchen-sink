import { NativeNavigation } from 'app/src/navigation/native'
import { LmProvider } from 'app/src/provider'

export default function App() {
  return (
    <LmProvider>
      <NativeNavigation />
    </LmProvider>
  )
}
