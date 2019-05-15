export class CommonResponse<T> {
    responseCode: string;
    responseMessage: string;
    data: T;

    constructor(responseC,responseM,thedata){
        this.responseCode=responseC;
        this.responseMessage=responseM;
        this.data=thedata;
    }
}