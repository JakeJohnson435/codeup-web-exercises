/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  },
];

const name = 'Jake';
const email = 'jakejohnson818@gmail.com';
const languages = ["html", "css", "javascript"];


// let user ={
//     name,
//     email,
//     languages
// };
// users.push(user);

users.push({
    name,
    email,
    languages
});

let emails = [];
let names = [];

users.forEach(user => {
    emails.push(user.email);
    names.push(user.name);
});

let developers = [];

users.forEach(function({name, email, languages}) {
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);
});

console.log(developers);

let list = '<ul>';

for (let developer of developers) {
    list += `<li>${developer}</li>`;
}
list += "</ul>";

console.log(list);

document.write(list);