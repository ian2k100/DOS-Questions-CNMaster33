WindowOrWorkerGlobalScope.setTimeout();

window.setTimeout(
    () => {
      console.log();  
    }, 5000, "Greetings Everyone"
);

for (let i = 0; i <= 50000; i++){
    console.log(i);
}

window.setTimeout(
    (something) => {
      console.log(something);  
    }, 4000, "hello there2"
)

window.setTimeout(
    (something) => {
      console.log(something);  
    }, 2000, "hello there3"
)