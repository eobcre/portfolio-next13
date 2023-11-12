type NameTitleProps = {
  text: string;
};

const NameTitle: React.FC<NameTitleProps> = ({ text }) => {
  return (
    <>
      <span className='text-white text-6xl p-4'>{text}</span>
    </>
  );
};

export default NameTitle;
