import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Trash2 } from "lucide-react";

const SortableItem = ({ video, index, onChange, onRemove }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: video.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="border-b border-gray-800 hover:bg-zinc-800 transition"
    >
      <td className="p-2 flex items-center gap-2">
        <button
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-white"
        >
          <GripVertical size={18} />
        </button>
        {index + 1}
      </td>
      <td className="p-2">{video.file.name}</td>
      <td className="p-2">
        <input
          type="text"
          value={video.title}
          onChange={(e) => onChange(video.id, "title", e.target.value)}
          className="bg-transparent border border-gray-600 rounded px-2 py-1 w-full text-white"
        />
      </td>
      <td className="p-2">
        <input
          type="text"
          value={video.description}
          onChange={(e) => onChange(video.id, "description", e.target.value)}
          className="bg-transparent border border-gray-600 rounded px-2 py-1 w-full text-white"
        />
      </td>
      <td className="p-2">
        <button
          onClick={() => onRemove(video.id)}
          className="text-red-500 hover:text-red-300 transition"
        >
          <Trash2 size={16} />
        </button>
      </td>
    </tr>
  );
};

export default SortableItem;
