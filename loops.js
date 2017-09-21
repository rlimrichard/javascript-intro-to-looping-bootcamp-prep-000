function forLoop (array) {
    var t = array.length
    for (var i=t; i<t+25 ; i++){
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
