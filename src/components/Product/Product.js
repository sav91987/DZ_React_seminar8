import "./Product.css";

function Product() {
    return (
        <>
            <div class="swiper mySwiper swiper-Z">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="swiper-slide__main">
                            <img
                                src={"/img/productPicture.svg"}
                                alt="productPicture1"
                            />
                        </div>
                    </div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>

            <section class="producDiscription container">
                <h2 class="producDiscription__type">WOMEN COLLECTION</h2>
                <img src={"/img/Devider.png"} alt="Devider" />
                <h2 class="producDiscription__name">MOSCHINO CHEAP AND CHIC</h2>
                <p class="producDiscription__discription">
                    Compellingly actualize fully researched processes before
                    proactive outsourcing. Progressively syndicate collaborative
                    architectures before cutting-edge services. Completely
                    visualize parallel core competencies rather than exceptional
                    portals.
                </p>
                <h2 class="producDiscription__price">$561</h2>
                <img
                    class="producDiscription__img"
                    src={"/img/Line.png"}
                    alt="Line"
                />
                <div class="producDiscription__parameters">
                    <select class="producDiscription__parameters_select">
                        <option>CHOOSE COLOR</option>
                        <option>Red</option>
                        <option>Green</option>
                        <option>Blue</option>
                        <option>White</option>
                    </select>
                    <select class="producDiscription__parameters_select">
                        <option>CHOOSE SIZE</option>
                        <option>40</option>
                        <option>42</option>
                        <option>44</option>
                        <option>46</option>
                    </select>
                    <select class="producDiscription__parameters_select">
                        <option>QUANTITY</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <button class="producDiscription__btnAddToCart">
                    <img src={"/img/btnBasketRed.svg"} alt="btnBasket" />
                    Add to Cart
                </button>
            </section>
        </>
    );
}

export default Product;
