// 判断对象是否是 NaN
var function isNaN(num ) {
  if(typeof num !=='number'){
    return false;
  }
  if(!num >= 0 && !num < 0){
    return true; 
  }
  return false;
}
