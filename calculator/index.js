export class Calculator{
    static isNumber(arg){
        return !isNaN(parseFloat(arg)) && isFinite(arg);
    }

    static sum (arg1, arg2){
        if(this.isNumber(arg1) && this.isNumber(arg2)){
            return arg1 + arg2;
        }
        return Number.NaN;
    }

    static div (arg1, arg2){
        if(this.isNumber(arg1) && this.isNumber(arg2)) {
            console.log(arg1/arg2);
            return arg1 / arg2;
        }
        return Number.NaN;
    }

    static mul (arg1, arg2){
        if(this.isNumber(arg1) && this.isNumber(arg2)) {
            return arg1 * arg2;
        }
        return Number.NaN;
    }

}