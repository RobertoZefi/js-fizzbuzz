for(let i = 1; i <=100; i++){
    console.log(i)

    let fizz = i % 3
    let buzz = i % 5

    if (fizz === 0 && buzz === 0) {
        console.log('FizzBuzz')
    } else if (buzz === 0) {
        console.log('Buzz')
    } else if (fizz === 0){
        console.log('Fizz')
    }

    
}