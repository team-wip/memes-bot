import Form from "@/components/addMeme/Form";

export default function AddMemePage() {
  return (
    <div className="mx-auto w-3/5">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Ajouter un meme 🤣</h1>
      </div>
      <div className="flex items-center justify-center">
        <Form />
      </div>
    </div>
  );
}
