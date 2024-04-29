<?php

namespace App\Http\Controllers;

use App\Models\UserMessage;
use App\Models\UserChat;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'chat_id' => 'required|integer',
            'user_id' => 'required|integer',
            'content' => 'required|string',
        ]);

        $message = UserMessage::create([
            'chat_id' => $request->chat_id,
            'user_id' => $request->user_id,
            'content' => $request->content,
            'timestamp' => now()->timestamp,
        ]);

        return response()->json($message, 201);
    }

    public function delete($id)
    {
        $message = UserMessage::find($id);

        if (!$message) {
            return response()->json(['error' => 'Message not found'], 404);
        }

        $message->delete();

        return response()->json(null, 204);
    }
}
