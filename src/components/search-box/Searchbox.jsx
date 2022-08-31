import './searchbox.css';

const searchBox = ({ className, placeholder, onChangeHandler }) => (
  // console.log(this.props.onChangeHandler);
  <input
    type="search"
    className={className}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default searchBox;
