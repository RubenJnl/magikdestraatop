
function SwitchAnswer() {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()
  
  
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

export default SwitchAnswer
