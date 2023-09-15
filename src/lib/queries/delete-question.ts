export async function deleteQuestion(questionId: number) {
    const res = await fetch('/api/delete-question', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionId),
    });

    if (res.status !== 200) return 'Something went wrong. Please try again';
    return 'Question deleted successfully';
}
