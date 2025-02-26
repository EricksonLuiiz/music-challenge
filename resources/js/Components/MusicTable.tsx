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
            const jsonData = await response.json();
            console.log("Dados recebidos:", jsonData);
            setMusicUsers(jsonData);
        };
        fetchData();
    }, []);

    return (
        <div className="overflow-x-auto bg-white">
            <table className="min-w-full text-left">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-100">
                            Título da Música
                        </th>
                        <th className="px-6 py-3 bg-gray-100">Usuário</th>
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
