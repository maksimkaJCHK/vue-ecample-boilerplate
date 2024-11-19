const arrMonth = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
]

export const bNumb = (numb) => numb < 10 ? '0' + numb : numb;

export const bDate = (date) => {
  const cDate = new Date(date);

  const gYear = cDate.getFullYear();
  const gMonth = arrMonth[cDate.getMonth()];
  const gDate = cDate.getDate();

  const gHours = bNumb(cDate.getHours());
  const gMin = bNumb(cDate.getMinutes());
  const gSec = bNumb(cDate.getSeconds());

  return `${gDate} ${gMonth} ${gYear} ${gHours}:${gMin}:${gSec}`;
}