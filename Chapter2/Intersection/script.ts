type User = {
    name: string;
    age: number;
    courses: string[];
};

type Permisson = {
    permissionLevel: string;
};

type UserExtended = User & Permisson;

const user1: UserExtended = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    permissionLevel: 'Instructor',
};

const user2: UserExtended = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
    permissionLevel: 'Student',
};

function printUser(user: UserExtended) {
    console.log(user.age);
    console.log(user.name);
    console.log(user.courses);
    console.log(user.permissionLevel);
}

printUser(user1);
printUser(user2);
