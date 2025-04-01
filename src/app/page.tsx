"use client";

import Card from "@/app/components/dashboard/Card";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import { getMemes } from "@/app/services/memeService";
import { useState, useEffect } from "react";
import LoadingSkeleton from "@/app/components/dashboard/LoadingSkeleton";

export default function Page() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getMemes();
        setMemes(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <LoadingSkeleton />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      {memes.map((meme: any) => (
        <Card
          key={meme.id}
          title={meme.title}
          description={meme.description}
          icon={<DashboardRoundedIcon />}
          value={meme.views}
        />
      ))}
    </div>
  );
}
