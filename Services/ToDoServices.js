import { ApiService } from "./ApiService";

const endPoint = 'todoList';

export const TodoService = {

    list(){
        return ApiService.get(endPoint);
    },

    create(item){
        return ApiService.post(endPoint, item);
    },

    remove(id){
        return ApiService.delete(endPoint, id);
    }

}