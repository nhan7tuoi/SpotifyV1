import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import ProfileSc from "../screens/ProfileSc";
import DetailProfileSc from "../screens/DetailProfileSc";


const ProfileNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="ProfileSc" screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen
                name="ProfileSc"
                component={ProfileSc}
                
            />
            <Stack.Screen name="DetailProfileSc" component={DetailProfileSc} />
        </Stack.Navigator>
    );
}
export default ProfileNavigation;