let d;

d = new Date(2021, 6, 10);
d= new Date('07/10/2021 12:30:00')

d = new Date('07-10-2022 12:00:00')
d = d.getTime();

d = new Date();

console.log(d);

let x;

let date = new Date();

x = date.toString();
x = date.getTime();
x = date.getFullYear();
x= date.getMonth() + date.getMinutes() + date.getSeconds();

x = Intl.DateTimeFormat('en-US').format(d);

x= date.toLocaleDateString('default', {month: 'short'})




console.log(x);

