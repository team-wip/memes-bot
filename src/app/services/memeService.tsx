export const getMemes = async () => {
  try {
    const data = await fetch(`/api/meme`);
    return data.json();
  } catch (error) {
    throw new Error("Erreur lors de la récupération des memes: " + error);
  }
};