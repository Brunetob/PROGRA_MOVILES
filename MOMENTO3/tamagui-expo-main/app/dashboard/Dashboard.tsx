import React from 'react';
import { Text, View } from 'react-native';
import { useTamagui } from 'tamagui';
import FilmSquare from '../../components/FilmSquare';

const Dashboard = () => {
  const [tamagui] = useTamagui();

  const films = [
    { title: 'Film 1', director: 'Director 1', time: '1h 30m', onPress: () => console.log('Film 1 pressed') },
    { title: 'Film 2', director: 'Director 2', time: '2h 15m', onPress: () => console.log('Film 2 pressed') },
    { title: 'Film 3', director: 'Director 3', time: '1h 45m', onPress: () => console.log('Film 3 pressed') },
  ];

  return (
    <View style={tamagui.flex.column.padding(20)}>
      <Text style={tamagui.text.headline}>DASHBOARD</Text>
      <View style={tamagui.flex.row.justifyContent('space-between').marginTop(20)}>
        <Text style={tamagui.text.caption}>FILMS</Text>
        <Text style={tamagui.text.caption}>DIRECTOR</Text>
        <Text style={tamagui.text.caption}>TIME</Text>
      </View>
      {films.map((film, index) => (
        <FilmSquare key={index} {...film} />
      ))}
    </View>
  );
};

export default Dashboard;