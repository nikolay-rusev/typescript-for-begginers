interface UserList {
    users: string[];
    length: number;
}

interface IsSized {
    length: number;
}

function lengthComparison<Type extends IsSized>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    }
    return b;
}

const arr1: UserList = { users: ['Jan', 'Daniel'], length: 2 };
const arr2: UserList = { users: ['Ivan', 'Mitko', 'Peter'], length: 3 };

console.log(lengthComparison(arr1, arr2));
