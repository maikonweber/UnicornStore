import React from 'react'
import Head from 'next/head'
import Styles from "../styles/singin.module.css"
import Link from 'next/link'
const Singin = () => {
    return (
        <div><Head>
            <title> Sing in Page </title>
        </Head>
        <form>
            <div className={Styles.formgroup}>
                <label htmlFor="exampleInput"> Email </label>
                <input type="email" className={Styles.emailinput} placeholder="Entre com seu Email"></input>
            </div>
            <div className={Styles.formgroup}>
                <label htmlFor="exampleInput"> Senha </label>
                <input type="email" className={Styles.emailinput} placeholder="Digite sua Senha"></input>
            </div>
            <button type="submit" className={Styles.buttonsubmit}> Entre </button>
            <p className={Styles.my2}> Não tem uma conta ?
                <Link href="/register"><a>Registre</a></Link>
            </p>
        </form>

           </div>
    )
}

export default Singin
