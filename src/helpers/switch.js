import Theme from '../style/config';

function Switch() {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()

  if ( (hour >= 21 && hour <= 4) || (hour === 4 && minute < 30)) {
    return (
      Theme.color.title.night
    )
  } else {
    return (
      Theme.color.title.day
    )
  }

}

export default Switch