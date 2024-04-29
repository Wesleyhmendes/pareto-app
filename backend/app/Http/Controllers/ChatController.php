<?php

namespace App\Http\Controllers;

use App\Models\UserChat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
        ]);

        $chat = UserChat::create([
            'timestamp' => now()->timestamp,
        ]);

        return response()->json($chat, 201);
    }

    public function getAllMessages(int $chatId)
    {
        try {
            $messages = UserChat::where('chat_id', $chatId)->get();

            return response()->json(['success' => true, 'messages' => $messages], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'Erro ao obter mensagens.'], 500);
        }
    }
}
