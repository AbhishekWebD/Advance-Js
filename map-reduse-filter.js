// *Map*:-

//  const arr=[2,4,6,8,10]
//  const multiple=arr.map((item)=>{
//     console.log(item)
//  })
//  console.log(multiple)



// *filter*:-
// let arr=[1,2,3,4]
// let evenvaluse=arr.filter(item=>item%2==0)
// console.log(evenvaluse)
// console.log(arr,'orignal')

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let evenvaluse=arr.filter(item=>item>6)
// console.log(evenvaluse)



// let students=[{
//     name:'abhishk',
//     grade:90
// },
// {
//     name:'rohit',
//     grade:80
// },
// {
//     name:'shruti',
//     grade:85
// },
// {
//     name:'shivani',
//     grade:60
// }
// ]
// let persents= students.filter(student=>student.grade<=80)
// console.log(persents)


// *reduse-:-
let arr=[2,4,6]
let sum=  arr.reduce((a,b)=>{
    console.log(a,b)
    return a+b
})
console.log(sum)
console.log(arr)