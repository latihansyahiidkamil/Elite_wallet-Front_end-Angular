export class Login {
    email: string;
    username: string
    password: string;
    
    constructor(email_input, username_input, password_input){
        this.email=email_input;
        this.username=username_input;
        this.password=password_input;
    }
}