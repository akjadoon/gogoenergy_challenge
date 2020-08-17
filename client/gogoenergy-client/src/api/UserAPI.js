import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/api"

export async function get_users(){
    const res = await axios.get("/users");
    return res
}

export async function delete_user(id){
    const res = await axios.delete("/users/" + id);
    return res
}