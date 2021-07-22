export function goToLogin (history) {
    history.push("/login")
}

export function goToSignUp (history) {
    history.push("/signup")
}

export function goToFeed (history) {
    history.push("/posts")
}

export function goToComments (history,postId) {
    history.push(`/login/${postId}`)
}