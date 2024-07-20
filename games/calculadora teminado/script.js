class Calculadora {
    constructor(operand1Element, operand2Element) {
        this.operand1Element = operand1Element;
        this.operand2Element = operand2Element;
        this.clear();
    }
        
    clear() {
        this.operand1 = '0'; 
        this.operand2 = '0'; 
        this.operator = '';
        this.update();
    }

    update() {
        this.operand1Element.textContent = this.operand1;
        this.operand2Element.textContent = this.operand2;
    }

    appendNumber(number){
        if(number === "." && this.operand2.includes('.')) return;
        this.operand2 = this.operand2 === '0' 
                        ? number
                        : this.operand2.toString() + number;
        this.update();
    }

    delete(){
        if(this.operand2 === '0') return;
        this.operand2 = this.operand2.toString().slice(0, -1) || '0';
        this.update();
    }

    operation(operator){
        if(this.operator){
            this.calc();
        }
        this.operator = operator;
        this.operand1 = this.operand2 !== '0' ? this.operand2 : this.operand1;
        this.operand2 = '0';
        this.update();
    }

    calc(){
        switch(this.operator){
            case "+":
                this.operand1 = parseFloat(this.operand1) + parseFloat(this.operand2);
            break;
            case "-":
                this.operand1 = parseFloat(this.operand1) - parseFloat(this.operand2);
            break;
            case "*":
                this.operand1 = parseFloat(this.operand1) * parseFloat(this.operand2);
            break;
            case "/": 
                this.operand1 = parseFloat(this.operand1) / parseFloat(this.operand2);
            break;
        }
        this.operator = "";
        this.operand2 = '0';
        this.update();
    }
}

// Seleccionar elementos del DOM
const operand1Element = document.querySelector("[data-operand-1]");
const operand2Element = document.querySelector("[data-operand-2]");
const clearButton = document.querySelector("[data-clear]");
const numberButtons = document.querySelectorAll("[data-number]");
const deleteButton = document.querySelector("[data-delete]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");


const calculadora = new Calculadora(operand1Element, operand2Element);


clearButton.addEventListener("click", () => {
    calculadora.clear();
});

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.appendNumber(button.textContent);
    });
});

deleteButton.addEventListener("click", () => {
    calculadora.delete();
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculadora.operation(button.textContent);
    });
});

equalsButton.addEventListener("click", () => {
    calculadora.calc();
});
