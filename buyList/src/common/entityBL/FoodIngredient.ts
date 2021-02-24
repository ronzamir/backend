class FoodIngredient{
    private _name: string;
    private _cal: number;
    private _amountKg: number;
    private _numItems: number;

    constructor(name: string, cal: number = 0, amountKg: number = 0, numitem: number = 0 ) {
     this._name = name;
     this._cal = cal;
     this._amountKg = amountKg;
     this._numItems = numitem;
    }

    EditAmountKg(amount: number): void {
        this._amountKg = amount;
    }

    editNumItem(numItems: number): void {
        this._numItems = numItems;
    }

    get name(): string {
        return this._name;
    }

    get cal(): number{
        return this._cal;
    }

    get amountKg(): number {
        return this._amountKg;
    }

    get numItems(): number {
        return this._numItems;
    }
} 