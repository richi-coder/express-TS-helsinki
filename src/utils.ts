import { NewDiaryEntry, Visibility, Weather } from './types';

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry;
}

export default toNewDiaryEntry;


const parseComment = (comment: any): string =>{
  if (!comment || !isString(comment)) {
    throw new Error('Incorrect or missing comment: ' + comment);
  }
  return comment;
}

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorret or missing date: ' + date)
  }
  return date;
}

const parseWeather = (weather: any): Weather => {
  if (!weather || !isWeather(weather)) {
    throw new Error('Incorrect or missing weather: ' + weather)
  }
  return weather
}

const parseVisibility = (visibility: any): Visibility => {
  if (!visibility || !isVisibility(visibility)) {
    console.log('objecttttttt', visibility);
    throw new Error('Incorrect or missing visibility: ' + visibility);
  }
  return visibility;
}

// Function to protect types
const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
}

const isDate = (date: any): boolean => {
  return Boolean(Date.parse(date));
}

const isWeather = (param: any): param is Weather => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): param is Visibility => {
  return Object.values(Visibility).includes(param)
}
