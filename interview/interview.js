function useState(initialState) {
    let state = initialState;

    function getState() {
        return state;
    }

    function setState(updatedState) {
        state = updatedState;
    }

    return [getState, setState];
}

const [count, setCount] = useState(0);

count();
setCount(1);
count();
setCount(500);
count();

var counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function() {
            return privateCounter;
        },
    };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1



foo(); // 1
function foo() {
  console.log(1);
}