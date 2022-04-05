// 1:
class Singleton{
    singleton = null;
    constructor() {
        if(!singleton){
            singleton = new Singleton();
        }
        return singleton;
    }

    static getInstence(){
        if(!singleton){
            
            
        }
        return singleton
    }
}
