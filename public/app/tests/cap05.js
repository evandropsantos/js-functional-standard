const promise1 = new Promise( (resolve, reject) => 
    setTimeout( () => resolve('promise 1 resolved'), 3000 )
);

const promise2 = new Promise( (resolve, reject) => 
    setTimeout( () => resolve('promise 2 resolved'), 1000)
);

Promise.race( [promise1, promise2] )
.then(console.log)
.catch(console.log);

// Recursao
const showCountDownS = counter => {
    while(counter >= 0) {
        console.log('Sem recursao ', counter--);
    }
};

showCountDownS(3);

const showCountDown = counter => {
    if (counter < 0) return;

    console.log('Com recursao ', counter);

    showCountDown(--counter);
};

showCountDown(3);