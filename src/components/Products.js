
const Products = ({ product, basket, setBasket, total, money }) => {
  const basketItem = basket.find((item) => item.id === product.id);
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([...basket, { id: product.id, amount: 1 }]);
    }
  };

  const removeFromBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    checkBasket.amount -= 1;

    if (checkBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    }
  };

  return (
    <div className="product container">
          <div className="card">
            <img src={product.img} alt="img" className="pruct-img w-75 mx-auto"/>
            <div className="card-body">
              <h4 className="card-title">
                <div> {product.name}</div>
              </h4>
              <div className="price">
                <div> {product.price} m</div>
              </div>
            </div>
            <div className="card-footer">
              <div className="actions d-flex align-items-center justify-content-between">
                <button
                  className="sell-btn btn btn-danger"
                  disabled={!basketItem}
                  onClick={removeFromBasket}
                >
               Geri qaytar
                </button>
                <div className="amount fw-bold mx-3">
                  {(basketItem && basketItem.amount) || 0}
                </div>
                <button
                  disabled={total + product.price > money}
                  className="buy-btn btn btn-success"
                  onClick={addBasket}
                >
                  Məhsulu al
                </button>
              </div>
            </div>
          </div>
        </div>
    
  );
};

export default Products;
