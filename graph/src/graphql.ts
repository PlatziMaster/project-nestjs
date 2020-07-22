
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
    products(): Product[] | Promise<Product[]>;
    orders(): Order[] | Promise<Order[]>;
    usersByRole(role: string): User[] | Promise<User[]>;
    allUsers(): User[] | Promise<User[]>;
}

export interface IMutation {
    createOrder(): Order | Promise<Order>;
    createUser(args: UserDto): User | Promise<User>;
}

export interface Product {
    id: string;
    name: string;
    createDateTime: string;
}

export interface Order {
    id: string;
    createDateTime: string;
    products?: Product[];
}

export interface User {
    id: string;
    name: string;
    lastName: string;
    createDateTime: string;
}
