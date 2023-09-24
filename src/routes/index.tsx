import { createStackNavigator } from '@react-navigation/stack'
import Calculadora from '../view/Calculadora'
import Chat from '../view/Chat'
import Teste from '../view/Teste'
import { lazy } from 'react'

const { Screen, Navigator } = createStackNavigator()

export default function MyStack() {
	const TransitionScreen = {
		gestureDirection: 'horizontal',
		cardStyleInterpolator: ({ current, next, layouts }) => {
			return {
				cardStyle: {
					transform: [
						{
							translateX: current.progress.interpolate({
								inputRange: [0, 1],
								outputRange: [layouts.screen.width, 0],
							}),
						},
					],
				},
				overlayStyle: {
					opacity: current.progress.interpolate({
						inputRange: [0, 1],
						outputRange: [0, 0.5],
					}),
				},
			}
		},
	}

	const CardOptions = {
		...TransitionScreen,
		headerShown: false,
		gestureEnabled: false,
	}

	return (
		<Navigator screenOptions={CardOptions}>
			<Screen name="Calculadora" component={Calculadora} />
			<Screen name="Chat" component={Chat} />
			<Screen name="Teste" component={Teste} />
		</Navigator>
	)
}
