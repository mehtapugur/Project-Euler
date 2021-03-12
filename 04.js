function palindrome() {
  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
     	var n = i * j;
     // console.log(n);
      
      if (n > 99999) { //6 basamak
        var dizi = [];
        dizi[0] = n % 10;
        dizi[5] = n / 100000;
        if (dizi[0] === dizi[5]) {
          dizi[1] = (n % 100) / 10;
          dizi[4] = (n % 100000) / 10000;
          if (dizi[1] === dizi[4]) {
            dizi[2] = (n % 1000) / 100;
            dizi[3] = (n % 10000) / 1000;
            if (dizi[2] === dizi[3]) {
            //  console.log(n);
              return 0;
            }
          }
        }

      } else if (n <= 99999) { // 5 basamak
        var dizi = [];
        dizi[0] = n % 10;
        dizi[4] = n / 10000;
        if (dizi[0] === dizi[4]) {
         // console.log(n);
          dizi[1] = (n % 100) / 10;
          dizi[3] = (n % 10000) / 1000;
          if (dizi[1] === dizi[3]) {
            //console.log(n);
            return 0;
          }
        }
      }
    }
  }
}

console.log("" + palindrome());
