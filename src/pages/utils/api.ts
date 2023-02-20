import axios, {AxiosResponse} from 'axios';
import { PeopleSchema, TodosSchema } from './types';

export async function getUsersData(){
    let data : AxiosResponse< PeopleSchema[] > = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data.data;
}

export async function getTodosData(id:string){
    let data :AxiosResponse<TodosSchema[]> = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
    return data.data;
}