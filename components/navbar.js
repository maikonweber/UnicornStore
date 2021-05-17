import Styles from "../styles/navbar.module.css"
import Image from "next/image"
import Link  from "next/link"
import { useRouter } from 'next/router'


function Navbar() {
    const router = useRouter()
    const isActive = (r) => {
        if ( r === router.pathname){
            return "active"
        }
    }

  
  
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
                <li className={"nav-link" + isActive('/cart')}>
                    <Link href="/cart" ><a ><i aria-hidden="true" className="fas fa-cart-plus"></i> Cart </a></Link> </li>

                <li><Link href="/signin"><a><i aria-hidden="true" className="fas fa-user"></i> Sing In  </a></Link> </li>
            </ul>
        
        </nav>
            
        
    )
}

export default Navbar
