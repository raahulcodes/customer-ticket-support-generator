
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
}

let customer1 = new Company("Rahul Sharma", "r.sharma.rs215@gmail.com", "Login not Working", 101);
console.log(customer1.complaint);
