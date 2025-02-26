import React from "react";
import { useEffect, useState } from "react";

interface MusicUser {
  music_title: string;
  user_name: string;
}

export default function MusicTable() {
  const [musicUsers, setMusicUsers] = useState<MusicUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/music-users");
      const data = await response.json();
      setMusicUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50">Título Música</th>
            <th className="px-6 py-3 bg-gray-50">Usuário</th>
          </tr>
        </thead>
        <tbody>
          {musicUsers.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4">{item.music_title}</td>
              <td className="px-6 py-4">{item.user_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
