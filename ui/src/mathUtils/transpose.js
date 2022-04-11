const transpose = (mat) => {

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < i; j++) {
      const hold = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = hold;
    }
  }
  return mat;
}

export default transpose;