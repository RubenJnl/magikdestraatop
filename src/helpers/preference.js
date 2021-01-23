export const getPreference = (get) => {
  
  if (document.cookie.split(';').some((item) => item.trim().startsWith(get + '='))) {
      return true
  }
  
  return false;
}

export const setPreference = (set, value) => {

  let curDate = new Date();
  let setDate = curDate.setDate(curDate.getDate() + 30);
  if (value){
    document.cookie = set + "=" + value + "; expires=" + setDate;
  } else {
    document.cookie = set + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
  
  
}