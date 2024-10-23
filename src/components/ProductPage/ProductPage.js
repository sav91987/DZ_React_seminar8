import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewArrivals from "../NewArrivals/NewArrivals";
import Product from "../Product/Product";
import Subscribe from "../Subscribe/Subscribe";
import "./ProductPage.css";

function ProductPage() {
    return (
        <>
            <Header />
            <NewArrivals />
            <Product />
            <Card numOfElem={3}/>
            <Subscribe />
            <Footer />
        </>
    );
}

export default ProductPage;
