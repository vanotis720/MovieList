import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TopTabsNavigation from './src/Navigation/TopTabsNavigation';

export default function App() {
	return (
		<NavigationContainer>
			<TopTabsNavigation />
		</NavigationContainer>
	);
}

