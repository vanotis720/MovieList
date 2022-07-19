import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TopTabsNavigation from './src/Navigation/TopTabsNavigation';
import GlobalState from './src/Context/GlobalState';


export default function App() {
	return (
		<NavigationContainer>
			<GlobalState>
				<TopTabsNavigation />
			</GlobalState>
		</NavigationContainer>
	);
}

