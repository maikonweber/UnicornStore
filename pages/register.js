import Head from "next/head"
import Link from "next/link"
import Styles from "../styles/register.module.css"
import { useState, useContext } from 'react'
import valid from "../utils/valid"
import {DataContext} from "../store/GlobalState"
import { postData } from "../utils/fecthData"

function Register() {
    const initialState = { name: '', email: '' , password: "", cf_password: ''}
    const [ userData, setUserData] = useState(initialState)
    const { name, email, password, cf_password } = userData
    const {state, dispatch} = useContext(DataContext)
   
    const handleChangeInput = e => {
        const { name, value } = e.target 
        setUserData({...userData, [name]:value})
        dispatch({ type: "NOTIFY", payload: {} })

    }

    const handleSubmit = async e => { 
        e.preventDefault()
        const errMsg = valid(name, email, password, cf_password)
        if(errMsg) return dispatch({type: 'NOTIFY', payload: {error: errMsg}})
        


        dispatch({type: 'NOTIFY', payload: {loading: true}})
        
        const res = await postData('auth/register', userData)
        
        if(res.err) return dispatch({type: "NOTIFY", payload: {error: res.err}})
        
        return dispatch({type: "NOTIFY", payload: { sucess: res.msg} })
        
    
    }


    return (
        <div className={Styles.container}>
            <Head>
            <title> Sing in Page </title>
        </Head>
        <form className={Styles.form} onSubmit={handleSubmit}>
        <div className={Styles.formgroup}>
                <label htmlFor="inputnome"> Nome </label>
                <input type="name" className={Styles.nameinput} placeholder="Entre com seu Email" id="name" name="name" value={name} onChange={handleChangeInput}></input>
            </div>
            <div className={Styles.formgroup}>
                <label htmlFor="inputemail"> Email </label>
                <input type="email" className={Styles.emailinput} placeholder="Entre com seu Email" id="email" name="email" value={email} onChange={handleChangeInput}></input>
            </div>
            <div className={Styles.formgroup}>
                <label htmlFor="inputsenha"> Senha </label>
                <input type="current-password" className={Styles.passwordinput} placeholder="Digite sua Senha" id="password" name="password" value={password} onChange={handleChangeInput}></input>
            </div>
            <div className={Styles.formgroup}>
                <label htmlFor="inputsenha"> Senha </label>
                <input type="cf_password" className={Styles.passwordinput} placeholder="Repita a senha" id="cf_passoword" name="cf_password" value={cf_password} onChange={handleChangeInput}></input>
            </div>
            <button type="submit" className={Styles.buttonsubmit}> Registre </button>
            <p className={Styles.my2}> Já tem uma conta? 
                <Link href="/singin"><a>Entre com sua conta</a></Link>
            </p>
        </form>
           </div>
    )
}


export default Register
