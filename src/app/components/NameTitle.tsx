type NameTitleProps = {
  text: string;
};

const NameTitle: React.FC<NameTitleProps> = ({ text }) => {
  return (
    <>
      <span className='text-white text-2xl font-bold p-4 min-[970px]:text-6xl'>{text}</span>
    </>
  );
};

export default NameTitle;
