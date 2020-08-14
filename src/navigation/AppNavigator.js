import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import RootNavigator from './RootNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: RootNavigator
  })
)
