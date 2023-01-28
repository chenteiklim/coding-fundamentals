class Calculator{
    constructor(value){
        this.sum = value;
    }
    add(value){
        let prevSum=this.sum
        this.sum += value;
        console.log(`${prevSum} + ${value} = ${this.sum}`)
        return this;
    }

    subtract(value){
        let prevSum=this.sum
        this.sum -= value;
        console.log(`${prevSum} - ${value} = ${this.sum}`)
        return this
    }

    multiply(value) {
        let prevSum=this.sum
        this.sum *= value
        console.log(`${prevSum} * ${value} = ${this.sum}`)
        return this
    }
    divide(value) {
        let prevSum=this.sum
        this.sum /= value
        console.log(`${prevSum} / ${value} = ${this.sum}`)
        return this
    }
}
const calculator = new Calculator(0);
calculator.add(100).subtract(50).multiply(2).divide(4)
