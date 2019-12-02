import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen'
import RegisterScreen from '../screens/RegisterScreen'

const AuthStack = createStackNavigator({ SignIn: SignInScreen, Register: RegisterScreen });

export default AuthStack;