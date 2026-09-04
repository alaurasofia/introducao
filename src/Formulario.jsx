import { useState } from "react"

function Formulario() {

    let [idade, setIdade] = useState ("")
    let [nome, setNome] = useState("")
    let [cidade, setCidade] = useState("")
    let [estado, setEstado] = useState ("")

    function salvar(){
        if (nome.length < 3 ){
            alert ("Nome não informado")
            return
        }

        if (idade.length < 1){
            alert ("Idade inválida...")
            return
        }

        if (cidade.length < 2 ){
            alert ("Cidade inválida... ")
            return
        }

        if (estado.length < 2){
            alert ("Estado inválido...")
            return
        }


        alert("Seja bem vindo(a), "+nome+ " você tem "+idade+" anos e mora em "+cidade+ " - "+estado) 
        
}


    

    return (
        <div>
            <h1>Página de Formulário</h1>
            <p>Aprendendo a usar o input no React</p>

            <p>Digite seu nome:</p>
            <input onChange={ e => setNome(e.target.value) }/>

            <br/>  
            <p>Digite sua idade: </p>
            <input onChange={e => setIdade(e.target.value) }/>

            <p>Digite onde mora: </p>
            <input onChange={e => setCidade(e.target.value) }/>
            <input onChange={e => setEstado(e.target.value) }/>
            <br/> <br/>
            <button onClick={salvar}>Salvar</button>
        </div>
    )

}

export default Formulario