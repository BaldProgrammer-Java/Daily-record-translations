import React from 'react'
import { Text, HStack, Switch, useColorMode } from 'native-base'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Text>黑暗</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
      ></Switch>
      <Text>明亮</Text>
    </HStack>
  )
}
