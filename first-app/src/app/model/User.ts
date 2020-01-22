export class User {
    public name: string;
    public firstName: string;
    public lastLogin: Date;
    public email: string;
    public password: string;

    constructor(name: string, firstName: string, email: string, password: string, ) {
        this.name = name;
        this.firstName = firstName;
        this.lastLogin = new Date();
        this.email = email;
        this.password = password;
    }
}