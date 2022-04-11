import sumPower from "./sumPower";
import copy from "./copy";

const makeXmatrix = (mat, deg) => {

  let coeffMatrix = [];

  let xdata = mat.map( pair => pair[0]);
  for (let row = 0; row <= deg; row++) {
    let tempRow = [];
    for (let col = 0; col <= deg; col++) {
      tempRow.push(sumPower(xdata,row+col));
    }
    tempRow.push(0.0);
    coeffMatrix.push(tempRow);
  }

  return coeffMatrix;
};

const scaleRow = (mat, rowNum) => {

  let rowVal = mat[rowNum][rowNum];

  if (rowVal === 0) return mat;

  console.log(rowVal);

  for (let i = 0; i < mat.length; i++) {
    mat[rowNum][i] /= rowVal;
  }

  return mat;

}

const GJE = (mat, deg) => {

  let coeffMatrix = makeXmatrix(mat, deg);

  let solutionMatrix = copy(coeffMatrix);

  for (let i = 0; i < coeffMatrix.length; i++) {
    scaleRow(solutionMatrix,i);
    for (let j = i; j < coeffMatrix[0].length; j++) {
    }
  }

  console.log('After scaling');
  console.log(solutionMatrix);

}

export default GJE;