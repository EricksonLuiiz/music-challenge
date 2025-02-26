<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

class MusicController extends Controller{
function associateUser($musicId, $userId)
{
    $query = "INSERT INTO users_music (music_id, user_id, created_at, updated_at)
              VALUES (?, ?, NOW(), NOW())";

    DB::insert($query, [$musicId, $userId]);

    return response()->json(['message' => 'Associação realizada com sucesso']);
}

function getMusicUsers()
{
    $query = "
        SELECT m.title as music_title, u.name as user_name
        FROM users_music um
        JOIN music m ON um.music_id = m.id
        JOIN users u ON um.user_id = u.id
        ORDER BY u.name, m.title;
    ";

    $results = DB::select($query);

    return response()->json($results);
}
}
