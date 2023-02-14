import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TopTabsNavigation from './src/Navigation/TopTabsNavigation';
import GlobalState from './src/Context/GlobalState';
import AppBottom from './src/Navigation/AppBottom';


export default function App() {
	return (
		<NavigationContainer>
			<GlobalState>
				<AppBottom />
			</GlobalState>
		</NavigationContainer>
	);
}

