import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Button, Text } from 'tamagui';

import Overview from '../screens/overview';
import Details from '../screens/details';
import MovieList from '~/screens/movieList';

export type RootStackParamList = {
  Overview: undefined;
  Details: { name: string };
  Movies: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Button
                unstyled
                flexDirection="row"
                backgroundColor="transparent"
                pressStyle={{ opacity: 0.5 }}
                paddingLeft={20}
                onPress={navigation.goBack}
                icon={<Feather name="chevron-left" size={16} color="#007AFF" />}>
                <Text color="#007AFF">Back</Text>
              </Button>
            ),
          })}
        />
        <Stack.Screen name="Movies" component={MovieList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
