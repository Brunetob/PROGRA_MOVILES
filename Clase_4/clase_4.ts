/**
 * Indicación
 * Consumir este api creando la interfaz correspondiente: https://catfact.ninja/facts
 */

/*const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Catfacts {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();*/

const fetchURL = 'https://catfact.ninja/facts'

interface CatFact {
    fact: string;
    length: number;
}

async function fetchPosts(url: string) {
    let response = await fetch(url);
    let dataResponse = await response.json();
    return <CatFact[]>dataResponse.data;
}

async function showPost() {
    let facts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let fact = facts[0];
    console.log('Fact: ' + fact.fact);
    console.log('Length: ' + fact.length);
}

showPost();////////////