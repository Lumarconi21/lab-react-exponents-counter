const Counter = (props) => {

  return (
    <div className="counter-container">
      <p className="counter-value">{props.count}</p>
      <button className="counter-button" onClick={() => { props.removeCount(props.count) }}>-</button>
      <button className="counter-button" onClick={() => { props.addCount(props.count) }}>+</button>
    </div>
  );
};

export default Counter;
