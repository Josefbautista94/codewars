

export function openOrSenior(data:number[][]):string[]{
    return data.map(([age,handicap])=> age >= 55 && handicap > 7 ? `Senior` : `Open`);
  }