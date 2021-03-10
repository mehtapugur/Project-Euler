function findPrime(n) {
  
	let temp; /* en büyük sayıyı tutar */
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
          n /= i;  /* n'i her seferinde asal çarpanlarına böler */
          temp = i;
    }
  }
  return temp;
}

console.log("" + findPrime(600851475143));
