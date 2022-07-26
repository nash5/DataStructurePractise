function takeShower() {
    console.log('Finish in shower');
}

function prepareFood(){
    let items = ['apple', 'upma', 'idle', 'pizza']
    return items[Math.floor(Math.random()*items.length)]
}

function eatBreakfast(){
    let meal = prepareFood();
    return `Done with ${meal}`;
}

function wakeup() {
    takeShower();
    eatBreakfast();
    console.log('Go to work');
}

wakeup()