import TagList from "@/components/tags/List";

export default function TagsPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Gestion des tags</h1>
      <TagList />
    </div>
  );
}
