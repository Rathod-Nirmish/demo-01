const SubscriptionItem = React.memo(({ data, isSelected, onClick }) => (
    <div
      className={`circle-container ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(data)}
    >
      <div className="circle-container-content-wrapper">
        <div className="circle month-year-price-dot-blue"></div>
        <div className="text">₹{data.price} for {data.period}</div>
      </div>
    </div>
  ));
  