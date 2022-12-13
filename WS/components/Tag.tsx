type TagProps = {
  tag: string;
};

const Tag = ({ tag }: TagProps) => {
  return (
    <div className="bg-secondary border border-black px-4 py-2 rounded-full drop-shadow-standard font-thin text-black">
      {tag}
    </div>
  );
};

export default Tag;
