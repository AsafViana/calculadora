import { GluestackUIProvider, Text, Box, config } from '@gluestack-ui/themed'
import React from 'react'
import Calculadora from '../src/view/Calculadora'

export default function App() {
	return (
		<GluestackUIProvider config={config.theme}>
			<Calculadora/>
		</GluestackUIProvider>
	)
}
