import { Tags } from "../Tags/Tags";
import { TagType } from "../Tags/TagType";

interface TagListProps {
  tags: TagType[];
  onTagClick: (tagId: string) => void;
}

export const TagList = ({ tags, onTagClick }: TagListProps) => {
  const handleTagClick = (tagId: string) => {
    onTagClick(tagId);
  };

  return <Tags tags={tags} onTagClick={handleTagClick} />;
};