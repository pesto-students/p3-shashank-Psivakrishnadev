const text = document.getElementById('text');
const button = document.getElementById("button");
console.log("button===>", button)

const CustomPromiseState = {
    PENDING: "PENDING",
    RESOLVED: "RESOLVED",
    REJECTED: "REJECTED"
}

class CustomPromise { 
    constructor(fn) { 
        this.CustomPromiseState = CustomPromiseState.PENDING; 
        this.resolver = this.resolver.bind(this); 
        this.rejector = this.rejector.bind(this); 
        this.thenFn = null; 
        this.catchFn = null; 
        fn(this.resolver, this.rejector); 
    } 
    resolver(resolvedData) { 
        if (this.CustomPromiseState === CustomPromiseState.PENDING) { 
            this.thenFn && this.thenFn(resolvedData); 
        } this.CustomPromiseState = CustomPromiseState.RESOLVED; 
    } 
    rejector(rejectedData) { 
        if (this.CustomPromiseState === CustomPromiseState.PENDING) { 
            this.catchFn && this.catchFn(rejectedData); 
        } this.CustomPromiseState = CustomPromiseState.REJECTED; 
    }
    then(thenFn) {
        this.thenFn = thenFn;
        return this;
    }
    catch(catchFn){
        this.catchFn = catchFn;
        return this;
    }
}

const getNumber = () =>
    new CustomPromise((res, reject) =>{
        const randomNumber = parseInt(Math.random()*100, 10);
        setTimeout(()=>{
            if(randomNumber%5 === 0){
                reject(`Rejected with Number ${randomNumber}`)
            }
            res(`Resolved with Number ${randomNumber}`)
        },randomNumber*10)
    });

const clickHandler = ()=>{
    display("Loading...........")
    const numberPromise = getNumber();
    numberPromise.then(display).catch(display);
}

const display = (content)=>{
    text.innerText = content;
}

button.addEventListener("click", clickHandler)