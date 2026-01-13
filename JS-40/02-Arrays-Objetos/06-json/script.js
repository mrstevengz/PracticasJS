const post = {
    id: 1,
    title: 'Post One',
    body: 'Lorem'
}

//Convertir a JSON string

const str = JSON.stringify(post);

console.log(str);

//Parse JSON

const obj = JSON.parse(str)

console.log(obj.id);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'Lorem',
    },
     {
        id: 1,
        title: 'Post One',
        body: 'Lorem',
    }
];

const str2 = JSON.stringify(posts)
console.log(str2);

