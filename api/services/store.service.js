const fse = require('fs-extra');
const path = require('path');
const { AvatarStore } = require('../db/store');

const syncWithJson  = (dbFile,store = new AvatarStore())=>{ // update to store from json file
    if(!fse.existsSync(dbFile)){
        fse.outputJSONSync(dbFile,AvatarStore.init());
        store.empty();
        return store;
    }
    // corrupted file
    let data = fse.readJSONSync(dbFile);

    if(!data?.list){
        data = AvatarStore.init();
        console.log(`*(*********)`)
        store.empty();
        syncWithStore(dbFile,store);
        return ;
    }

    store.avatarList = data.list;
    store.lastUpdate= Date.now();

    return store;
};


const syncWithStore = (dbFile,store = new AvatarStore())=>{ // write to json file from store
    if(!fse.existsSync(dbFile)){
        fse.outputJSONSync(dbFile,AvatarStore.init());
    }
    fse.writeJSONSync(dbFile,store.getStore,{spaces : 4});
    return store;
}



module.exports = {
    syncWithJson,
    syncWithStore
}