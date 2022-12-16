import Tag from "./Tag";

type TagListProps = {
  tags: string[];
};

const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex flex-wrap space-x-2 justify-start align-middle">
      {tags.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
    </div>
  );
};

export default TagList;
