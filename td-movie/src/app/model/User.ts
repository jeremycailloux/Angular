export class User {
    
    private _firstname : string;
    public get firstname() : string {
        return this._firstname;
    }
    public set firstname(v : string) {
        this._firstname = v;
    }
    
    private _lastname : string;
    public get lastname() : string {
        return this._lastname;
    }
    public set lastname(v : string) {
        this._lastname = v;
    }

    
    private _mail : string;
    public get mail() : string {
        return this._mail;
    }
    public set mail(v : string) {
        this._mail = v;
    }

    
    private _password : string;
    public get password() : string {
        return this._password;
    }
    public set password(v : string) {
        this._password = v;
    }
    
    

    /**
     *
     */
    constructor(firstname: string, lastname: string, mail: string, password: string) {
        this._firstname = firstname
        this._lastname = lastname   
        this._mail = mail
        this._password = password
                    
    }    
}