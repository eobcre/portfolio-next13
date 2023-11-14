type NameTitleProps = {
  text: string;
};

const NameTitle: React.FC<NameTitleProps> = ({ text }) => {
  return (
    <>
      <span className='text-[#303030] text-2xl font-bold p-4 md:text-5xl'>{text}</span>
    </>
  );
};

export default NameTitle;
