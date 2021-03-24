
function Switch() {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const dayOfMonth = now.getDate()
  const month = now.getMonth()
  const year = now.getFullYear()
  
  if ((month === 2 && dayOfMonth === 31) || (month >= 3 && year >= 2021)){
    if ( (hour >= 22 || hour < 4) || (hour === 4 && minute < 30)) {
      return ( 
        'night' 
      )
    } else {
      return (
        'day'
      )
    }
  } else {
    if ( (hour >= 21 || hour < 4) || (hour === 4 && minute < 30)) {
      return ( 
        'night' 
      )
    } else {
      return (
        'day'
      )
    }
  }

}

export default Switch
