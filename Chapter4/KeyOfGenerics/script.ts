interface User {
    name: string;
    id: number;
    age: number;
}

interface Admin {
    name: string;
}

function logProperty<T extends User | Admin>(user: T, key: keyof T) {
    console.log(user[key]);
}

const u1: User = { name: 'Jan', id: 100, age: 27 };
logProperty(u1, 'age');

const a1: Admin = { name: 'Admin' };
logProperty(a1, 'name');
