document.getElementById("depositBtn").addEventListener("click",function(){

   let depositInput = document.getElementById("depositInput")
   let depositValue = parseInt(depositInput.value)
let prevDepositAmount = document.getElementById("prevDepositAmount")
let prevDepositAmountText = prevDepositAmount.innerText
let prevDepositAmountInt = parseInt(prevDepositAmountText)

 prevDepositAmount.innerText = depositValue + prevDepositAmountInt
depositInput.value=" "

let prevBalanceAmount = document.getElementById("prevBalanceAmount")
let prevBalanceAmountInt = parseInt(prevBalanceAmount.innerText)

prevBalanceAmount.innerText = prevBalanceAmountInt + depositValue

})



document.getElementById("withdrawBtn").addEventListener("click",function(){
let withdrawInput = document.getElementById("withdrawInput")
let withdrawValue = parseInt(withdrawInput.value)
let prevWithdrawAmount = document.getElementById("prevWithdrawAmount")
let prevWithdrawAmountText = prevWithdrawAmount.innerText
let prevWithdrawAmountInt = parseInt(prevWithdrawAmountText)

prevWithdrawAmount.innerText = prevWithdrawAmountInt + withdrawValue

withdrawInput.value = " "

let prevBalanceAmount = document.getElementById("prevBalanceAmount")
let prevBalanceAmountInt = parseInt(prevBalanceAmount.innerText)

prevBalanceAmount.innerText = prevBalanceAmountInt - withdrawValue

})























