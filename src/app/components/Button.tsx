type ButtonProps = {
  buttonName: string;
};

const Button: React.FC<ButtonProps> = ({ buttonName }) => {
  return <button>{buttonName}</button>;
};

export default Button;
