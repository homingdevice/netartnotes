
let age = process.argv[2]
let drinkingAge = 21
let senior = 55

if( age >= 100) {
  console.log("OMG! all drinks on us mans")
}
else if (age >= senior){
  console.log("welcome, one free drink on us")
} else if (age >= drinkingAge ) {
console.log("welcome to the bar")
}
else {
  console.log("get outta here kid!")
}
;
