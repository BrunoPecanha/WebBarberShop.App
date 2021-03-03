import { Byte } from "@angular/compiler/src/util";

export class UserModel {
    public mobileInfo: string;  
    public fantasyName: string;
    public realName: string;
    public cnpj: string;
    public address: string;
    public useQuee: boolean;
    public logo: Array<Byte>;
    public confirmationNotice: boolean;
    public userId: number;

    constructor(mobileInfo: string, fantasyName: string, realName: string, cnpj: string, address: string, 
        useQuee: boolean, logo: Array<Byte>, confirmationNotice: boolean, userId: number){
        this.mobileInfo = mobileInfo;
        this.fantasyName = fantasyName;
        this.realName = realName;
        this.cnpj = cnpj;
        this.address = address;
        this.useQuee = useQuee;
        this.logo = logo
        this.confirmationNotice = confirmationNotice;
        this.userId = userId;
    }
}
