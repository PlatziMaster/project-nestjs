
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
    orders(): Order[] | Promise<Order[]>;
    products(): Product[] | Promise<Product[]>;
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
    products: Product[];
    user: User;
}

export interface User {
    id: string;
    name: string;
    lastName: string;
    createDateTime: string;
}
