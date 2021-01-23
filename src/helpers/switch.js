
function Switch() {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const day = now.getDate()
  const month = now.getMonth()

  if (day < 23 && month === 0 ){
    return (
      'day'
    )
  } else if (day === 23 && month === 0) {
    if (hour <= 20 ){
      return (
        'day'
      )
    } else {
      return (
        'night'
      )
    }
  } 
  else if ( (hour >= 20 || hour < 4) || (hour === 4 && minute < 30)) {
    return ( 
      'night' 
    )
  } else {
    return (
      'day'
    )
  }

}

export default Switch