export const getTags = async () => {
    try {
      const data = await fetch(`/api/tags`);
      return data.json();
    } catch (error) {
      throw new Error("Erreur lors de la récupération des tags: " + error);
    }
  };

export const addTag = async (name: string) => {
    try {
      const data = await fetch(`/api/tags`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      return data.json();
    } catch (error) {
      throw new Error("Erreur lors de l'ajout du tag: " + error);
    }
  };

export const deleteTag = async (id: number) => {
    try {
      const data = await fetch(`/api/tags/${id}`, {
        method: 'DELETE',
      });
      return data.json();
    } catch (error) {
        console.log(error)
      throw new Error("Erreur lors de la suppression du tag: " + error);
    }
  };

  export const getTag = async (id: number) => {
    try {
      const data = await fetch(`/api/tags/${id}`);
      return data.json();
    } catch (error) {
      throw new Error("Erreur lors de la récupération du tag: " + error);
    }
  };
