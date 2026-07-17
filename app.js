
// creating a class compoany which has private fields name, email, ticketID, issue
class Company
{
    #name;
    #email;
    #issue;
    #ticketID;
    constructor(name, email, issue, ticketID)
    {
        this.#name = name;
        this.#email = email;
        this.#issue = issue;
        this.#ticketID = ticketID;
    }

    // checking for the ticketID Type whether its a number or not
    checkTicketID()
    {
        if(isNaN(this.#ticketID))
        {
            return "Error";
        }
        else 
        {
            return "Ticket ID: " + this.#ticketID;
        }
    }

    // creating a URL That sends complaint to the company system
    createURL()
    {
        return encodeURIComponent("https:/www.company.com/support?name=" + this.#name + " issue=" + this.#issue);
    }

    // using getter to get both the methods
    get complaint()
    {
        return this.checkTicketID() + "\n" 
                + this.createURL();
    }

    // support for complaint system by company
    support()
    {
        if(isNaN(this.#ticketID))
        {
            return "Ticket not Created";
        }

        else 
        {
        return "Ticket Created Successfully" + "\n" + 
                "Generated URL " + this.createURL() + "\n" +
                "Support Team View " + "\n" + 
                "Customer: " + this.#name + "\n" + 
                "Issue: " + this.#issue + "\n" +
                "Ticket ID: " + this.#ticketID;
        }
    }
}

let customer1 = new Company("Rahul Sharma", "r.sharma.rs215@gmail.com", "Login not Working", 101);
let customer2 = new Company("Umesh Singh", "umeshsingh33@hotmail.com", "Payment Failed", "ABC124");
console.log(customer1.complaint);
console.log(customer2.complaint);
console.log(customer1.support());
console.log(customer2.support());
