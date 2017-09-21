function forLoop (array) {
    var i = array.length
    for (var i=array.length; i<array.length+25 ; i++){
        array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
    }
    return array
}


function doWhileLoop (array){
    while (maybeTrue() && array.length >0){
        array.pop()
    }

    return array
}




function whileLoop (n){
    while (n > 0){
        console.log(--n)
    }

    return 'done';
}




function maybeTrue() {
  return Math.random() >= 0.5
}
