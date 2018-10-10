let action = process.argv[2]
let amount = Number(process.argv[3])


let balance = 1000

if(typeof isNaN(amount) ){
  console.log(`  oh no, u passed  ${process.argv[1]} instead of a number`)
} else if(action ==`  give  `){


  balance += Number(amount)
  console.log(`  thanks for your deposit  `)
  console.log(`  you now have, ${balance} dollars  `)

}else if(action == `  take  `){
  balance = Number(amount)
  console.log(`  you\'   ve just taken out ${amount}   `)
  console.log(`  you now have, ${balance} dollars  `)
}else {
  console.log(`  sorry,  ${action} is not a function   `)
  console.log(`  why don\' you try "give" or "take"  `)
}
