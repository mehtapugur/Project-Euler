let sum = 0;

for(let i = 0; i < 1000; i++){

	if(i%3 === 0 || i%5 === 0) /* 3'e veya 5'e bölünebilen sayılar */
  	sum += i;
}

console.log(sum);
