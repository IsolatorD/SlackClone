import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../modules/shared/components/DrawerContent/DrawerContent';

import TabNavigator from './tab';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator () {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerType: 'slide',
        swipeMinDistance: 400,
        swipeEdgeWidth: 400
      }}
    >
      <Drawer.Screen name="Workspace" component={TabNavigator} />
    </Drawer.Navigator>
  );
}