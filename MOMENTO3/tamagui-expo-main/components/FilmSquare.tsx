import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Theme } from 'tamagui';

interface FilmSquareProps {
  title: string;
  director: string;
  time: string;
  onPress: () => void;
}

const FilmSquare = ({ title, director, time, onPress }: FilmSquareProps) => {
  const theme = Theme.current;

  return (
    <TouchableOpacity style={theme.flexRow.justifyContent('space-between')} onPress={onPress}>
      <View style={theme.flexColumn.justifyContent('space-between')}>
        <Text style={theme.headline}>{title}</Text>
        <Text style={theme.caption}>{director}</Text>
      </View>
      <Text style={theme.caption}>{time}</Text>
    </TouchableOpacity>
  );
};

export default FilmSquare;