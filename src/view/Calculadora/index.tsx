import { Center, Text, Box, Button, VStack, HStack } from 'native-base'
import React, { useState, useEffect } from 'react'
import BotaoCalculadora from '../../component/BotaoCalculadora'
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

export default function index(props) {
	const {} = props
	const [Resultado, setResultado] = useState('')
	const [Operação, setOperação] = useState('0')

	const handle_onPress = (botao) => {
		if (botao === 'C') {
			setOperação('0')
			setResultado('')
		} else if (botao === 'bs') {
			setOperação(Operação.slice(0, -1))
		} else if (botao === '=') {
			setResultado(eval(Operação))
		} else {

			if (Operação !== '0') {
				setOperação(Operação + botao)
			}else if (Operação === '2004+2007'){
				console.log('teste')
			}
			else {
				setOperação(botao)
			}
		}
	}

	return (
		<Box flex={1} background={'muted.900'} safeArea>
			<VStack space={'2'} justifyContent={'flex-end'} alignItems={'flex-end'} px={18} h={'40'}>
				<Text color={'muted.50'} fontSize={30}>
					{Operação}
				</Text>
				<Text color={'muted.50'} fontSize={50}>
					{Resultado}
				</Text>
			</VStack>

			<VStack flex={1} space={'6'} justifyContent={'center'} alignContent={'center'}>
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
			</VStack>
		</Box>
	)
}
