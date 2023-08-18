import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <section>
                <button>Inicio</button>
                <button>Indumentaria</button>
                <button>Locales</button>
                <button>Contacto</button>
                <button>Ayuda</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar