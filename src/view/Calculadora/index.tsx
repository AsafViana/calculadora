import { Center, Text, Box, Button, VStack, HStack, Pressable, Stack } from 'native-base'
import React, { useState, useEffect, useCallback } from 'react'
import BotaoCalculadora from '../../component/BotaoCalculadora'
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { onValue, ref, database } from '../../service/firebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, View, TouchableOpacity } from 'react-native'


export default function index(props) {
	const {} = props
	const navigation = useNavigation()
	const [Resultado, setResultado] = useState('')
	const [Operação, setOperação] = useState('0')
	const [SenhaAsaf, setSenhaAsaf] = useState()
	const [SenhaLuisa, setSenhaLuisa] = useState()

	const buttons = [
		['7', '8', '9', '/'],
		['4', '5', '6', 'x'],
		['1', '2', '3', '-'],
		['C', '0', '=', '+'],
	]

	const handle_onPress = (botao) => {
		if (botao === 'C') {
			setOperação('0')
			setResultado('')
		} else if (botao === 'bs') {
			setOperação(Operação.slice(0, -1))
		} else if (botao === '=') {
			if (Operação === SenhaAsaf) {
				navigation.navigate('Chat', { usuario: 0 })
			} else if (Operação === SenhaLuisa) {
				navigation.navigate('Chat', { usuario: 1 })
			} else {
				setResultado(eval(Operação))
			}
		} else {
			if (Operação !== '0') {
				setOperação(Operação + botao)
			} else {
				setOperação(botao)
			}
		}
	}

	const get_dados = useCallback(() => {
		onValue(ref(database, 'calculadora/senhas/chat'), (val) => {
			const obj = val.val()
			setSenhaAsaf(obj.asaf)
			setSenhaLuisa(obj.luisa)
		})
	}, [SenhaAsaf, SenhaLuisa])

	useEffect(get_dados, [SenhaAsaf, SenhaLuisa])

	return (
		<Box flex={1} background={'muted.900'} justifyContent={'flex-end'} safeArea>
			<VStack space={'2'} pt={20} alignItems={'flex-end'} px={18} h={'40'}>
				<Text color={'muted.50'} fontSize={30}>
					{Operação}
				</Text>
				<Text color={'muted.50'} fontSize={50}>
					{Resultado}
				</Text>
			</VStack>

			<Box flex={1} justifyContent={'flex-end'} pb={10}>
				{buttons.map((row, rowIndex) => (
					<Stack flexDirection={'row'} key={rowIndex}>
						{row.map((value) => (
							<Pressable key={value} w={20} h={20} borderRadius={'full'} backgroundColor={'muted.800'} flex={1} alignItems={'center'} m={1} justifyContent={'center'} onPress={() => handle_onPress(value)}>
								<Text fontSize={'3xl'} color={'green.400'}>
									{value}
								</Text>
							</Pressable>
						))}
					</Stack>
				))}
			</Box>

			{/* <VStack flex={1} space={'6'} justifyContent={'center'} alignContent={'center'}>
				<HStack space={'2'} justifyContent={'center'} alignContent={'center'}>
					<BotaoCalculadora value="C" background="muted.800" color="error.600" onPress={() => handle_onPress('C')} />
					<BotaoCalculadora background="muted.800" color="muted.50" icon={<Ionicons name="backspace-outline" size={30} color="#fafaf9" />} onPress={() => handle_onPress('bs')} />
					<BotaoCalculadora value="()" background="muted.800" color="muted.50" />
					<BotaoCalculadora background="muted.800" color="muted.50" icon={<MaterialCommunityIcons name="division" size={40} color="#fafaf9" />} onPress={() => handle_onPress('/')} />
				</HStack>
				<HStack space={'2'} justifyContent={'center'} alignContent={'center'}>
					<BotaoCalculadora value="7" background="muted.800" color="green.500" onPress={() => handle_onPress('7')} />
					<BotaoCalculadora value="8" background="muted.800" color="green.500" onPress={() => handle_onPress('8')} />
					<BotaoCalculadora value="9" background="muted.800" color="green.500" onPress={() => handle_onPress('9')} />
					<BotaoCalculadora background="muted.800" color="muted.50" icon={<AntDesign name="close" size={30} color="#fafaf9" />} onPress={() => handle_onPress('*')} />
				</HStack>
				<HStack space={'2'} justifyContent={'center'} alignContent={'center'}>
					<BotaoCalculadora value="4" background="muted.800" color="green.500" onPress={() => handle_onPress('4')} />

					<BotaoCalculadora value="5" background="muted.800" color="green.500" onPress={() => handle_onPress('5')} />

					<BotaoCalculadora value="6" background="muted.800" color="green.500" onPress={() => handle_onPress('6')} />

					<BotaoCalculadora background="muted.800" color="muted.50" icon={<AntDesign name="minus" size={30} color="#fafaf9" />} onPress={() => handle_onPress('-')} />
				</HStack>
				<HStack space={'2'} justifyContent={'center'} alignContent={'center'}>
					<BotaoCalculadora value="1" background="muted.800" color="green.500" onPress={() => handle_onPress('1')} />

					<BotaoCalculadora value="2" background="muted.800" color="green.500" onPress={() => handle_onPress('2')} />

					<BotaoCalculadora value="3" background="muted.800" color="green.500" onPress={() => handle_onPress('3')} />

					<BotaoCalculadora background="muted.800" color="muted.50" icon={<Entypo name="plus" size={40} color="#fafaf9" />} onPress={() => handle_onPress('+')} />
				</HStack>
				<HStack space={'2'} justifyContent={'center'} alignContent={'center'}>
					<BotaoCalculadora value="+/-" background="muted.800" color="green.500" />

					<BotaoCalculadora value="0" background="muted.800" color="green.500" onPress={() => handle_onPress('0')} />

					<BotaoCalculadora value="," background="muted.800" color="green.500" onPress={() => handle_onPress(',')} />

					<BotaoCalculadora background="green.600" color="muted.50" icon={<FontAwesome5 name="equals" size={30} color="#fafaf9" />} onPress={() => handle_onPress('=')} />
				</HStack>
			</VStack> */}
		</Box>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		backgroundColor: '#f2f2f2',
	},
	display: {
		padding: 20,
		alignItems: 'flex-end',
	},
	input: {
		fontSize: 32,
	},
	output: {
		fontSize: 24,
		marginTop: 10,
		color: '#666',
	},
	buttons: {
		backgroundColor: '#fff',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	row: {
		flexDirection: 'row',
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	buttonText: {
		fontSize: 24,
		color: 'black',
	},
})
