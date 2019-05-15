export class Customer {
    customerNumber: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    nationalId: string;
    motherName: string;
    username: string;
    email: string;
    password: string;
    
    constructor(customerNumber_input, firstName_input, lastName_input, birthDate_input, nationalId_input,
    motherName_input, username_input, email_input, password_input){

        this.customerNumber = customerNumber_input;
        this.firstName = firstName_input;
        this.lastName = lastName_input;
        this.birthDate = birthDate_input;
        this.nationalId = nationalId_input;
        this.motherName = motherName_input;
        this.username = username_input;
        this.email = email_input;
        this.password = password_input;
    
    }
}