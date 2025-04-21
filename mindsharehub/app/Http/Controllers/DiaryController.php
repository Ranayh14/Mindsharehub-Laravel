<?php

namespace App\Http\Controllers;

use App\Models\Diary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class DiaryController extends Controller
{
    public function index()
    {
        // Ambil semua diary dan relasi user-nya
        $diaries = Diary::with('user')->latest()->get();

        // Kirim ke file: resources/js/Pages/Diary/Index.jsx
        return Inertia::render('Diary/Index', [
            'diaries' => $diaries
        ]);
    }

    // method lainnya tetap API-style dulu, bisa kita ubah nanti kalau kamu mau
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $diary = Diary::create($request->all());
        return response()->json($diary, 201);
    }

    public function show(Diary $diary)
    {
        return response()->json($diary);
    }

    public function update(Request $request, Diary $diary)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $diary->update($request->all());
        return response()->json($diary);
    }

    public function destroy(Diary $diary)
    {
        $diary->delete();
        return response()->json(['message' => 'Diary deleted successfully']);
    }
}
