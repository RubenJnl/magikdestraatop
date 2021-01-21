import Theme from '../style/config';

function getBackground() {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()

  if ( (hour >= 21 && hour <= 4) || (hour === 4 && minute < 30)) {
    return (
      Theme.images.night
    )
  } else {
    return (
      Theme.images.day
    )
  }

}

export default getBackground