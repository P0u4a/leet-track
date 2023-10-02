export async function editNotes(questionId: number, newNote: string) {
    const res = await fetch(`/api/edit-notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionId, newNote }),
    });

    if (res.status !== 200) return 'Something went wrong. Please try again';
    return 'Question deleted successfully';
}
