export class ContactModel {

    email: string;
    description: string;
   
    constructor(email: string, description: string) {
        this.email = email;
        this.description = description;
    }
}
