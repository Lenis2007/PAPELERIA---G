class category {
    private _categoryCode: number;
    private _categoryName: string;
    private _categoryDescription: string;

    constructor(
        categoryCode: number,
        categoryName: string,
        categoryDescription: string) {
        this._categoryCode = categoryCode;
        this._categoryName = categoryName;
        this._categoryDescription = categoryDescription;
    }

    // Getters
    get categoryCode(): number {
        return this._categoryCode;
    }

    get categoryName(): string {
        return this._categoryName;
    }

    get categoryDescription(): string {
        return this._categoryDescription;
    }

    // Setters
    set categoryCode(categoryCode: number) {
        this._categoryCode = categoryCode;
    }

    set categoryName(categoryName: string) {
        this._categoryName = categoryName;
    }

    set categoryDescription(categoryDescription: string) {
        this._categoryDescription = categoryDescription;
    }
}

export default category;