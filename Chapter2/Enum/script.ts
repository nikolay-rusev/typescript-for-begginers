enum PermissionLevel {
    Instructor = 'i',
    Student = 's',
    Admin = 'a',
}

interface User {
    name: string;
    age: number;
    courses: string[];
}

interface UserExtended extends User {
    permissionLevel: PermissionLevel;
    // permissionLevel: 'Instructor' | 'Student' | 'Admin'; // union
}

const user1: UserExtended = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    permissionLevel: PermissionLevel.Instructor,
};

const user2: UserExtended = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
    permissionLevel: PermissionLevel.Student,
};

function printUser(user: UserExtended) {
    console.log(user.age);
    console.log(user.name);
    console.log(user.courses);
    console.log(user.permissionLevel);
}

printUser(user1);
printUser(user2);
