declare namespace Paths {
    namespace CreateGroup {
        export interface RequestBody {
            name: string;
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                name: string;
            }
        }
    }
    namespace CreateUser {
        export interface RequestBody {
            /**
             * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
             */
            username: string; // ^[\w.@+-]+$
            email?: string; // email
            /**
             * The groups this user belongs to. A user will get all permissions granted to each of their groups.
             */
            groups?: string[];
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                email?: string; // email
                /**
                 * The groups this user belongs to. A user will get all permissions granted to each of their groups.
                 */
                groups?: string[];
            }
        }
    }
    namespace DestroyGroup {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                name: string;
            }
        }
    }
    namespace DestroyUser {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                email?: string; // email
                /**
                 * The groups this user belongs to. A user will get all permissions granted to each of their groups.
                 */
                groups?: string[];
            }
        }
    }
    namespace ListGroups {
        namespace Parameters {
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                name: string;
            }
        }
    }
    namespace ListUsers {
        namespace Parameters {
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                email?: string; // email
                /**
                 * The groups this user belongs to. A user will get all permissions granted to each of their groups.
                 */
                groups?: string[];
            }
        }
    }
    namespace PartialUpdateGroup {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface RequestBody {
            name?: string;
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                name: string;
            }
        }
    }
    namespace PartialUpdateUser {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface RequestBody {
            /**
             * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
             */
            username?: string; // ^[\w.@+-]+$
            email?: string; // email
            /**
             * The groups this user belongs to. A user will get all permissions granted to each of their groups.
             */
            groups?: string[];
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                email?: string; // email
                /**
                 * The groups this user belongs to. A user will get all permissions granted to each of their groups.
                 */
                groups?: string[];
            }
        }
    }
    namespace RetrieveGroup {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                name: string;
            }
        }
    }
    namespace RetrieveUser {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                email?: string; // email
                /**
                 * The groups this user belongs to. A user will get all permissions granted to each of their groups.
                 */
                groups?: string[];
            }
        }
    }
    namespace UpdateGroup {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface RequestBody {
            name: string;
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                name: string;
            }
        }
    }
    namespace UpdateUser {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface RequestBody {
            /**
             * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
             */
            username: string; // ^[\w.@+-]+$
            email?: string; // email
            /**
             * The groups this user belongs to. A user will get all permissions granted to each of their groups.
             */
            groups?: string[];
        }
        namespace Responses {
            export interface $200 {
                readonly url?: string;
                /**
                 * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                 */
                username: string; // ^[\w.@+-]+$
                email?: string; // email
                /**
                 * The groups this user belongs to. A user will get all permissions granted to each of their groups.
                 */
                groups?: string[];
            }
        }
    }
}
