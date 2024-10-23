import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    const handleClick = () => {
        const menu = document.querySelector(".burgerMenu");
        console.log(menu);
        menu.classList.toggle("hidden");
    };
    return (
        <header className="header">
            <div className="header__wrapper container">
                <div className="headerBtn">
                    <Link to="/">
                        <button className="button">
                            <img src={"/img/headerLogo.svg"} alt="headerLogo" />
                        </button>
                    </Link>

                    <button className="button">
                        <img src={"/img/btnSearch.svg"} alt="btnSearch" />
                    </button>
                </div>
                <div class="headerBtn">
                    <button onClick={handleClick} className="button btnMenu">
                        <img src={"/img/btnMenu.svg"} alt="btnMenu" />
                    </button>

                    <div className="burgerMenu hidden">
                        <h2 className="burgerMenu__text-fw">MENU</h2>
                        <h2 className="burgerMenu__text-red">MAN</h2>
                        <div className="burgerMenu__categories burgerMenu__text-a">
                            <a href="#">Accessories</a>
                            <a href="#">Bags</a>
                            <a href="#">Denim</a>
                            <a href="#">T-Shirts</a>
                        </div>

                        <h2 clasNames="burgerMenu__text-red">WOMAN</h2>
                        <div className="burgerMenu__categories burgerMenu__text-a">
                            <a href="#">Accessories</a>
                            <a href="#">Jackets &amp; Coats</a>
                            <a href="#">Polos</a>
                            <a href="#">T-Shirts</a>
                            <a href="#">Shirts</a>
                        </div>

                        <h2 className="burgerMenu__text-red">KIDS</h2>
                        <div className="burgerMenu__categories burgerMenu__text-a">
                            <a href="#">Accessories</a>
                            <a href="#">Jackets &amp; Coats</a>
                            <a href="#">Polos</a>
                            <a href="#">T-Shirts</a>
                            <a href="#">Shirts</a>
                            <a href="#">Bags</a>
                        </div>
                    </div>

                    <Link to="/Registration">
                        <button className="button buttonNone">
                            <img src={"/img/btnProfile.svg"} alt="btnProfile" />
                        </button>
                    </Link>
                    <Link to="/Cart">
                        <button className="button buttonNone btnCounter">
                            <img src={"/img/btnBasket.svg"} alt="btnBasket" />
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
