export function goToHomePage (history) {
    history.push("/")
}

export function goToLoginPage (history) {
    history.push("/login")
}

export function goToSignUpPage (history) {
    history.push("/signup")
}

export function goToFeedPage (history) {
    history.push("/posts")
}

export function goToCommentsPage (history,postId) {
    history.push(`/posts/${postId}`)
}

export function goToRefreshPage (history) {
    history.go(0)
}