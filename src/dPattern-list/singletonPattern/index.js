// 1:  单例模式
class Singleton{
    singleton = null;
    // 单例模式
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
