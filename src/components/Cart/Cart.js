import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SelectedProduct from "../SelectedProduct/SelectedProduct";
import Subscribe from "../Subscribe/Subscribe";
import "./Cart.css";

function Cart() {
    const selectedProducts = JSON.parse(localStorage.getItem("cartProducts"));
    return (
        <>
            <Header />
            <SelectedProduct selectedProducts={selectedProducts} />
            <Subscribe />
            <Footer />
        </>
    );
}

export default Cart;
