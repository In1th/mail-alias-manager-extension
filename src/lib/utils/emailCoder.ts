
function randomString(len) {
    var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
}

export class Email {

    public static generateAlias(email: string){
        return `${email}+${randomString(10)}@gmail.com`;
    }
}