export default class StorageService{
    constructor(){
        this.list = [

        ];
        this.id = 1;

    }
    add(hookah){

        hookah.id = this.id;
        this.id++;
        this.hookahList.push(hookah);
    }
}
