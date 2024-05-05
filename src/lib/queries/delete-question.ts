export async function deleteQuestion(questionId: string) {
    const res = await fetch('/api/delete-question', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionId),
    });

    if (res.status !== 200) return 'Something went wrong. Please try again';
    return 'Problem deleted successfully';
}
