import { Center, Text } from 'native-base'
import React, { useState, useEffect, useCallback } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { set, ref, database, onValue } from '../../service/firebaseConfig'
import { GiftedChat } from 'react-native-gifted-chat'
import {Perfil} from '../../model'

export default function index(props) {
	const {} = props
	const route = useRoute()
	const parametros = route.params
	const navigation = useNavigation()
	const [messages, setMessages] = useState([])
	const [Perfis, setPerfis] = useState({})


	const getPerfil = useCallback(() => {
		onValue(ref(database, 'calculadora/perfil'), val => {
			const obj: Perfil = val.val()
			setPerfis(obj)
			console.log(obj)
			console.log(parametros.usuario)

		})
	}, [Perfis, parametros])

	useEffect(() => {
		getPerfil()
		setMessages([
			{
				_id: 1,
				text: 'Hello developer',
				createdAt: new Date(),
				user: {
					_id: 2,
					name: 'React Native',
					avatar: 'https://i.ibb.co/7gxNZzd/0987f8c37d654a2267833ca048b3e8ea.jpg',
				},
			},
		])
	}, [])

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
	}, [])

	return (
		<GiftedChat
			messages={messages}
			onSend={(messages) => onSend(messages)}
			showUserAvatar={true}
			showAvatarForEveryMessage={true}
			user={{
				_id: 1,
				avatar: 'https://i.ibb.co/H7Wvchw/download.jpg',
				name: 'eu',
			}}
		/>
	)
}
