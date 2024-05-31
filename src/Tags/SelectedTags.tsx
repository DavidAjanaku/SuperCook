import { TagType } from "./TagType";

interface SelectedTagsProps {
  selectedTags: string[];
  onTagRemove: (tagId: string) => void;
  tagList: TagType[];
}

export const SelectedTags = ({ selectedTags, onTagRemove, tagList }: SelectedTagsProps) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px 0',   justifyContent:"center" }}>
      {selectedTags.map((tagId) => (
        <span
          key={tagId}
          onClick={() => onTagRemove(tagId)}
          style={{
            backgroundColor: '#e0e0e0',
            borderRadius: '20px',
            padding: '5px 10px',
            margin: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          
         
          }}
        >
          <span style={{ marginRight: '5px' }}>
            {tagList.find((tag) => tag.id === tagId)?.name.fr}
          </span>
          x
        </span>
      ))}
    </div>
  );
};
