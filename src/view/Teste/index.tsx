import { Center, Text } from 'native-base'
import React, { useState, useEffect, useCallback } from 'react'
import { Platform } from 'react-native'

import { set, ref, database } from '../../service/firebaseConfig'
//import {color} from '../../../env.json'

export default function index(props) {
	const {} = props

	const teste = useCallback(
		(event) => {
			event.preventDefault()
			set(ref(database, 'calculadora/senhas'), {
				chat: {
					asaf: '2004+2007',
					luisa: '2007+2004'
				}
			}).then(() => console.log('foi'))
		},
		[]
	)
	return (
		<Center flex={1}>
			<Text onPress={teste}>index</Text>
		</Center>
	)
}
