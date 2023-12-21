// function age (age1,age2,age3,...otherages){
// console.log(...otherages)
// }
// age(20,30,40,50,60)

// let arr=[10,20,30]
// console.log(arr)
// let arr1=[arr,40,50]
// console.log(arr1)

// const leptop1={
//     "name": "HP",
//     "amount": 2000,
//     "waranty":"1 year"
// }
// // console.log(leptop1)
// const waranty={
//     "origin": "india",
//     "chargerwarany": "1year",
//     "batterybackup":"5hr"
// }
// // console.log(leptop2)
// const ab=[{
//     ...leptop1,...waranty
// }]
// console.log(ab)

// const basic={
//     firstname: "Abhishek"
// }
// const company={
//     companyname:"Karmaweblinks"                                                                      
// }
// const Qulification={
//     stdy: "MSC"
// }
// const Pi={
//     age:30
// }
// console.log(basic.firstname)
// console.log(company.companyname)
// console.log(Qulification.stdy)
// console.log(Pi.age)

// const profile={...basic,...company,...Qulification,...Pi}
// console.log(profile)

// let arr=[1,2,3]
// let arr1 =[...arr]
// arr1.push(4)
// console.log(arr)
// console.log(arr1)

// const arr=[10,20,30]
// const arr1=[10,20,30]
// console.log(arr)
// const add=[...arr,...arr1]
// console.log(add)

// arry to string
// const str=['my','name','is','abhi']
// console.log(...str)

// sting to array
// let arr='learning js'
// let a=[...arr]
// console.log(a)

// arguments
function names(){
    const arg=[...arguments]
    console.log(arg)
}
names('abhi','verma')
