//დავალება N1.

function Boolean(a, b) {
    if (a == b) {
      return "true";
    } else {
      return "false";
    }
  }
  console.log(Boolean(1, 1)); // true
  console.log(Boolean(1, 2)); // false


  //დავალება N2.

  function ftc(tempf) {
    if(typeof tempf !== "number") {
        return false;
       } else {
            return(tempf - 32) *(5/9);
        }
    }
  console.log(ftc(100)); // 37.777
  console.log(ftc('4')); // false

  
  //დავალება N3.
  function calculator(a,operation,b) {
    if (typeof a !== "number" && b !== "number"){
    return false;
    }
    if (operation === "+") return a+b;
    else if (operation === "-") return a-b;
    else if (operation === "*") return a*b;
    else if (operation === "/") return a/b;
}

console.log(calculator(1,"+",2)); // 3
console.log(calculator(10,"-",6)); // 4
console.log(calculator(5,"*",5)); // 25
console.log(calculator(100,"/",50)); // 2
console.log(calculator('1',"+",'2')); // false