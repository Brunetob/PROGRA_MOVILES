import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { YStack } from 'tamagui';
import { Container, Main, Title, Subtitle, Button, ButtonText } from '../../tamagui.config';

import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <Container>
      <Main>
        <YStack>
          <Title>Movie Creator</Title>
        </YStack>
        <Button onPress={() => navigation.navigate('Movies')}>
          <ButtonText>create</ButtonText>
        </Button>
      </Main>
    </Container>
  );
}
