const TodoList_Keys = 'todo-items';

const itemsJson = localStorage.getItem(TodoList_Keys);

const parseItems = JSON.parse(itemsJson);

export default {
    checkParse(){
        console.log(parseItems);
    },
    saveToBrowser(){
        localStorage.setItem(TodoList_Keys,JSON.stringify(parseItems))
    },
    getAllList(){
        return parseItems;
    },
    saveHasDone(index,key){
        parseItems[index].hasDone = key;
        this.saveToBrowser();
    },
  
    saveEditItem(index,data){
        parseItems[index] = data;
        this.saveToBrowser();
    }
}
