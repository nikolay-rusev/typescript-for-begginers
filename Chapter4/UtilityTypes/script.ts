interface User {
    name: string;
    email?: string;
    id?: number;
}

type UserOptional = Partial<User>;

function updateUserData(user: User, data: UserOptional) {
    return { ...user, ...data };
}

let u1: User = { name: 'Jan' };
u1 = updateUserData(u1, { email: 'jan@email.com' });
console.log(u1);

type UserRequired = Required<User>;
type UserBaseInfo = Pick<User, 'name' | 'email'>;
type UserInfo = Omit<User, 'name' | 'id'>;

type UserBaseInfoRequired = Required<Pick<User, 'name' | 'email'>>;
