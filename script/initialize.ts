window.onload = () => {
    alert(hello("hi"));
}
const world = "🗺️";
function hello(word: string = world): string {
    return `Hello!${word}`;
}
