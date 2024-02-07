import axios from 'axios';
import { environment } from '~/environment/config';
import { FilmGetResponse } from '~/models/filmModel';

export function getAllFilms() {
  return axios.get<FilmGetResponse[]>(`${environment.HOST_BACK}/films`);
}
