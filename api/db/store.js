

class AvatarStore{
    data = {};
    
    constructor(){
        this.data = AvatarStore.init();
        // console.log(this.data)
    }
    getId(){
        return Math.random().toString(36).slice(2);
    }
    static init(){
        return ({
            list : [],
            lastUpdate : Date.now()
        });
    }
    empty(){
        this.data = AvatarStore.init();

        return true;
    }
    addAvatar(url ){
        if(typeof url =='string'){

            const newUrl = {id : this.getId(),url : url , timestamp : Date.now()  };

            this.data.list.push(newUrl);
            this.data.lastUpdate = Date.now();

            return true;
        }
        return false;
    }
    deleteAvatar(id){
        if(!id){
            return false;
        }
        const newList = this.data.list.filter(v => v.id != id);
        //update
        this.data.list = newList;
        return true;
    }
    get avatarList(){
        return this.data.list;
    }
    set avatarList(list=[]){
        if(Array.isArray(list)){
            this.data.list = list;
            return true;
        }
        return false;
    }
    get getStore(){
        
        return this.data;
    }
};

const store = new AvatarStore();



module.exports = {
    store,
    AvatarStore
};