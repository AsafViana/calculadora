import { Text, Box, Input } from '@gluestack-ui/themed';
import React from 'react'
import { useState,useCallback, useEffect } from 'react'

export default function index() {
	const [Valor, setValor] = useState(0)

  return (
	<Box flex={1} justifyContent="center" alignItems="center">
		  <Input values={Valor} on/>
		</Box>
  )
}
