import { RouteProp, useRoute } from '@react-navigation/native';

import { YStack } from 'tamagui';
import { Container, Main, Subtitle, Title } from '../../tamagui.config';

import { RootStackParamList } from '../navigation';

type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function Details() {
  const router = useRoute<DetailsSreenRouteProp>();

  return (
    <Container>
      <Main>
        <YStack>
          <Title>Details</Title>
          <Subtitle>Showing details for user {router.params.name}.</Subtitle>
        </YStack>
      </Main>
    </Container>
  );
}
