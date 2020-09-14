/* 
Higher Order Function
    - is a function, which takes another function as an argument and/or return a function as value.
    -e.g for Higher Order Function: map,find,filter,addEventListner

        const numbers = [10,20,30]

        const result = numbers.map(function(ele){
            return ele + 5
        })
        console.log(result)

    -(Higher order function can do both or either one[either accept a function or return a function])
----------------------------------------------
    1) function add(){
    return (m,n) => {
        return m + n
        }
    }
    console.log(add()(5,10))
----------------------------------
    2) function mul(m){
    return (n) => {
        return m * n
    }
}
//currying: For every function each value is called currying
console.log(mul(5)(10))
---------------------------------------------------------------
    

Callback Function
    - the function which is being passed as an argument to another function,is called a callback function


---------------------------------
const numbers = [10,20,30]

const add = function(ele) {
    return ele + 5
}

const result= numbers.map(add)

console.log(result)


*/


