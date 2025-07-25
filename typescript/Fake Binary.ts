export const fakeBin = (x:string):string => {
return x.split('').map((num)=> Number(num) < 5 ? 0 : 1).join('')
};