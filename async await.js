// const url = 'https://jsonplaceholder.typicode.com/todos'
//
// const delay = new Promise((resolve)=>{
// setTimeout(()=>{
//     resolve('3 sec')
// },3000)
// })
//
// delay.then(response =>{
//     console.log('hey '+ response)
// })

const findOdd = (arr) =>{
    // let counter
    // for(let i=0;i<arr.lenght;i++){
    //     arr.reduce((value, item)=>{
    //         if(value == item) counter++
    //     }, arr[i])
    //     if(counter%2){
    //         result = arr[i]
    //     }
    // }
    // for(let i=0;i<arr.length;i++) {
    //     let counter = 0
    //     for(let j=0;j<arr.lenght-i;j++){
    //         if(arr[i] === arr[j]){
    //             counter++
    //         }
    //     }
    //     if(counter%2 === 1) {
    //         result = arr[i]
    //         break
    //     }
    // }
    for(let i=0;i<arr.length;i++){
        let result = arr.filter(item=>item>arr[i])
        if(result.lenght%2==1){
            return result[0]
            break
        }
    }
}
const testArr = [1, 1, 1]

console.log(findOdd(testArr))