const sumPower = (values, pow) => {
  let sum = 0;
  
  for (let i = 0; i < values.length; i++) {
    sum += Math.pow(values[i], pow);
  }

  return sum;
}

export default sumPower;