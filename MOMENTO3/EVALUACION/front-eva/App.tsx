import React from 'react'
import { TamaguiProvider } from 'tamagui'
import { tamagui } from './tamagui.config'
import { AppLoading } from 'expo'

const App = () => {
  return (
    <TamaguiProvider theme={{ colors: { brand: '#6B46C1' } }} tamagui={tamagui}>
      <MainNavigation />
    </TamaguiProvider>
  )
}

export default App