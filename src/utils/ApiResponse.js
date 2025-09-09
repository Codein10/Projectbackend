class ApiResponse {
    constructor(data,message,statuCode="success"){
        this.data=data;
        this.message=message;
        this.success=statuCode<400;
        this.statuCode=statuCode
    }
}
export {ApiResponse}