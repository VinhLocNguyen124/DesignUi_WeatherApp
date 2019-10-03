import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';

const Home = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
},
{

}
)

const AppContainer=createAppContainer(Home);

export default AppContainer;
