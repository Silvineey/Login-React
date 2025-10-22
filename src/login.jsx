import React, { createElement } from "react"
import { useState } from "react"
function Cadastro(){
    const [usuario,setusuario]=useState("")
    const [email,setemail]=useState("")
    const [senha,setsenha]=useState("")
    console.log(usuario)
    console.log(email)
    console.log(senha)
    const lista=["@hotmail.com", "@gmail.com", "@outlook.com"]

    function logar(){
        if(usuario.length<=4){
            window.alert("Usuario precisa ter mais que 4 caracteres")
        }
        else if(!lista.some(l=>email.toLowerCase().includes(l))){
            window.alert("Email inválido")
        }
        else{
            window.alert("Usuario logado")
        }
    }

    return(
        <div className="caixao">
            <div className="caixa">
                <h1>Formulário</h1>

                <p>Usuario</p>
                <input onChange={e=>setusuario(e.target.value)} value={usuario} placeholder="Usuario"/>
                <p>Email</p>
                <input onChange={e=>setemail(e.target.value)} value={email} placeholder="Email"/>
                <p>Senha</p>
                <input onChange={e=>setsenha(e.target.value)} value={senha} placeholder="Senha"/>
                {
                    senha.length>=4&&(
                        <div className="botao">
                            <button onClick={logar}>Logar</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Cadastro