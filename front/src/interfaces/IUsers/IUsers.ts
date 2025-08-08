import ICredential from "../ICredential/ICredential";
import IOrder from "../IOrder/IOrder";

export enum eRole {
    ADMIN = "admin",
    USER = "user"
}

interface IUsers{
    id?: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: eRole;
    credential?: ICredential;
    orders?: IOrder[];
}

export default IUsers