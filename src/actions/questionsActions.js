export function createQuestion(question) {
    return {
        type: "CREATE_QUESTION",
        question
    };
}