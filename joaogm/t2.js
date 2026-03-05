<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Sistema de Notas Simples</title>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; }
        textarea { width: 100%; height: 100px; margin-bottom: 10px; }
        .note { border: 1px solid #ccc; padding: 10px; margin-top: 10px; }
        .note button { margin-left: 10px; }
    </style>
</head>
<body>
<div class="container">
    <h1>Minhas Notas</h1>
    <textarea id="note-input" placeholder="Escreva sua nota..."></textarea>
    <button onclick="addNote()">Adicionar Nota</button>
    <div id="notes-list"></div>
</div>
<script>
    document.addEventListener('DOMContentLoaded', renderNotes);
    function addNote() {
        const input = document.getElementById('note-input');
        if (!input.value) return;
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(input.value);
        localStorage.setItem('notes', JSON.stringify(notes));
        input.value = '';
        renderNotes();
    }
    function renderNotes() {
        const list = document.getElementById('notes-list');
        list.innerHTML = '';
        JSON.parse(localStorage.getItem('notes') || '[]').forEach((note, index) => {
            list.innerHTML += `<div class="note"><p>${note}</p><button onclick="deleteNote(${index})">X</button></div>`;
        });
    }
    function deleteNote(index) {
        let notes = JSON.parse(localStorage.getItem('notes'));
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
    }
</script>
</body>
</html>