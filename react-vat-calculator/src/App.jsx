function App() {
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const VATRATE = 0.07

  const handlePriceChange = (e) => {
    const p = parseFloat(e.target.value);
    setPrice(p);
  };

  const handleDiscountChange = (e) => {
    const d = parseFloat(e.target.value);
    setDiscount(d);
  };

  const netPrice = Math.max(price - discount, 0)
  const vat = netPrice * VATRATE
  const total = netPrice + vat

  return (
    <>
      <h2>VAT Calculator</h2>
      <div className="card">
        <div>
          <label>Price: </label>
          <input type="number" placeholder="Enter price" onChange={handlePriceChange} />
        </div>
        <div>
          <label>Discount: </label>
          <input type="number" placeholder="Enter discount" onChange={handleDiscountChange} />
        </div>
        <br />
        <div>Gross Price: {netPrice.toFixed(2)}</div>
        <div>VAT Rate: {(VATRATE * 100).toFixed(2)}%</div>
        <div>VAT: {vat.toFixed(2)}</div>
        <div>Total: {total.toFixed(2)}</div>
      </div>
    </>
  )
}

export default App