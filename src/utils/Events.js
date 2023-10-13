const event = new Map();

export default {
    $on(eventName,fn){
        if(!event.has(eventName)){
            event.set(eventName,[])
        }
        event.get(eventName).push(fn)
    },
    $off(eventName,fn){
        throw {message:"not implemented"}
    },
    $emit(eventName,data){
        if(event.has(eventName)){
            event.get(eventName).forEach(fn => {
                fn(data)
            });
        }
    }
}