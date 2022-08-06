import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import useThemeColor from '../../hooks/useThemeColor'
import DrawerTitle from './DrawerTitle'

export default function DrawerContent (props: DrawerContentComponentProps) {
  const { drawerColor, isDarkMode } = useThemeColor()
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: drawerColor }}
    >
      <DrawerTitle
        title="Espacios de trabajo"
        isDarkMode={isDarkMode}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}