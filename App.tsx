import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import Routes from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { LogBox } from 'react-native'

export default function App() {
	LogBox.ignoreAllLogs()
	return (
				<NavigationContainer>
					<NativeBaseProvider>
						<Routes />
						<StatusBar barStyle='light-content' backgroundColor={'#171717'}/>
					</NativeBaseProvider>
				</NavigationContainer>
	)
}
