type NameTitleProps = {
  text: string;
};

const NameTitle: React.FC<NameTitleProps> = ({ text }) => {
  return (
    <>
      <span className='text-white text-3xl p-4 md:text-6xl'>{text}</span>
    </>
  );
};

export default NameTitle;
