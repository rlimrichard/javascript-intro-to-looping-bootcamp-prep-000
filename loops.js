function doWhileLoop (array){
    while (maybeTrue() && array.length >0)
        array.pop()

    return array
}


function forLoop (array){
    for (let i=0; i<25 ; i++){
        array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
    }
    return array
}

function whileLoop (n){
    while (n > 0)
        console.log(--n)

    return 'done';
}




function maybeTru e() {
  return Math.random() >= 0.5
}
