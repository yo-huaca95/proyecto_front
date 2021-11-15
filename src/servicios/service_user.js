import {ServerBD} from "./path_general_servidorBD";
import axios from "axios";


class consultas_User{

   verificar_user(user){
        axios.post(`${ServerBD}usuario/login`,{
            usuario:user.usuario,
            pass:user.pass
        }).then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
}

export default consultas_User;
