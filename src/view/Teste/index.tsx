import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native'

export default function App() {
	const [input, setInput] = useState('')
	const [output, setOutput] = useState('')

	const WhatsApp = (text, phone) => {
		Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`)
	}

	const handleButtonPress = (value) => {
		if (value === '=') {
			try {
				setOutput(eval(input).toString())
			} catch (error) {
				setOutput('Erro')
			}
		} else if (value === 'C') {
			setInput('')
			setOutput('')
		} else {
			setInput(input + value)
		}
	}

	const buttons = [
		['7', '8', '9', '/'],
		['4', '5', '6', 'x'],
		['1', '2', '3', '-'],
		['C', '0', '=', '+'],
	]

	return (
		<View style={styles.container}>
			<View style={styles.display}>
				<Text style={styles.input}>{input}</Text>
				<Text style={styles.output}>{output}</Text>
			</View>
			<View style={styles.buttons}>
				{buttons.map((row, rowIndex) => (
					<View key={rowIndex} style={styles.row}>
						{row.map((value) => (
							<TouchableOpacity key={value} style={styles.button} onPress={() => WhatsApp('teste', '51981215342')}>
								<Text style={styles.buttonText}>{value}</Text>
							</TouchableOpacity>
						))}
					</View>
				))}
			</View>
		</View>
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
