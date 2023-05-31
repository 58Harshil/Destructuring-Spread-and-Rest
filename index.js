const onearray = [1,2,3,4]
const twoarray = [5,6,7,8]

//const threearray = onearray.concat(twoarray)
const threearray = [...onearray, ...twoarray]
//console.log(threearray);

function manyarguments(){
    let args = Array.from(arguments)
    let finalarr = args.map(e=>e*2)
    //console.log(typeof finalarr);
}

function manyarguments2(...args){
   // console.log(typeof args);
  let finalarr = args.map(e=>e)
 // console.log( finalarr);
}

manyarguments(1,2,3)
manyarguments(1,2,3,4,5,6,7)



const names = ["superman","flash"]
const newnames = ["Batman",...names,"thor"]
const sitenmae = ["pwskills"]
//console.log([...sitenmae]);
//console.log(newnames);

let empltySet = new Set()
//console.log(empltySet.size);

let myArray = [1,2,3,4,3,2]
let newSet = new Set([...myArray])
//console.log(newSet);

newSet.add(9)
//console.log(newSet);
//console.log(newSet.has(9));
newSet.clear()



// set difference
function setDiffrence(SetA, SetB){
    return new Set([...SetA].filter(El => !SetB.has(el)))
}


let map = new Map()
//console.log(map.size); 

let arr = [
    [1, "harshil"],
    [2, "Karan"],
    [3, "Riski"],
    [4, "shivam"],
    [5, "Loda"],
];

arr.map((arrayItem)=> map.Set(arrayItem[0], arrayItem[1]))
function pwskills(...values){
    return values
}
//console.log(pwskills("superman","flash"));
