type NameTitleProps = {
  text: string;
};

const NameTitle: React.FC<NameTitleProps> = ({ text }) => {
  return (
    <>
      <span className='text-white text-4xl font-bold py-4 xs:text-5xl sm:text-5xl md:text-6xl'>{text}</span>
    </>
  );
};

export default NameTitle;
