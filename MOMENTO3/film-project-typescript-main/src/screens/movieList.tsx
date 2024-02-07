import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useQuery } from 'react-query';
import { Card, H2, Paragraph } from 'tamagui';
import { Container } from 'tamagui.config';
import { RootStackParamList } from '~/navigation';
import { getAllFilms } from '~/services/filmService';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

const MovieList = () => {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const { data: films } = useQuery(['film'], () => getAllFilms().then((res) => res.data));

  return (
    <Container>
      {films?.map((film) => {
        return (
          <Card key={film.id}>
            <Card.Header>
              <H2>Name: {film.name}</H2>
              <Paragraph>Director: {film.director}</Paragraph>
            </Card.Header>
          </Card>
        );
      })}
    </Container>
  );
};
export default MovieList;
