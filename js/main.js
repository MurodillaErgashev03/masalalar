function year(num) {
  if ((num % 4 == 0 && num % 100 != 0) || num % 400 == 0) {
    return "Bu kabisa yili";
  }
  return "Bu kabisa yili emas";
}
//console.log(year(1600));

//**************************************************** */

function num(arr) {
  return arr.filter((num) => num < 0);
}
//console.log(num([1, 5, -6, -84, 9, -6]));

//********************************************** */
function num(son) {
  let arr = son.split("");
  if (arr.reverse().join("") == son) {
    return true;
  }
  return false;
}
//console.log(num("2112"));
