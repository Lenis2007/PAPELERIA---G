class user {
    private _name: string;
    private _lastName: string;
    private _identityNumber: number;
    private _email: string;
    private _password: string;
    private _age: number;
    private _phoneNumber: number;
    private _address: string;
    private _role: string;

    constructor(
        name: string,
        lastName: string,
        identityNumber: number,
        email: string,
        password: string,
        age: number,
        phoneNumber: number,
        address: string,
        role: string) {
        this._name = name;
        this._lastName = lastName;
        this._identityNumber = identityNumber;
        this._email = email;
        this._password = password;
        this._age = age;
        this._phoneNumber = phoneNumber;
        this._address = address;
        this._role = role;
    }

    // Getters
    get name(): string {
        return this._name;
    }

    get lastName(): string {
        return this._lastName;
    }

    get identityNumber(): number {
        return this._identityNumber;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    get age(): number {
        return this._age;
    }

    get phoneNumber(): number {
        return this._phoneNumber;
    }

    get address(): string {
        return this._address;
    }

    get role(): string {
        return this._role;
    }

    // Setters
    set name(name: string) {
        this._name = name;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    set identityNumeber(identityNumber: number) {
        this._identityNumber = identityNumber;
    }

    set email(email: string) {
        this._email = email;
    }

    set password(password: string) {
        this._password = password;
    }

    set age(age: number) {
        this._age = age;
    }

    set phoneNumber(phoneNumber: number) {
        this._phoneNumber = phoneNumber;
    }

    set address(address: string) {
        this._address = address;
    }

    set role(role: string) {
        this._role = role;
    }
}

export default user;