import { Center, Button } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
//import {color} from '../../../env.json'

export default function index(props) {
	const { color, background, value, icon, onPress } = props
	return (
		<Button _text={{ fontSize: '3xl', color: color }} onPress={onPress} backgroundColor={background} borderRadius={'full'} w={20} h={20}>
			{icon === undefined ? value : icon}
		</Button>
	)
}
