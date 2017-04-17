/**
 * Created by N.G on 15/04/2017.
 */
export class AccountModel
{
    constructor(public Id: string,
                public Name: string,
                public Phone: string,
                public Type: string,
                public Website: string,
                public Status?: string,
                public Message?: string)
    {

    }
}