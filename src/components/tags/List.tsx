"use client";

import { useState, useEffect } from 'react';
import { addTag, getTags, deleteTag } from '@/lib/services/tagService';
import Tag from '@/lib/interfaces/tag';

const TagList = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const tags = await getTags();
        setTags(tags);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };
    fetchTags();
  }, []);

  const handleAddTag = async () => {
    try {
      const tag = await addTag(newTag);
      setTags([...tags, tag]);
      setNewTag('');
    } catch (error) {
      console.error('Error adding tag:', error);
    }
  };

  const handleRemoveTag = async (tagToRemove: Tag) => {
    try {
        await deleteTag(tagToRemove.id);
        setTags(tags.filter(tag => tag.id !== tagToRemove.id));
    } catch (error) {
      console.error('Error removing tag:', error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        {tags.length > 0 ? (
          <ul className="list-disc pl-4">
            {tags.map((tag, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-sm">{tag.name}</span>
                <button
                  className="text-sm text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveTag(tag)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">Aucun tag pour le moment.</p>
        )}
      </div>
      <div className="flex items-center space-x-2">
        <input 
          type="text" 
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="Ajouter un tag" 
          className="w-full px-2 py-1 border border-gray-300 rounded-md"
        />
        <button
          className="text-sm text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-md"
          onClick={handleAddTag}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default TagList;
