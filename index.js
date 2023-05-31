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


function pwskills(...values){
    return values
}
//console.log(pwskills("superman","flash"));
