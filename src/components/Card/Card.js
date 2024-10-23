import "./Card.css";

function Card({ data, numOfElementsToRemove }) {
    const newData = [...data];
    const cartArr = [];

    newData.splice(0, numOfElementsToRemove);

    const getCartArr = (prop) => {
        const arr = data.filter((item) => prop.getAttribute("id") === item.id);
        cartArr.push(...arr);
        cartArr.map((element) => (element.quantity = 1));

        const cartSet = Array.from(new Set(cartArr));
        localStorage.setItem("cartProducts", JSON.stringify(cartSet));
    };

    const addToCart = (e) => {
        if (e.target.tagName === "IMG") {
            getCartArr(e.target.parentNode);
        } else {
            getCartArr(e.target);
        }
        alert("Добавлено в корзину!");
    };

    return (
        <>
            <section class="salesCards container">
                {newData.map((element) => (
                    <div class="salesCard">
                        <div class="salesCard__image">
                            <img
                                src={"/" + element.imgUrl}
                                alt={element.imgAlt}
                            />
                            <div class="overlay"></div>

                            <button
                                onClick={addToCart}
                                id={element.id}
                                class="salesCard__btnAddToCart"
                            >
                                <img
                                    onClick={addToCart}
                                    src={"/img/btnBasket.svg"}
                                    alt="btnBasket"
                                />
                                Add to Cart
                            </button>
                        </div>
                        <p class="saleCardName text">{element.saleCardName}</p>
                        <p class="saleCardDiscript text">
                            {element.saleCardDiscript}
                        </p>
                        <p class="saleCardPrice text">
                            ${element.saleCardPrice}
                        </p>
                    </div>
                ))}
            </section>

            <div class="pagination__cover">
                <div class="pagination">
                    <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z"
                            fill="black"
                        />
                    </svg>
                    <a
                        href="#"
                        class="pagination__numbers pagination__numbers-first"
                    >
                        1
                    </a>
                    <a href="#" class="pagination__numbers">
                        2
                    </a>
                    <a href="#" class="pagination__numbers">
                        3
                    </a>
                    <a href="#" class="pagination__numbers">
                        4
                    </a>
                    <a href="#" class="pagination__numbers">
                        5
                    </a>
                    <a href="#" class="pagination__numbers">
                        6.....20
                    </a>
                    <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Card;
