function formDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

// Tags to UpperCase
function captialize(str: string):string {
  if (typeof str !== 'string' || str.length === 0){
    return str
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export { formDate, captialize }