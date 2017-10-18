let loop = (i, max) => {
  while (i < max) i++
    console.log(i);
  return i
}

// This operation will block Node.js
// Because, it's CPU-bound
// You should be careful about this kind of code
loop(0, 1e+12)
