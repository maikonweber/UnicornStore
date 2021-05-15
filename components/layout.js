import Navbar from "../components/navbar.js"
import Styles from "../styles/layout.module.css"

function Layout({children}) {
    return (
        // Criar uma navebar e um Footer que se mantera por toda a extenção da pagina.
        <div className={Styles.content}> 
        <Navbar />
        {children}
        </div>
    )
}

export default Layout
