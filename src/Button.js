import './Button.css';
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} class = 'button'>
      {children}
    </button>
  );
}

export default Button;

