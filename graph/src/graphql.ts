
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UserDto {
    name: string;
    lastName: string;
}

export interface IQuery {
    usersByRole(role: string): User[] | Promise<User[]>;
    users(): User[] | Promise<User[]>;
}

export interface IMutation {
    createUser(args: UserDto): User | Promise<User>;
}

export interface User {
    id: string;
    name: string;
    lastName: string;
    createDateTime: string;
}
