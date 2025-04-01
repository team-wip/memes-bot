"use client";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { getTags } from '@/lib/services/tagService';
import { useEffect, useState } from 'react';
import Tag from '@/lib/interfaces/tag';

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
}));

export default function Form() {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [media, setMedia] = React.useState<File | null>(null);
  const [mediaType, setMediaType] = React.useState('');
  const [tags, setTags] = React.useState<Tag[]>([]);

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

  const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setMedia(file);
      setMediaType(file.type.split('/')[0]); // On suppose que le type de média est soit "image" ou "video"
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!media) {
      alert('Please select a media file.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('media', media);
    formData.append('mediaType', mediaType);

    try {
      const response = await fetch('/api/memes', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <FormContainer component="form" onSubmit={handleSubmit}>
      <TextField
        label="Titre"
        variant="outlined"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <Autocomplete
        multiple
        options={tags}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Tags" />}
      />
      
      {/* Ajout du champ fichier pour télécharger une image ou une vidéo */}
      <Button
        variant="outlined"
        component="label"
      >
        Choisir une image ou une vidéo
        <input
          type="file"
          hidden
          onChange={handleMediaChange}
          accept="image/*,video/*"  // Accepter uniquement des images ou des vidéos
          required
        />
      </Button>

      <Button type="submit" variant="contained">
        Ajouter
      </Button>
    </FormContainer>
  );
}
