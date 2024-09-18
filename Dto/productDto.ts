class product {
    private _productCode: number;
    private _productName: string;
    private _productDescription: string;
    private _productCategory: string;
    private _productPrice: number;
    private _productQuantity: number;

    constructor(
        productCode: number,
        productName: string,
        productDescription: string,
        productCategory: string,
        productPrice: number,
        productQuantity: number) {
        this._productCode = productCode;
        this._productName = productName;
        this._productDescription = productDescription;
        this._productCategory = productCategory;
        this._productPrice = productPrice;
        this._productQuantity = productQuantity;
    }

    // Getters
    get productCode(): number {
        return this._productCode;
    }

    get productName(): string {
        return this._productName;
    }

    get productDescription(): string {                             
        return this._productDescription;
    }

    get productCategory(): string {                             
        return this._productCategory;
    }

    get productPrice(): number {
        return this._productPrice;
    }

    get productQuantity(): number {
        return this._productQuantity;
    }

    // Setters
    set productCode(productCode: number) {
        this._productCode = productCode;
    }

    set productName(productName: string) {
        this._productName = productName;
    }

    set productDescription(productDescription: string) {
        this._productDescription = productDescription;
    }

    set productCategory(productCategory: string) {
        this._productCategory = productCategory;
    }

    set productPrice(productPrice: number) {
        this._productPrice = productPrice;
    }

    set productQuantity(productQuantity: number) {
        this._productQuantity = productQuantity;
    }
}

export default product;