function reverseLetter(str)
{
  return str.split("").reverse().join("").replace(/[^a-zA-Z]/g, '');
}
