import { Center, Text } from 'native-base'
import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { set, ref, database, onValue, collection, firestore, query, onSnapshot, orderBy, addDoc } from '../../service/firebaseConfig'
import { GiftedChat } from 'react-native-gifted-chat'
import {Perfil} from '../../model'

export default function index(props) {
	const {} = props
	const route = useRoute()
	const parametros = route.params
	const navigation = useNavigation()
	const [messages, setMessages] = useState([])

	const usuarios = [
		{
			_id: 1,
			name: 'Gatão',
			avatar: 'https://i.ibb.co/H7Wvchw/download.jpg',
		},
		{
			_id: 2,
			name: 'Princesa',
			avatar: 'https://i.ibb.co/7gxNZzd/0987f8c37d654a2267833ca048b3e8ea.jpg',
		},
	]

	useLayoutEffect(() => {
		const q = query(collection(firestore, 'chats'), orderBy('createdAt', 'desc'))

		const unsubscribe = onSnapshot(q, snapshot => {
			setMessages(
				snapshot.docs.map(doc => ({
					_id: doc.data()._id,
					createdAt: doc.data().createdAt.toDate(),
					text: doc.data().text,
					user: doc.data().user
				}))
			)
		})
		return unsubscribe

	}, [])

	const addChat = async (_id, createdAt, text, user) => {
		try {
			const docRef = await addDoc(collection(firestore, 'chats'), { _id, createdAt, text, user })
		} catch (e) {
			console.error('Erro ao adicionar documento: ', e)
		}
	}

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
		const {
			_id,
			createdAt,
			text,
			user
		}=messages[0]

		addChat(_id, createdAt, text, user)

	}, [])

	return (
		<GiftedChat
			messages={messages}
			onSend={(messages) => onSend(messages)}
			showUserAvatar={true}
			showAvatarForEveryMessage={true}
			user={usuarios[parametros.usuario]}
		/>
	)
}
