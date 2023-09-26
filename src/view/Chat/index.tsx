import { Center, Text } from 'native-base'
import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { set, ref, database, onValue, collection, firestore, setDoc, doc } from '../../service/firebaseConfig'
import { GiftedChat } from 'react-native-gifted-chat'
import {Perfil} from '../../model'
import { onSnapshot } from 'firebase/firestore'

export default function index(props) {
	const {} = props
	const route = useRoute()
	const parametros = route.params
	const navigation = useNavigation()
	const [messages, setMessages] = useState([])

	useLayoutEffect(() => {

		onSnapshot(doc(firestore, 'chats'), doc => {
			console.log(doc.data())
		})

	}, [])

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
		const {
			_id,
			createdAt,
			test,
			user
		}=messages[0]
		setDoc(doc(firestore,'chats'), {
			_id,
			createdAt,
			test,
			user,
		})
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
