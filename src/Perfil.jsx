import {useState} from "react"
function Perfil(){ 

    let [isShowingPerfil, setisShowingPerfil] = useState(false)

    let usuario = {
        nome: "Laura",
        email: "laurasofia@gmail.com",
        senha: "12345678"
    }


    return (
        <div>
            <h1> Perfil do usuário</h1>
            <p> Veja aqui suas informações do perfil</p>
            <button onClick={()=> setisShowingPerfil( !isShowingPerfil )}>Carregar perfil </button>

            {
                isShowingPerfil == true ?
                 
                     <div> 
                        <p>Nome: {usuario.nome}</p>
                        <p>Email: {usuario.email} </p>
                        <button> Alterar Senha</button>
                     </div>   
                :
                     <p></p>
            }
    
  {}
        </div>
    )

   }

   export default Perfil