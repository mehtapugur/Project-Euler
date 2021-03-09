function sumOfEvens(n){

	let a = 0, b = 1, temp = 0, sum = 0;
  
  /* son değer olduğu için sadece b'nin n'den küçük olup olmadığını kontrol etmek yeterli */
  while(b < n ){
  	temp = a;
    a = b;
    b += temp; /* burada b ve a birbirine eşit olduğu için "b = temp + a" da yazılabilirdi*/
    if(b%2 === 0){ /* b son toplam olduğu için sadece onu kontrol ettik */
    	sum += b;
    }
  }  
  
  return sum;
}

console.log("" + sumOfEvens(4e6)); /* 4e6 : 4 x 10^6*/
