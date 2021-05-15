import Styles from "../styles/navbar.module.css"
import Image from "next/image"
import Link  from "next/link"

function Navbar() {
    return (
        <nav className={Styles.navbar}>
            <a>
            <div className={Styles.logo}>
            <Image      
                    src="/logo.png"
                    width={53}
                    height={36}  />
            </div>
            </a>
            
           
            <ul className={Styles.list}>
                <li> <Link href="/cart" ><a> <i class="fas fa-cart-plus"></i> Cart </a></Link> </li>
                <li> <Link href="/singin"><a>  <i class="fas fa-user"></i> Sing In  </a></Link> </li>
            </ul>
        
        </nav>
            
        
    )
}

export default Navbar
