import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CompleteProfile from '../screens/CompleteProfile';
import BasicSectionList from '../screens/BasicSectionList';


const StackNavigator = createStackNavigator(
    {
      CompleteProfile: {
        screen: CompleteProfile
      },
      BasicSectionList: {
        screen: BasicSectionList
      }
    },
    {
      initialRouteName: 'CompleteProfile',
      headerMode: 'none',
      mode: 'modal'
    }
  )
  export default createAppContainer(StackNavigator)