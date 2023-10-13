const PageKey = 'pages';

const pageJson = localStorage.getItem(PageKey);

const pageStore = JSON.parse(pageJson);

export default {
   changePage(){
    console.log(pageStore);
   },
    getAllPages(){
        return pageStore;
    },
    getSinglePage(index){
        return pageStore[index]
    },
    editPage(index,p){
         pageStore[index] = p;
         localStorage.setItem(PageKey,JSON.stringify(pageStore));
    }
}