let year = parseInt(prompt("xin nhap nam"));
 if (year % 4 === 0) {
     if (year % 100 === 0){
         if (year % 400 === 0) {
             alert(year + "is a lead year");
        } else{
            alert(year + "is not a lead year")
         }
     }else {
         alert(year + "is a leap year")
     }
 }else {
     alert(year + "is not a leap year")
 }