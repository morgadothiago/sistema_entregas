
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Adress
 * 
 */
export type Adress = $Result.DefaultSelection<Prisma.$AdressPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model VehicleType
 * 
 */
export type VehicleType = $Result.DefaultSelection<Prisma.$VehicleTypePayload>
/**
 * Model ProfitMargin
 * 
 */
export type ProfitMargin = $Result.DefaultSelection<Prisma.$ProfitMarginPayload>
/**
 * Model Balance
 * 
 */
export type Balance = $Result.DefaultSelection<Prisma.$BalancePayload>
/**
 * Model Extract
 * 
 */
export type Extract = $Result.DefaultSelection<Prisma.$ExtractPayload>
/**
 * Model DeliveryMan
 * 
 */
export type DeliveryMan = $Result.DefaultSelection<Prisma.$DeliveryManPayload>
/**
 * Model Localization
 * 
 */
export type Localization = $Result.DefaultSelection<Prisma.$LocalizationPayload>
/**
 * Model Delivery
 * 
 */
export type Delivery = $Result.DefaultSelection<Prisma.$DeliveryPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BLOCKED: 'BLOCKED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const ExtractType: {
  DEPOSIT: 'DEPOSIT',
  WITHDRAW: 'WITHDRAW'
};

export type ExtractType = (typeof ExtractType)[keyof typeof ExtractType]


export const Role: {
  ADMIN: 'ADMIN',
  DELIVERY: 'DELIVERY',
  COMPANY: 'COMPANY'
};

export type Role = (typeof Role)[keyof typeof Role]


export const DeliveryStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus]


export const OrderStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type ExtractType = $Enums.ExtractType

export const ExtractType: typeof $Enums.ExtractType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type DeliveryStatus = $Enums.DeliveryStatus

export const DeliveryStatus: typeof $Enums.DeliveryStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adress`: Exposes CRUD operations for the **Adress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adresses
    * const adresses = await prisma.adress.findMany()
    * ```
    */
  get adress(): Prisma.AdressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleType`: Exposes CRUD operations for the **VehicleType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleTypes
    * const vehicleTypes = await prisma.vehicleType.findMany()
    * ```
    */
  get vehicleType(): Prisma.VehicleTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profitMargin`: Exposes CRUD operations for the **ProfitMargin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfitMargins
    * const profitMargins = await prisma.profitMargin.findMany()
    * ```
    */
  get profitMargin(): Prisma.ProfitMarginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balance`: Exposes CRUD operations for the **Balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.BalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.extract`: Exposes CRUD operations for the **Extract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Extracts
    * const extracts = await prisma.extract.findMany()
    * ```
    */
  get extract(): Prisma.ExtractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryMan`: Exposes CRUD operations for the **DeliveryMan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryMen
    * const deliveryMen = await prisma.deliveryMan.findMany()
    * ```
    */
  get deliveryMan(): Prisma.DeliveryManDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localization`: Exposes CRUD operations for the **Localization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localizations
    * const localizations = await prisma.localization.findMany()
    * ```
    */
  get localization(): Prisma.LocalizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **Delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.DeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Adress: 'Adress',
    Company: 'Company',
    VehicleType: 'VehicleType',
    ProfitMargin: 'ProfitMargin',
    Balance: 'Balance',
    Extract: 'Extract',
    DeliveryMan: 'DeliveryMan',
    Localization: 'Localization',
    Delivery: 'Delivery',
    Address: 'Address',
    Client: 'Client'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "adress" | "company" | "vehicleType" | "profitMargin" | "balance" | "extract" | "deliveryMan" | "localization" | "delivery" | "address" | "client"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Adress: {
        payload: Prisma.$AdressPayload<ExtArgs>
        fields: Prisma.AdressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          findFirst: {
            args: Prisma.AdressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          findMany: {
            args: Prisma.AdressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>[]
          }
          create: {
            args: Prisma.AdressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          createMany: {
            args: Prisma.AdressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>[]
          }
          delete: {
            args: Prisma.AdressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          update: {
            args: Prisma.AdressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          deleteMany: {
            args: Prisma.AdressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>[]
          }
          upsert: {
            args: Prisma.AdressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressPayload>
          }
          aggregate: {
            args: Prisma.AdressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdress>
          }
          groupBy: {
            args: Prisma.AdressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdressCountArgs<ExtArgs>
            result: $Utils.Optional<AdressCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      VehicleType: {
        payload: Prisma.$VehicleTypePayload<ExtArgs>
        fields: Prisma.VehicleTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          findFirst: {
            args: Prisma.VehicleTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          findMany: {
            args: Prisma.VehicleTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>[]
          }
          create: {
            args: Prisma.VehicleTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          createMany: {
            args: Prisma.VehicleTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>[]
          }
          delete: {
            args: Prisma.VehicleTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          update: {
            args: Prisma.VehicleTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          deleteMany: {
            args: Prisma.VehicleTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>[]
          }
          upsert: {
            args: Prisma.VehicleTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          aggregate: {
            args: Prisma.VehicleTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleType>
          }
          groupBy: {
            args: Prisma.VehicleTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleTypeCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleTypeCountAggregateOutputType> | number
          }
        }
      }
      ProfitMargin: {
        payload: Prisma.$ProfitMarginPayload<ExtArgs>
        fields: Prisma.ProfitMarginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfitMarginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitMarginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfitMarginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitMarginPayload>
          }
          findFirst: {
            args: Prisma.ProfitMarginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitMarginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfitMarginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitMarginPayload>
          }
          findMany: {
            args: Prisma.ProfitMarginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitMarginPayload>[]
          }
          create: {
            args: Prisma.ProfitMarginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitMarginPayload>
          }
          createMany: {
            args: Prisma.ProfitMarginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfitMarginCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitMarginPayload>[]
          }
          delete: {
            args: Prisma.ProfitMarginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitMarginPayload>
          }
          update: {
            args: Prisma.ProfitMarginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitMarginPayload>
          }
          deleteMany: {
            args: Prisma.ProfitMarginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfitMarginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfitMarginUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitMarginPayload>[]
          }
          upsert: {
            args: Prisma.ProfitMarginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitMarginPayload>
          }
          aggregate: {
            args: Prisma.ProfitMarginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfitMargin>
          }
          groupBy: {
            args: Prisma.ProfitMarginGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfitMarginGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfitMarginCountArgs<ExtArgs>
            result: $Utils.Optional<ProfitMarginCountAggregateOutputType> | number
          }
        }
      }
      Balance: {
        payload: Prisma.$BalancePayload<ExtArgs>
        fields: Prisma.BalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findFirst: {
            args: Prisma.BalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findMany: {
            args: Prisma.BalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          create: {
            args: Prisma.BalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          createMany: {
            args: Prisma.BalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          delete: {
            args: Prisma.BalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          update: {
            args: Prisma.BalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          deleteMany: {
            args: Prisma.BalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          upsert: {
            args: Prisma.BalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          aggregate: {
            args: Prisma.BalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalance>
          }
          groupBy: {
            args: Prisma.BalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceCountAggregateOutputType> | number
          }
        }
      }
      Extract: {
        payload: Prisma.$ExtractPayload<ExtArgs>
        fields: Prisma.ExtractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExtractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExtractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          findFirst: {
            args: Prisma.ExtractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExtractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          findMany: {
            args: Prisma.ExtractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>[]
          }
          create: {
            args: Prisma.ExtractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          createMany: {
            args: Prisma.ExtractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExtractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>[]
          }
          delete: {
            args: Prisma.ExtractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          update: {
            args: Prisma.ExtractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          deleteMany: {
            args: Prisma.ExtractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExtractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExtractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>[]
          }
          upsert: {
            args: Prisma.ExtractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExtractPayload>
          }
          aggregate: {
            args: Prisma.ExtractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExtract>
          }
          groupBy: {
            args: Prisma.ExtractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExtractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExtractCountArgs<ExtArgs>
            result: $Utils.Optional<ExtractCountAggregateOutputType> | number
          }
        }
      }
      DeliveryMan: {
        payload: Prisma.$DeliveryManPayload<ExtArgs>
        fields: Prisma.DeliveryManFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryManFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryManPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryManFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryManPayload>
          }
          findFirst: {
            args: Prisma.DeliveryManFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryManPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryManFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryManPayload>
          }
          findMany: {
            args: Prisma.DeliveryManFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryManPayload>[]
          }
          create: {
            args: Prisma.DeliveryManCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryManPayload>
          }
          createMany: {
            args: Prisma.DeliveryManCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryManCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryManPayload>[]
          }
          delete: {
            args: Prisma.DeliveryManDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryManPayload>
          }
          update: {
            args: Prisma.DeliveryManUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryManPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryManDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryManUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryManUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryManPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryManUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryManPayload>
          }
          aggregate: {
            args: Prisma.DeliveryManAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryMan>
          }
          groupBy: {
            args: Prisma.DeliveryManGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryManGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryManCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryManCountAggregateOutputType> | number
          }
        }
      }
      Localization: {
        payload: Prisma.$LocalizationPayload<ExtArgs>
        fields: Prisma.LocalizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizationPayload>
          }
          findFirst: {
            args: Prisma.LocalizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizationPayload>
          }
          findMany: {
            args: Prisma.LocalizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizationPayload>[]
          }
          create: {
            args: Prisma.LocalizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizationPayload>
          }
          createMany: {
            args: Prisma.LocalizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizationPayload>[]
          }
          delete: {
            args: Prisma.LocalizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizationPayload>
          }
          update: {
            args: Prisma.LocalizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizationPayload>
          }
          deleteMany: {
            args: Prisma.LocalizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizationPayload>[]
          }
          upsert: {
            args: Prisma.LocalizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizationPayload>
          }
          aggregate: {
            args: Prisma.LocalizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalization>
          }
          groupBy: {
            args: Prisma.LocalizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalizationCountArgs<ExtArgs>
            result: $Utils.Optional<LocalizationCountAggregateOutputType> | number
          }
        }
      }
      Delivery: {
        payload: Prisma.$DeliveryPayload<ExtArgs>
        fields: Prisma.DeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findFirst: {
            args: Prisma.DeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findMany: {
            args: Prisma.DeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          create: {
            args: Prisma.DeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          createMany: {
            args: Prisma.DeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          delete: {
            args: Prisma.DeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          update: {
            args: Prisma.DeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.DeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    adress?: AdressOmit
    company?: CompanyOmit
    vehicleType?: VehicleTypeOmit
    profitMargin?: ProfitMarginOmit
    balance?: BalanceOmit
    extract?: ExtractOmit
    deliveryMan?: DeliveryManOmit
    localization?: LocalizationOmit
    delivery?: DeliveryOmit
    address?: AddressOmit
    client?: ClientOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Extract: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Extract?: boolean | UserCountOutputTypeCountExtractArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExtractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtractWhereInput
  }


  /**
   * Count Type AdressCountOutputType
   */

  export type AdressCountOutputType = {
    Company: number
  }

  export type AdressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | AdressCountOutputTypeCountCompanyArgs
  }

  // Custom InputTypes
  /**
   * AdressCountOutputType without action
   */
  export type AdressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdressCountOutputType
     */
    select?: AdressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdressCountOutputType without action
   */
  export type AdressCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }


  /**
   * Count Type BalanceCountOutputType
   */

  export type BalanceCountOutputType = {
    User: number
  }

  export type BalanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | BalanceCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * BalanceCountOutputType without action
   */
  export type BalanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceCountOutputType
     */
    select?: BalanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BalanceCountOutputType without action
   */
  export type BalanceCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DeliveryManCountOutputType
   */

  export type DeliveryManCountOutputType = {
    Delivery: number
  }

  export type DeliveryManCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Delivery?: boolean | DeliveryManCountOutputTypeCountDeliveryArgs
  }

  // Custom InputTypes
  /**
   * DeliveryManCountOutputType without action
   */
  export type DeliveryManCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryManCountOutputType
     */
    select?: DeliveryManCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeliveryManCountOutputType without action
   */
  export type DeliveryManCountOutputTypeCountDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }


  /**
   * Count Type DeliveryCountOutputType
   */

  export type DeliveryCountOutputType = {
    Localization: number
  }

  export type DeliveryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Localization?: boolean | DeliveryCountOutputTypeCountLocalizationArgs
  }

  // Custom InputTypes
  /**
   * DeliveryCountOutputType without action
   */
  export type DeliveryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryCountOutputType
     */
    select?: DeliveryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeliveryCountOutputType without action
   */
  export type DeliveryCountOutputTypeCountLocalizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizationWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    Client: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Client?: boolean | AddressCountOutputTypeCountClientArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    balanceId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    balanceId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    information: string | null
    createdAt: Date | null
    updatedAt: Date | null
    balanceId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    information: string | null
    createdAt: Date | null
    updatedAt: Date | null
    balanceId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    status: number
    information: number
    createdAt: number
    updatedAt: number
    balanceId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    balanceId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    balanceId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    status?: true
    information?: true
    createdAt?: true
    updatedAt?: true
    balanceId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    status?: true
    information?: true
    createdAt?: true
    updatedAt?: true
    balanceId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    status?: true
    information?: true
    createdAt?: true
    updatedAt?: true
    balanceId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    status: $Enums.UserStatus
    information: string
    createdAt: Date
    updatedAt: Date
    balanceId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    information?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balanceId?: boolean
    Balance?: boolean | BalanceDefaultArgs<ExtArgs>
    Extract?: boolean | User$ExtractArgs<ExtArgs>
    DeliveryMan?: boolean | User$DeliveryManArgs<ExtArgs>
    Company?: boolean | User$CompanyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    information?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balanceId?: boolean
    Balance?: boolean | BalanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    information?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balanceId?: boolean
    Balance?: boolean | BalanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    information?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    balanceId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "status" | "information" | "createdAt" | "updatedAt" | "balanceId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Balance?: boolean | BalanceDefaultArgs<ExtArgs>
    Extract?: boolean | User$ExtractArgs<ExtArgs>
    DeliveryMan?: boolean | User$DeliveryManArgs<ExtArgs>
    Company?: boolean | User$CompanyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Balance?: boolean | BalanceDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Balance?: boolean | BalanceDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Balance: Prisma.$BalancePayload<ExtArgs>
      Extract: Prisma.$ExtractPayload<ExtArgs>[]
      DeliveryMan: Prisma.$DeliveryManPayload<ExtArgs> | null
      Company: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      status: $Enums.UserStatus
      information: string
      createdAt: Date
      updatedAt: Date
      balanceId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Balance<T extends BalanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BalanceDefaultArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Extract<T extends User$ExtractArgs<ExtArgs> = {}>(args?: Subset<T, User$ExtractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DeliveryMan<T extends User$DeliveryManArgs<ExtArgs> = {}>(args?: Subset<T, User$DeliveryManArgs<ExtArgs>>): Prisma__DeliveryManClient<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Company<T extends User$CompanyArgs<ExtArgs> = {}>(args?: Subset<T, User$CompanyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly information: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly balanceId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Extract
   */
  export type User$ExtractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    where?: ExtractWhereInput
    orderBy?: ExtractOrderByWithRelationInput | ExtractOrderByWithRelationInput[]
    cursor?: ExtractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExtractScalarFieldEnum | ExtractScalarFieldEnum[]
  }

  /**
   * User.DeliveryMan
   */
  export type User$DeliveryManArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
    where?: DeliveryManWhereInput
  }

  /**
   * User.Company
   */
  export type User$CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Adress
   */

  export type AggregateAdress = {
    _count: AdressCountAggregateOutputType | null
    _avg: AdressAvgAggregateOutputType | null
    _sum: AdressSumAggregateOutputType | null
    _min: AdressMinAggregateOutputType | null
    _max: AdressMaxAggregateOutputType | null
  }

  export type AdressAvgAggregateOutputType = {
    id: number | null
  }

  export type AdressSumAggregateOutputType = {
    id: number | null
  }

  export type AdressMinAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    complement: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdressMaxAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    complement: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdressCountAggregateOutputType = {
    id: number
    street: number
    number: number
    city: number
    state: number
    zipCode: number
    country: number
    complement: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdressAvgAggregateInputType = {
    id?: true
  }

  export type AdressSumAggregateInputType = {
    id?: true
  }

  export type AdressMinAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    complement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdressMaxAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    complement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdressCountAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    complement?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adress to aggregate.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adresses
    **/
    _count?: true | AdressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdressMaxAggregateInputType
  }

  export type GetAdressAggregateType<T extends AdressAggregateArgs> = {
        [P in keyof T & keyof AggregateAdress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdress[P]>
      : GetScalarType<T[P], AggregateAdress[P]>
  }




  export type AdressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdressWhereInput
    orderBy?: AdressOrderByWithAggregationInput | AdressOrderByWithAggregationInput[]
    by: AdressScalarFieldEnum[] | AdressScalarFieldEnum
    having?: AdressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdressCountAggregateInputType | true
    _avg?: AdressAvgAggregateInputType
    _sum?: AdressSumAggregateInputType
    _min?: AdressMinAggregateInputType
    _max?: AdressMaxAggregateInputType
  }

  export type AdressGroupByOutputType = {
    id: number
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    complement: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdressCountAggregateOutputType | null
    _avg: AdressAvgAggregateOutputType | null
    _sum: AdressSumAggregateOutputType | null
    _min: AdressMinAggregateOutputType | null
    _max: AdressMaxAggregateOutputType | null
  }

  type GetAdressGroupByPayload<T extends AdressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdressGroupByOutputType[P]>
            : GetScalarType<T[P], AdressGroupByOutputType[P]>
        }
      >
    >


  export type AdressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Company?: boolean | Adress$CompanyArgs<ExtArgs>
    _count?: boolean | AdressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adress"]>

  export type AdressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adress"]>

  export type AdressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adress"]>

  export type AdressSelectScalar = {
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street" | "number" | "city" | "state" | "zipCode" | "country" | "complement" | "createdAt" | "updatedAt", ExtArgs["result"]["adress"]>
  export type AdressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | Adress$CompanyArgs<ExtArgs>
    _count?: boolean | AdressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adress"
    objects: {
      Company: Prisma.$CompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      street: string
      number: string
      city: string
      state: string
      zipCode: string
      country: string
      complement: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adress"]>
    composites: {}
  }

  type AdressGetPayload<S extends boolean | null | undefined | AdressDefaultArgs> = $Result.GetResult<Prisma.$AdressPayload, S>

  type AdressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdressCountAggregateInputType | true
    }

  export interface AdressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adress'], meta: { name: 'Adress' } }
    /**
     * Find zero or one Adress that matches the filter.
     * @param {AdressFindUniqueArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdressFindUniqueArgs>(args: SelectSubset<T, AdressFindUniqueArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdressFindUniqueOrThrowArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdressFindUniqueOrThrowArgs>(args: SelectSubset<T, AdressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindFirstArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdressFindFirstArgs>(args?: SelectSubset<T, AdressFindFirstArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindFirstOrThrowArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdressFindFirstOrThrowArgs>(args?: SelectSubset<T, AdressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adresses
     * const adresses = await prisma.adress.findMany()
     * 
     * // Get first 10 Adresses
     * const adresses = await prisma.adress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adressWithIdOnly = await prisma.adress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdressFindManyArgs>(args?: SelectSubset<T, AdressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adress.
     * @param {AdressCreateArgs} args - Arguments to create a Adress.
     * @example
     * // Create one Adress
     * const Adress = await prisma.adress.create({
     *   data: {
     *     // ... data to create a Adress
     *   }
     * })
     * 
     */
    create<T extends AdressCreateArgs>(args: SelectSubset<T, AdressCreateArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adresses.
     * @param {AdressCreateManyArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adress = await prisma.adress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdressCreateManyArgs>(args?: SelectSubset<T, AdressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adresses and returns the data saved in the database.
     * @param {AdressCreateManyAndReturnArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adress = await prisma.adress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adresses and only return the `id`
     * const adressWithIdOnly = await prisma.adress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdressCreateManyAndReturnArgs>(args?: SelectSubset<T, AdressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adress.
     * @param {AdressDeleteArgs} args - Arguments to delete one Adress.
     * @example
     * // Delete one Adress
     * const Adress = await prisma.adress.delete({
     *   where: {
     *     // ... filter to delete one Adress
     *   }
     * })
     * 
     */
    delete<T extends AdressDeleteArgs>(args: SelectSubset<T, AdressDeleteArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adress.
     * @param {AdressUpdateArgs} args - Arguments to update one Adress.
     * @example
     * // Update one Adress
     * const adress = await prisma.adress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdressUpdateArgs>(args: SelectSubset<T, AdressUpdateArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adresses.
     * @param {AdressDeleteManyArgs} args - Arguments to filter Adresses to delete.
     * @example
     * // Delete a few Adresses
     * const { count } = await prisma.adress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdressDeleteManyArgs>(args?: SelectSubset<T, AdressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adresses
     * const adress = await prisma.adress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdressUpdateManyArgs>(args: SelectSubset<T, AdressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses and returns the data updated in the database.
     * @param {AdressUpdateManyAndReturnArgs} args - Arguments to update many Adresses.
     * @example
     * // Update many Adresses
     * const adress = await prisma.adress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adresses and only return the `id`
     * const adressWithIdOnly = await prisma.adress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdressUpdateManyAndReturnArgs>(args: SelectSubset<T, AdressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adress.
     * @param {AdressUpsertArgs} args - Arguments to update or create a Adress.
     * @example
     * // Update or create a Adress
     * const adress = await prisma.adress.upsert({
     *   create: {
     *     // ... data to create a Adress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adress we want to update
     *   }
     * })
     */
    upsert<T extends AdressUpsertArgs>(args: SelectSubset<T, AdressUpsertArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressCountArgs} args - Arguments to filter Adresses to count.
     * @example
     * // Count the number of Adresses
     * const count = await prisma.adress.count({
     *   where: {
     *     // ... the filter for the Adresses we want to count
     *   }
     * })
    **/
    count<T extends AdressCountArgs>(
      args?: Subset<T, AdressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdressAggregateArgs>(args: Subset<T, AdressAggregateArgs>): Prisma.PrismaPromise<GetAdressAggregateType<T>>

    /**
     * Group by Adress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdressGroupByArgs['orderBy'] }
        : { orderBy?: AdressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adress model
   */
  readonly fields: AdressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Company<T extends Adress$CompanyArgs<ExtArgs> = {}>(args?: Subset<T, Adress$CompanyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Adress model
   */
  interface AdressFieldRefs {
    readonly id: FieldRef<"Adress", 'Int'>
    readonly street: FieldRef<"Adress", 'String'>
    readonly number: FieldRef<"Adress", 'String'>
    readonly city: FieldRef<"Adress", 'String'>
    readonly state: FieldRef<"Adress", 'String'>
    readonly zipCode: FieldRef<"Adress", 'String'>
    readonly country: FieldRef<"Adress", 'String'>
    readonly complement: FieldRef<"Adress", 'String'>
    readonly createdAt: FieldRef<"Adress", 'DateTime'>
    readonly updatedAt: FieldRef<"Adress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Adress findUnique
   */
  export type AdressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress findUniqueOrThrow
   */
  export type AdressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress findFirst
   */
  export type AdressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     */
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress findFirstOrThrow
   */
  export type AdressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adress to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     */
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress findMany
   */
  export type AdressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter, which Adresses to fetch.
     */
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdressOrderByWithRelationInput | AdressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adresses.
     */
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    distinct?: AdressScalarFieldEnum | AdressScalarFieldEnum[]
  }

  /**
   * Adress create
   */
  export type AdressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The data needed to create a Adress.
     */
    data: XOR<AdressCreateInput, AdressUncheckedCreateInput>
  }

  /**
   * Adress createMany
   */
  export type AdressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adresses.
     */
    data: AdressCreateManyInput | AdressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adress createManyAndReturn
   */
  export type AdressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * The data used to create many Adresses.
     */
    data: AdressCreateManyInput | AdressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adress update
   */
  export type AdressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The data needed to update a Adress.
     */
    data: XOR<AdressUpdateInput, AdressUncheckedUpdateInput>
    /**
     * Choose, which Adress to update.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress updateMany
   */
  export type AdressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adresses.
     */
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyInput>
    /**
     * Filter which Adresses to update
     */
    where?: AdressWhereInput
    /**
     * Limit how many Adresses to update.
     */
    limit?: number
  }

  /**
   * Adress updateManyAndReturn
   */
  export type AdressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * The data used to update Adresses.
     */
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyInput>
    /**
     * Filter which Adresses to update
     */
    where?: AdressWhereInput
    /**
     * Limit how many Adresses to update.
     */
    limit?: number
  }

  /**
   * Adress upsert
   */
  export type AdressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * The filter to search for the Adress to update in case it exists.
     */
    where: AdressWhereUniqueInput
    /**
     * In case the Adress found by the `where` argument doesn't exist, create a new Adress with this data.
     */
    create: XOR<AdressCreateInput, AdressUncheckedCreateInput>
    /**
     * In case the Adress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdressUpdateInput, AdressUncheckedUpdateInput>
  }

  /**
   * Adress delete
   */
  export type AdressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
    /**
     * Filter which Adress to delete.
     */
    where: AdressWhereUniqueInput
  }

  /**
   * Adress deleteMany
   */
  export type AdressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adresses to delete
     */
    where?: AdressWhereInput
    /**
     * Limit how many Adresses to delete.
     */
    limit?: number
  }

  /**
   * Adress.Company
   */
  export type Adress$CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Adress without action
   */
  export type AdressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adress
     */
    select?: AdressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adress
     */
    omit?: AdressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdressInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    idAddress: number | null
    idUser: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
    idAddress: number | null
    idUser: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    cnpj: string | null
    idAddress: number | null
    idUser: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    cnpj: string | null
    idAddress: number | null
    idUser: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    cnpj: number
    idAddress: number
    idUser: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    idAddress?: true
    idUser?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    idAddress?: true
    idUser?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    cnpj?: true
    idAddress?: true
    idUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    cnpj?: true
    idAddress?: true
    idUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    cnpj?: true
    idAddress?: true
    idUser?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    phone: string
    cnpj: string
    idAddress: number
    idUser: number
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    cnpj?: boolean
    idAddress?: boolean
    idUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Adress?: boolean | AdressDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    cnpj?: boolean
    idAddress?: boolean
    idUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Adress?: boolean | AdressDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    cnpj?: boolean
    idAddress?: boolean
    idUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Adress?: boolean | AdressDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    cnpj?: boolean
    idAddress?: boolean
    idUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "cnpj" | "idAddress" | "idUser" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adress?: boolean | AdressDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adress?: boolean | AdressDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adress?: boolean | AdressDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      Adress: Prisma.$AdressPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      cnpj: string
      idAddress: number
      idUser: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Adress<T extends AdressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdressDefaultArgs<ExtArgs>>): Prisma__AdressClient<$Result.GetResult<Prisma.$AdressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly cnpj: FieldRef<"Company", 'String'>
    readonly idAddress: FieldRef<"Company", 'Int'>
    readonly idUser: FieldRef<"Company", 'Int'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model VehicleType
   */

  export type AggregateVehicleType = {
    _count: VehicleTypeCountAggregateOutputType | null
    _avg: VehicleTypeAvgAggregateOutputType | null
    _sum: VehicleTypeSumAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  export type VehicleTypeAvgAggregateOutputType = {
    id: number | null
    pricePerKm: number | null
  }

  export type VehicleTypeSumAggregateOutputType = {
    id: number | null
    pricePerKm: number | null
  }

  export type VehicleTypeMinAggregateOutputType = {
    id: number | null
    type: string | null
    pricePerKm: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleTypeMaxAggregateOutputType = {
    id: number | null
    type: string | null
    pricePerKm: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleTypeCountAggregateOutputType = {
    id: number
    type: number
    pricePerKm: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleTypeAvgAggregateInputType = {
    id?: true
    pricePerKm?: true
  }

  export type VehicleTypeSumAggregateInputType = {
    id?: true
    pricePerKm?: true
  }

  export type VehicleTypeMinAggregateInputType = {
    id?: true
    type?: true
    pricePerKm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleTypeMaxAggregateInputType = {
    id?: true
    type?: true
    pricePerKm?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleTypeCountAggregateInputType = {
    id?: true
    type?: true
    pricePerKm?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleType to aggregate.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleTypes
    **/
    _count?: true | VehicleTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleTypeMaxAggregateInputType
  }

  export type GetVehicleTypeAggregateType<T extends VehicleTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleType[P]>
      : GetScalarType<T[P], AggregateVehicleType[P]>
  }




  export type VehicleTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleTypeWhereInput
    orderBy?: VehicleTypeOrderByWithAggregationInput | VehicleTypeOrderByWithAggregationInput[]
    by: VehicleTypeScalarFieldEnum[] | VehicleTypeScalarFieldEnum
    having?: VehicleTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleTypeCountAggregateInputType | true
    _avg?: VehicleTypeAvgAggregateInputType
    _sum?: VehicleTypeSumAggregateInputType
    _min?: VehicleTypeMinAggregateInputType
    _max?: VehicleTypeMaxAggregateInputType
  }

  export type VehicleTypeGroupByOutputType = {
    id: number
    type: string
    pricePerKm: number
    createdAt: Date
    updatedAt: Date
    _count: VehicleTypeCountAggregateOutputType | null
    _avg: VehicleTypeAvgAggregateOutputType | null
    _sum: VehicleTypeSumAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  type GetVehicleTypeGroupByPayload<T extends VehicleTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
        }
      >
    >


  export type VehicleTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    pricePerKm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicleType"]>

  export type VehicleTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    pricePerKm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicleType"]>

  export type VehicleTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    pricePerKm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicleType"]>

  export type VehicleTypeSelectScalar = {
    id?: boolean
    type?: boolean
    pricePerKm?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "pricePerKm" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicleType"]>

  export type $VehicleTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      pricePerKm: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicleType"]>
    composites: {}
  }

  type VehicleTypeGetPayload<S extends boolean | null | undefined | VehicleTypeDefaultArgs> = $Result.GetResult<Prisma.$VehicleTypePayload, S>

  type VehicleTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleTypeCountAggregateInputType | true
    }

  export interface VehicleTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleType'], meta: { name: 'VehicleType' } }
    /**
     * Find zero or one VehicleType that matches the filter.
     * @param {VehicleTypeFindUniqueArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleTypeFindUniqueArgs>(args: SelectSubset<T, VehicleTypeFindUniqueArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleTypeFindUniqueOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleTypeFindFirstArgs>(args?: SelectSubset<T, VehicleTypeFindFirstArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany()
     * 
     * // Get first 10 VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleTypeWithIdOnly = await prisma.vehicleType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleTypeFindManyArgs>(args?: SelectSubset<T, VehicleTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleType.
     * @param {VehicleTypeCreateArgs} args - Arguments to create a VehicleType.
     * @example
     * // Create one VehicleType
     * const VehicleType = await prisma.vehicleType.create({
     *   data: {
     *     // ... data to create a VehicleType
     *   }
     * })
     * 
     */
    create<T extends VehicleTypeCreateArgs>(args: SelectSubset<T, VehicleTypeCreateArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleTypes.
     * @param {VehicleTypeCreateManyArgs} args - Arguments to create many VehicleTypes.
     * @example
     * // Create many VehicleTypes
     * const vehicleType = await prisma.vehicleType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleTypeCreateManyArgs>(args?: SelectSubset<T, VehicleTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleTypes and returns the data saved in the database.
     * @param {VehicleTypeCreateManyAndReturnArgs} args - Arguments to create many VehicleTypes.
     * @example
     * // Create many VehicleTypes
     * const vehicleType = await prisma.vehicleType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleTypes and only return the `id`
     * const vehicleTypeWithIdOnly = await prisma.vehicleType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleType.
     * @param {VehicleTypeDeleteArgs} args - Arguments to delete one VehicleType.
     * @example
     * // Delete one VehicleType
     * const VehicleType = await prisma.vehicleType.delete({
     *   where: {
     *     // ... filter to delete one VehicleType
     *   }
     * })
     * 
     */
    delete<T extends VehicleTypeDeleteArgs>(args: SelectSubset<T, VehicleTypeDeleteArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleType.
     * @param {VehicleTypeUpdateArgs} args - Arguments to update one VehicleType.
     * @example
     * // Update one VehicleType
     * const vehicleType = await prisma.vehicleType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleTypeUpdateArgs>(args: SelectSubset<T, VehicleTypeUpdateArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleTypes.
     * @param {VehicleTypeDeleteManyArgs} args - Arguments to filter VehicleTypes to delete.
     * @example
     * // Delete a few VehicleTypes
     * const { count } = await prisma.vehicleType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleTypeDeleteManyArgs>(args?: SelectSubset<T, VehicleTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleTypes
     * const vehicleType = await prisma.vehicleType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleTypeUpdateManyArgs>(args: SelectSubset<T, VehicleTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleTypes and returns the data updated in the database.
     * @param {VehicleTypeUpdateManyAndReturnArgs} args - Arguments to update many VehicleTypes.
     * @example
     * // Update many VehicleTypes
     * const vehicleType = await prisma.vehicleType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleTypes and only return the `id`
     * const vehicleTypeWithIdOnly = await prisma.vehicleType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleType.
     * @param {VehicleTypeUpsertArgs} args - Arguments to update or create a VehicleType.
     * @example
     * // Update or create a VehicleType
     * const vehicleType = await prisma.vehicleType.upsert({
     *   create: {
     *     // ... data to create a VehicleType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleType we want to update
     *   }
     * })
     */
    upsert<T extends VehicleTypeUpsertArgs>(args: SelectSubset<T, VehicleTypeUpsertArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeCountArgs} args - Arguments to filter VehicleTypes to count.
     * @example
     * // Count the number of VehicleTypes
     * const count = await prisma.vehicleType.count({
     *   where: {
     *     // ... the filter for the VehicleTypes we want to count
     *   }
     * })
    **/
    count<T extends VehicleTypeCountArgs>(
      args?: Subset<T, VehicleTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleTypeAggregateArgs>(args: Subset<T, VehicleTypeAggregateArgs>): Prisma.PrismaPromise<GetVehicleTypeAggregateType<T>>

    /**
     * Group by VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleTypeGroupByArgs['orderBy'] }
        : { orderBy?: VehicleTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleType model
   */
  readonly fields: VehicleTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VehicleType model
   */
  interface VehicleTypeFieldRefs {
    readonly id: FieldRef<"VehicleType", 'Int'>
    readonly type: FieldRef<"VehicleType", 'String'>
    readonly pricePerKm: FieldRef<"VehicleType", 'Float'>
    readonly createdAt: FieldRef<"VehicleType", 'DateTime'>
    readonly updatedAt: FieldRef<"VehicleType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleType findUnique
   */
  export type VehicleTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType findUniqueOrThrow
   */
  export type VehicleTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType findFirst
   */
  export type VehicleTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     */
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType findFirstOrThrow
   */
  export type VehicleTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     */
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType findMany
   */
  export type VehicleTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Filter, which VehicleTypes to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType create
   */
  export type VehicleTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * The data needed to create a VehicleType.
     */
    data: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
  }

  /**
   * VehicleType createMany
   */
  export type VehicleTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleTypes.
     */
    data: VehicleTypeCreateManyInput | VehicleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleType createManyAndReturn
   */
  export type VehicleTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleTypes.
     */
    data: VehicleTypeCreateManyInput | VehicleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleType update
   */
  export type VehicleTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * The data needed to update a VehicleType.
     */
    data: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
    /**
     * Choose, which VehicleType to update.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType updateMany
   */
  export type VehicleTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleTypes.
     */
    data: XOR<VehicleTypeUpdateManyMutationInput, VehicleTypeUncheckedUpdateManyInput>
    /**
     * Filter which VehicleTypes to update
     */
    where?: VehicleTypeWhereInput
    /**
     * Limit how many VehicleTypes to update.
     */
    limit?: number
  }

  /**
   * VehicleType updateManyAndReturn
   */
  export type VehicleTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * The data used to update VehicleTypes.
     */
    data: XOR<VehicleTypeUpdateManyMutationInput, VehicleTypeUncheckedUpdateManyInput>
    /**
     * Filter which VehicleTypes to update
     */
    where?: VehicleTypeWhereInput
    /**
     * Limit how many VehicleTypes to update.
     */
    limit?: number
  }

  /**
   * VehicleType upsert
   */
  export type VehicleTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * The filter to search for the VehicleType to update in case it exists.
     */
    where: VehicleTypeWhereUniqueInput
    /**
     * In case the VehicleType found by the `where` argument doesn't exist, create a new VehicleType with this data.
     */
    create: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
    /**
     * In case the VehicleType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
  }

  /**
   * VehicleType delete
   */
  export type VehicleTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Filter which VehicleType to delete.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType deleteMany
   */
  export type VehicleTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleTypes to delete
     */
    where?: VehicleTypeWhereInput
    /**
     * Limit how many VehicleTypes to delete.
     */
    limit?: number
  }

  /**
   * VehicleType without action
   */
  export type VehicleTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
  }


  /**
   * Model ProfitMargin
   */

  export type AggregateProfitMargin = {
    _count: ProfitMarginCountAggregateOutputType | null
    _avg: ProfitMarginAvgAggregateOutputType | null
    _sum: ProfitMarginSumAggregateOutputType | null
    _min: ProfitMarginMinAggregateOutputType | null
    _max: ProfitMarginMaxAggregateOutputType | null
  }

  export type ProfitMarginAvgAggregateOutputType = {
    id: number | null
    percentage: number | null
  }

  export type ProfitMarginSumAggregateOutputType = {
    id: number | null
    percentage: number | null
  }

  export type ProfitMarginMinAggregateOutputType = {
    id: number | null
    percentage: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfitMarginMaxAggregateOutputType = {
    id: number | null
    percentage: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfitMarginCountAggregateOutputType = {
    id: number
    percentage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfitMarginAvgAggregateInputType = {
    id?: true
    percentage?: true
  }

  export type ProfitMarginSumAggregateInputType = {
    id?: true
    percentage?: true
  }

  export type ProfitMarginMinAggregateInputType = {
    id?: true
    percentage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfitMarginMaxAggregateInputType = {
    id?: true
    percentage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfitMarginCountAggregateInputType = {
    id?: true
    percentage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfitMarginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfitMargin to aggregate.
     */
    where?: ProfitMarginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitMargins to fetch.
     */
    orderBy?: ProfitMarginOrderByWithRelationInput | ProfitMarginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfitMarginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitMargins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitMargins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfitMargins
    **/
    _count?: true | ProfitMarginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfitMarginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfitMarginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfitMarginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfitMarginMaxAggregateInputType
  }

  export type GetProfitMarginAggregateType<T extends ProfitMarginAggregateArgs> = {
        [P in keyof T & keyof AggregateProfitMargin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfitMargin[P]>
      : GetScalarType<T[P], AggregateProfitMargin[P]>
  }




  export type ProfitMarginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfitMarginWhereInput
    orderBy?: ProfitMarginOrderByWithAggregationInput | ProfitMarginOrderByWithAggregationInput[]
    by: ProfitMarginScalarFieldEnum[] | ProfitMarginScalarFieldEnum
    having?: ProfitMarginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfitMarginCountAggregateInputType | true
    _avg?: ProfitMarginAvgAggregateInputType
    _sum?: ProfitMarginSumAggregateInputType
    _min?: ProfitMarginMinAggregateInputType
    _max?: ProfitMarginMaxAggregateInputType
  }

  export type ProfitMarginGroupByOutputType = {
    id: number
    percentage: number
    createdAt: Date
    updatedAt: Date
    _count: ProfitMarginCountAggregateOutputType | null
    _avg: ProfitMarginAvgAggregateOutputType | null
    _sum: ProfitMarginSumAggregateOutputType | null
    _min: ProfitMarginMinAggregateOutputType | null
    _max: ProfitMarginMaxAggregateOutputType | null
  }

  type GetProfitMarginGroupByPayload<T extends ProfitMarginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfitMarginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfitMarginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfitMarginGroupByOutputType[P]>
            : GetScalarType<T[P], ProfitMarginGroupByOutputType[P]>
        }
      >
    >


  export type ProfitMarginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profitMargin"]>

  export type ProfitMarginSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profitMargin"]>

  export type ProfitMarginSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profitMargin"]>

  export type ProfitMarginSelectScalar = {
    id?: boolean
    percentage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfitMarginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "percentage" | "createdAt" | "updatedAt", ExtArgs["result"]["profitMargin"]>

  export type $ProfitMarginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfitMargin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      percentage: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profitMargin"]>
    composites: {}
  }

  type ProfitMarginGetPayload<S extends boolean | null | undefined | ProfitMarginDefaultArgs> = $Result.GetResult<Prisma.$ProfitMarginPayload, S>

  type ProfitMarginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfitMarginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfitMarginCountAggregateInputType | true
    }

  export interface ProfitMarginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfitMargin'], meta: { name: 'ProfitMargin' } }
    /**
     * Find zero or one ProfitMargin that matches the filter.
     * @param {ProfitMarginFindUniqueArgs} args - Arguments to find a ProfitMargin
     * @example
     * // Get one ProfitMargin
     * const profitMargin = await prisma.profitMargin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfitMarginFindUniqueArgs>(args: SelectSubset<T, ProfitMarginFindUniqueArgs<ExtArgs>>): Prisma__ProfitMarginClient<$Result.GetResult<Prisma.$ProfitMarginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfitMargin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfitMarginFindUniqueOrThrowArgs} args - Arguments to find a ProfitMargin
     * @example
     * // Get one ProfitMargin
     * const profitMargin = await prisma.profitMargin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfitMarginFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfitMarginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfitMarginClient<$Result.GetResult<Prisma.$ProfitMarginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfitMargin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitMarginFindFirstArgs} args - Arguments to find a ProfitMargin
     * @example
     * // Get one ProfitMargin
     * const profitMargin = await prisma.profitMargin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfitMarginFindFirstArgs>(args?: SelectSubset<T, ProfitMarginFindFirstArgs<ExtArgs>>): Prisma__ProfitMarginClient<$Result.GetResult<Prisma.$ProfitMarginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfitMargin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitMarginFindFirstOrThrowArgs} args - Arguments to find a ProfitMargin
     * @example
     * // Get one ProfitMargin
     * const profitMargin = await prisma.profitMargin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfitMarginFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfitMarginFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfitMarginClient<$Result.GetResult<Prisma.$ProfitMarginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfitMargins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitMarginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfitMargins
     * const profitMargins = await prisma.profitMargin.findMany()
     * 
     * // Get first 10 ProfitMargins
     * const profitMargins = await prisma.profitMargin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profitMarginWithIdOnly = await prisma.profitMargin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfitMarginFindManyArgs>(args?: SelectSubset<T, ProfitMarginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfitMarginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfitMargin.
     * @param {ProfitMarginCreateArgs} args - Arguments to create a ProfitMargin.
     * @example
     * // Create one ProfitMargin
     * const ProfitMargin = await prisma.profitMargin.create({
     *   data: {
     *     // ... data to create a ProfitMargin
     *   }
     * })
     * 
     */
    create<T extends ProfitMarginCreateArgs>(args: SelectSubset<T, ProfitMarginCreateArgs<ExtArgs>>): Prisma__ProfitMarginClient<$Result.GetResult<Prisma.$ProfitMarginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfitMargins.
     * @param {ProfitMarginCreateManyArgs} args - Arguments to create many ProfitMargins.
     * @example
     * // Create many ProfitMargins
     * const profitMargin = await prisma.profitMargin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfitMarginCreateManyArgs>(args?: SelectSubset<T, ProfitMarginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfitMargins and returns the data saved in the database.
     * @param {ProfitMarginCreateManyAndReturnArgs} args - Arguments to create many ProfitMargins.
     * @example
     * // Create many ProfitMargins
     * const profitMargin = await prisma.profitMargin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfitMargins and only return the `id`
     * const profitMarginWithIdOnly = await prisma.profitMargin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfitMarginCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfitMarginCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfitMarginPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfitMargin.
     * @param {ProfitMarginDeleteArgs} args - Arguments to delete one ProfitMargin.
     * @example
     * // Delete one ProfitMargin
     * const ProfitMargin = await prisma.profitMargin.delete({
     *   where: {
     *     // ... filter to delete one ProfitMargin
     *   }
     * })
     * 
     */
    delete<T extends ProfitMarginDeleteArgs>(args: SelectSubset<T, ProfitMarginDeleteArgs<ExtArgs>>): Prisma__ProfitMarginClient<$Result.GetResult<Prisma.$ProfitMarginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfitMargin.
     * @param {ProfitMarginUpdateArgs} args - Arguments to update one ProfitMargin.
     * @example
     * // Update one ProfitMargin
     * const profitMargin = await prisma.profitMargin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfitMarginUpdateArgs>(args: SelectSubset<T, ProfitMarginUpdateArgs<ExtArgs>>): Prisma__ProfitMarginClient<$Result.GetResult<Prisma.$ProfitMarginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfitMargins.
     * @param {ProfitMarginDeleteManyArgs} args - Arguments to filter ProfitMargins to delete.
     * @example
     * // Delete a few ProfitMargins
     * const { count } = await prisma.profitMargin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfitMarginDeleteManyArgs>(args?: SelectSubset<T, ProfitMarginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfitMargins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitMarginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfitMargins
     * const profitMargin = await prisma.profitMargin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfitMarginUpdateManyArgs>(args: SelectSubset<T, ProfitMarginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfitMargins and returns the data updated in the database.
     * @param {ProfitMarginUpdateManyAndReturnArgs} args - Arguments to update many ProfitMargins.
     * @example
     * // Update many ProfitMargins
     * const profitMargin = await prisma.profitMargin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfitMargins and only return the `id`
     * const profitMarginWithIdOnly = await prisma.profitMargin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfitMarginUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfitMarginUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfitMarginPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfitMargin.
     * @param {ProfitMarginUpsertArgs} args - Arguments to update or create a ProfitMargin.
     * @example
     * // Update or create a ProfitMargin
     * const profitMargin = await prisma.profitMargin.upsert({
     *   create: {
     *     // ... data to create a ProfitMargin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfitMargin we want to update
     *   }
     * })
     */
    upsert<T extends ProfitMarginUpsertArgs>(args: SelectSubset<T, ProfitMarginUpsertArgs<ExtArgs>>): Prisma__ProfitMarginClient<$Result.GetResult<Prisma.$ProfitMarginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfitMargins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitMarginCountArgs} args - Arguments to filter ProfitMargins to count.
     * @example
     * // Count the number of ProfitMargins
     * const count = await prisma.profitMargin.count({
     *   where: {
     *     // ... the filter for the ProfitMargins we want to count
     *   }
     * })
    **/
    count<T extends ProfitMarginCountArgs>(
      args?: Subset<T, ProfitMarginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfitMarginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfitMargin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitMarginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfitMarginAggregateArgs>(args: Subset<T, ProfitMarginAggregateArgs>): Prisma.PrismaPromise<GetProfitMarginAggregateType<T>>

    /**
     * Group by ProfitMargin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitMarginGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfitMarginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfitMarginGroupByArgs['orderBy'] }
        : { orderBy?: ProfitMarginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfitMarginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfitMarginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfitMargin model
   */
  readonly fields: ProfitMarginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfitMargin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfitMarginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfitMargin model
   */
  interface ProfitMarginFieldRefs {
    readonly id: FieldRef<"ProfitMargin", 'Int'>
    readonly percentage: FieldRef<"ProfitMargin", 'Float'>
    readonly createdAt: FieldRef<"ProfitMargin", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfitMargin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfitMargin findUnique
   */
  export type ProfitMarginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
    /**
     * Filter, which ProfitMargin to fetch.
     */
    where: ProfitMarginWhereUniqueInput
  }

  /**
   * ProfitMargin findUniqueOrThrow
   */
  export type ProfitMarginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
    /**
     * Filter, which ProfitMargin to fetch.
     */
    where: ProfitMarginWhereUniqueInput
  }

  /**
   * ProfitMargin findFirst
   */
  export type ProfitMarginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
    /**
     * Filter, which ProfitMargin to fetch.
     */
    where?: ProfitMarginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitMargins to fetch.
     */
    orderBy?: ProfitMarginOrderByWithRelationInput | ProfitMarginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfitMargins.
     */
    cursor?: ProfitMarginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitMargins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitMargins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfitMargins.
     */
    distinct?: ProfitMarginScalarFieldEnum | ProfitMarginScalarFieldEnum[]
  }

  /**
   * ProfitMargin findFirstOrThrow
   */
  export type ProfitMarginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
    /**
     * Filter, which ProfitMargin to fetch.
     */
    where?: ProfitMarginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitMargins to fetch.
     */
    orderBy?: ProfitMarginOrderByWithRelationInput | ProfitMarginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfitMargins.
     */
    cursor?: ProfitMarginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitMargins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitMargins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfitMargins.
     */
    distinct?: ProfitMarginScalarFieldEnum | ProfitMarginScalarFieldEnum[]
  }

  /**
   * ProfitMargin findMany
   */
  export type ProfitMarginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
    /**
     * Filter, which ProfitMargins to fetch.
     */
    where?: ProfitMarginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitMargins to fetch.
     */
    orderBy?: ProfitMarginOrderByWithRelationInput | ProfitMarginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfitMargins.
     */
    cursor?: ProfitMarginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitMargins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitMargins.
     */
    skip?: number
    distinct?: ProfitMarginScalarFieldEnum | ProfitMarginScalarFieldEnum[]
  }

  /**
   * ProfitMargin create
   */
  export type ProfitMarginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
    /**
     * The data needed to create a ProfitMargin.
     */
    data: XOR<ProfitMarginCreateInput, ProfitMarginUncheckedCreateInput>
  }

  /**
   * ProfitMargin createMany
   */
  export type ProfitMarginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfitMargins.
     */
    data: ProfitMarginCreateManyInput | ProfitMarginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfitMargin createManyAndReturn
   */
  export type ProfitMarginCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
    /**
     * The data used to create many ProfitMargins.
     */
    data: ProfitMarginCreateManyInput | ProfitMarginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfitMargin update
   */
  export type ProfitMarginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
    /**
     * The data needed to update a ProfitMargin.
     */
    data: XOR<ProfitMarginUpdateInput, ProfitMarginUncheckedUpdateInput>
    /**
     * Choose, which ProfitMargin to update.
     */
    where: ProfitMarginWhereUniqueInput
  }

  /**
   * ProfitMargin updateMany
   */
  export type ProfitMarginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfitMargins.
     */
    data: XOR<ProfitMarginUpdateManyMutationInput, ProfitMarginUncheckedUpdateManyInput>
    /**
     * Filter which ProfitMargins to update
     */
    where?: ProfitMarginWhereInput
    /**
     * Limit how many ProfitMargins to update.
     */
    limit?: number
  }

  /**
   * ProfitMargin updateManyAndReturn
   */
  export type ProfitMarginUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
    /**
     * The data used to update ProfitMargins.
     */
    data: XOR<ProfitMarginUpdateManyMutationInput, ProfitMarginUncheckedUpdateManyInput>
    /**
     * Filter which ProfitMargins to update
     */
    where?: ProfitMarginWhereInput
    /**
     * Limit how many ProfitMargins to update.
     */
    limit?: number
  }

  /**
   * ProfitMargin upsert
   */
  export type ProfitMarginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
    /**
     * The filter to search for the ProfitMargin to update in case it exists.
     */
    where: ProfitMarginWhereUniqueInput
    /**
     * In case the ProfitMargin found by the `where` argument doesn't exist, create a new ProfitMargin with this data.
     */
    create: XOR<ProfitMarginCreateInput, ProfitMarginUncheckedCreateInput>
    /**
     * In case the ProfitMargin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfitMarginUpdateInput, ProfitMarginUncheckedUpdateInput>
  }

  /**
   * ProfitMargin delete
   */
  export type ProfitMarginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
    /**
     * Filter which ProfitMargin to delete.
     */
    where: ProfitMarginWhereUniqueInput
  }

  /**
   * ProfitMargin deleteMany
   */
  export type ProfitMarginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfitMargins to delete
     */
    where?: ProfitMarginWhereInput
    /**
     * Limit how many ProfitMargins to delete.
     */
    limit?: number
  }

  /**
   * ProfitMargin without action
   */
  export type ProfitMarginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitMargin
     */
    select?: ProfitMarginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitMargin
     */
    omit?: ProfitMarginOmit<ExtArgs> | null
  }


  /**
   * Model Balance
   */

  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type BalanceSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type BalanceSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type BalanceMinAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balance to aggregate.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type BalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithAggregationInput | BalanceOrderByWithAggregationInput[]
    by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum
    having?: BalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _avg?: BalanceAvgAggregateInputType
    _sum?: BalanceSumAggregateInputType
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }

  export type BalanceGroupByOutputType = {
    id: number
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends BalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type BalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | Balance$UserArgs<ExtArgs>
    _count?: boolean | BalanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectScalar = {
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["balance"]>
  export type BalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Balance$UserArgs<ExtArgs>
    _count?: boolean | BalanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Balance"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["balance"]>
    composites: {}
  }

  type BalanceGetPayload<S extends boolean | null | undefined | BalanceDefaultArgs> = $Result.GetResult<Prisma.$BalancePayload, S>

  type BalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface BalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Balance'], meta: { name: 'Balance' } }
    /**
     * Find zero or one Balance that matches the filter.
     * @param {BalanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceFindUniqueArgs>(args: SelectSubset<T, BalanceFindUniqueArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceFindFirstArgs>(args?: SelectSubset<T, BalanceFindFirstArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceFindManyArgs>(args?: SelectSubset<T, BalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balance.
     * @param {BalanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
     */
    create<T extends BalanceCreateArgs>(args: SelectSubset<T, BalanceCreateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balances.
     * @param {BalanceCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceCreateManyArgs>(args?: SelectSubset<T, BalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {BalanceCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balance.
     * @param {BalanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
     */
    delete<T extends BalanceDeleteArgs>(args: SelectSubset<T, BalanceDeleteArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balance.
     * @param {BalanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceUpdateArgs>(args: SelectSubset<T, BalanceUpdateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balances.
     * @param {BalanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceDeleteManyArgs>(args?: SelectSubset<T, BalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceUpdateManyArgs>(args: SelectSubset<T, BalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances and returns the data updated in the database.
     * @param {BalanceUpdateManyAndReturnArgs} args - Arguments to update many Balances.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, BalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balance.
     * @param {BalanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
     */
    upsert<T extends BalanceUpsertArgs>(args: SelectSubset<T, BalanceUpsertArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends BalanceCountArgs>(
      args?: Subset<T, BalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceGroupByArgs['orderBy'] }
        : { orderBy?: BalanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Balance model
   */
  readonly fields: BalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Balance$UserArgs<ExtArgs> = {}>(args?: Subset<T, Balance$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Balance model
   */
  interface BalanceFieldRefs {
    readonly id: FieldRef<"Balance", 'Int'>
    readonly amount: FieldRef<"Balance", 'Float'>
    readonly createdAt: FieldRef<"Balance", 'DateTime'>
    readonly updatedAt: FieldRef<"Balance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Balance findUnique
   */
  export type BalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findUniqueOrThrow
   */
  export type BalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findFirst
   */
  export type BalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findFirstOrThrow
   */
  export type BalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findMany
   */
  export type BalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance create
   */
  export type BalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Balance.
     */
    data: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
  }

  /**
   * Balance createMany
   */
  export type BalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Balance createManyAndReturn
   */
  export type BalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Balance update
   */
  export type BalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Balance.
     */
    data: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
    /**
     * Choose, which Balance to update.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance updateMany
   */
  export type BalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
  }

  /**
   * Balance updateManyAndReturn
   */
  export type BalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
  }

  /**
   * Balance upsert
   */
  export type BalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Balance to update in case it exists.
     */
    where: BalanceWhereUniqueInput
    /**
     * In case the Balance found by the `where` argument doesn't exist, create a new Balance with this data.
     */
    create: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
    /**
     * In case the Balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
  }

  /**
   * Balance delete
   */
  export type BalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter which Balance to delete.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance deleteMany
   */
  export type BalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balances to delete
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to delete.
     */
    limit?: number
  }

  /**
   * Balance.User
   */
  export type Balance$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Balance without action
   */
  export type BalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
  }


  /**
   * Model Extract
   */

  export type AggregateExtract = {
    _count: ExtractCountAggregateOutputType | null
    _avg: ExtractAvgAggregateOutputType | null
    _sum: ExtractSumAggregateOutputType | null
    _min: ExtractMinAggregateOutputType | null
    _max: ExtractMaxAggregateOutputType | null
  }

  export type ExtractAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type ExtractSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type ExtractMinAggregateOutputType = {
    id: number | null
    amount: number | null
    type: $Enums.ExtractType | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ExtractMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    type: $Enums.ExtractType | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ExtractCountAggregateOutputType = {
    id: number
    amount: number
    type: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ExtractAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type ExtractSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type ExtractMinAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ExtractMaxAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ExtractCountAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ExtractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extract to aggregate.
     */
    where?: ExtractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extracts to fetch.
     */
    orderBy?: ExtractOrderByWithRelationInput | ExtractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExtractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Extracts
    **/
    _count?: true | ExtractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExtractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExtractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExtractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExtractMaxAggregateInputType
  }

  export type GetExtractAggregateType<T extends ExtractAggregateArgs> = {
        [P in keyof T & keyof AggregateExtract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExtract[P]>
      : GetScalarType<T[P], AggregateExtract[P]>
  }




  export type ExtractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExtractWhereInput
    orderBy?: ExtractOrderByWithAggregationInput | ExtractOrderByWithAggregationInput[]
    by: ExtractScalarFieldEnum[] | ExtractScalarFieldEnum
    having?: ExtractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExtractCountAggregateInputType | true
    _avg?: ExtractAvgAggregateInputType
    _sum?: ExtractSumAggregateInputType
    _min?: ExtractMinAggregateInputType
    _max?: ExtractMaxAggregateInputType
  }

  export type ExtractGroupByOutputType = {
    id: number
    amount: number
    type: $Enums.ExtractType
    createdAt: Date
    updatedAt: Date
    userId: number | null
    _count: ExtractCountAggregateOutputType | null
    _avg: ExtractAvgAggregateOutputType | null
    _sum: ExtractSumAggregateOutputType | null
    _min: ExtractMinAggregateOutputType | null
    _max: ExtractMaxAggregateOutputType | null
  }

  type GetExtractGroupByPayload<T extends ExtractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExtractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExtractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExtractGroupByOutputType[P]>
            : GetScalarType<T[P], ExtractGroupByOutputType[P]>
        }
      >
    >


  export type ExtractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | Extract$UserArgs<ExtArgs>
  }, ExtArgs["result"]["extract"]>

  export type ExtractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | Extract$UserArgs<ExtArgs>
  }, ExtArgs["result"]["extract"]>

  export type ExtractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | Extract$UserArgs<ExtArgs>
  }, ExtArgs["result"]["extract"]>

  export type ExtractSelectScalar = {
    id?: boolean
    amount?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ExtractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "type" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["extract"]>
  export type ExtractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Extract$UserArgs<ExtArgs>
  }
  export type ExtractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Extract$UserArgs<ExtArgs>
  }
  export type ExtractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Extract$UserArgs<ExtArgs>
  }

  export type $ExtractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Extract"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      type: $Enums.ExtractType
      createdAt: Date
      updatedAt: Date
      userId: number | null
    }, ExtArgs["result"]["extract"]>
    composites: {}
  }

  type ExtractGetPayload<S extends boolean | null | undefined | ExtractDefaultArgs> = $Result.GetResult<Prisma.$ExtractPayload, S>

  type ExtractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExtractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExtractCountAggregateInputType | true
    }

  export interface ExtractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Extract'], meta: { name: 'Extract' } }
    /**
     * Find zero or one Extract that matches the filter.
     * @param {ExtractFindUniqueArgs} args - Arguments to find a Extract
     * @example
     * // Get one Extract
     * const extract = await prisma.extract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExtractFindUniqueArgs>(args: SelectSubset<T, ExtractFindUniqueArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Extract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExtractFindUniqueOrThrowArgs} args - Arguments to find a Extract
     * @example
     * // Get one Extract
     * const extract = await prisma.extract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExtractFindUniqueOrThrowArgs>(args: SelectSubset<T, ExtractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractFindFirstArgs} args - Arguments to find a Extract
     * @example
     * // Get one Extract
     * const extract = await prisma.extract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExtractFindFirstArgs>(args?: SelectSubset<T, ExtractFindFirstArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Extract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractFindFirstOrThrowArgs} args - Arguments to find a Extract
     * @example
     * // Get one Extract
     * const extract = await prisma.extract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExtractFindFirstOrThrowArgs>(args?: SelectSubset<T, ExtractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Extracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Extracts
     * const extracts = await prisma.extract.findMany()
     * 
     * // Get first 10 Extracts
     * const extracts = await prisma.extract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const extractWithIdOnly = await prisma.extract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExtractFindManyArgs>(args?: SelectSubset<T, ExtractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Extract.
     * @param {ExtractCreateArgs} args - Arguments to create a Extract.
     * @example
     * // Create one Extract
     * const Extract = await prisma.extract.create({
     *   data: {
     *     // ... data to create a Extract
     *   }
     * })
     * 
     */
    create<T extends ExtractCreateArgs>(args: SelectSubset<T, ExtractCreateArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Extracts.
     * @param {ExtractCreateManyArgs} args - Arguments to create many Extracts.
     * @example
     * // Create many Extracts
     * const extract = await prisma.extract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExtractCreateManyArgs>(args?: SelectSubset<T, ExtractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Extracts and returns the data saved in the database.
     * @param {ExtractCreateManyAndReturnArgs} args - Arguments to create many Extracts.
     * @example
     * // Create many Extracts
     * const extract = await prisma.extract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Extracts and only return the `id`
     * const extractWithIdOnly = await prisma.extract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExtractCreateManyAndReturnArgs>(args?: SelectSubset<T, ExtractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Extract.
     * @param {ExtractDeleteArgs} args - Arguments to delete one Extract.
     * @example
     * // Delete one Extract
     * const Extract = await prisma.extract.delete({
     *   where: {
     *     // ... filter to delete one Extract
     *   }
     * })
     * 
     */
    delete<T extends ExtractDeleteArgs>(args: SelectSubset<T, ExtractDeleteArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Extract.
     * @param {ExtractUpdateArgs} args - Arguments to update one Extract.
     * @example
     * // Update one Extract
     * const extract = await prisma.extract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExtractUpdateArgs>(args: SelectSubset<T, ExtractUpdateArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Extracts.
     * @param {ExtractDeleteManyArgs} args - Arguments to filter Extracts to delete.
     * @example
     * // Delete a few Extracts
     * const { count } = await prisma.extract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExtractDeleteManyArgs>(args?: SelectSubset<T, ExtractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Extracts
     * const extract = await prisma.extract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExtractUpdateManyArgs>(args: SelectSubset<T, ExtractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Extracts and returns the data updated in the database.
     * @param {ExtractUpdateManyAndReturnArgs} args - Arguments to update many Extracts.
     * @example
     * // Update many Extracts
     * const extract = await prisma.extract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Extracts and only return the `id`
     * const extractWithIdOnly = await prisma.extract.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExtractUpdateManyAndReturnArgs>(args: SelectSubset<T, ExtractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Extract.
     * @param {ExtractUpsertArgs} args - Arguments to update or create a Extract.
     * @example
     * // Update or create a Extract
     * const extract = await prisma.extract.upsert({
     *   create: {
     *     // ... data to create a Extract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Extract we want to update
     *   }
     * })
     */
    upsert<T extends ExtractUpsertArgs>(args: SelectSubset<T, ExtractUpsertArgs<ExtArgs>>): Prisma__ExtractClient<$Result.GetResult<Prisma.$ExtractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Extracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractCountArgs} args - Arguments to filter Extracts to count.
     * @example
     * // Count the number of Extracts
     * const count = await prisma.extract.count({
     *   where: {
     *     // ... the filter for the Extracts we want to count
     *   }
     * })
    **/
    count<T extends ExtractCountArgs>(
      args?: Subset<T, ExtractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExtractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Extract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExtractAggregateArgs>(args: Subset<T, ExtractAggregateArgs>): Prisma.PrismaPromise<GetExtractAggregateType<T>>

    /**
     * Group by Extract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExtractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExtractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExtractGroupByArgs['orderBy'] }
        : { orderBy?: ExtractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExtractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExtractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Extract model
   */
  readonly fields: ExtractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Extract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExtractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Extract$UserArgs<ExtArgs> = {}>(args?: Subset<T, Extract$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Extract model
   */
  interface ExtractFieldRefs {
    readonly id: FieldRef<"Extract", 'Int'>
    readonly amount: FieldRef<"Extract", 'Float'>
    readonly type: FieldRef<"Extract", 'ExtractType'>
    readonly createdAt: FieldRef<"Extract", 'DateTime'>
    readonly updatedAt: FieldRef<"Extract", 'DateTime'>
    readonly userId: FieldRef<"Extract", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Extract findUnique
   */
  export type ExtractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter, which Extract to fetch.
     */
    where: ExtractWhereUniqueInput
  }

  /**
   * Extract findUniqueOrThrow
   */
  export type ExtractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter, which Extract to fetch.
     */
    where: ExtractWhereUniqueInput
  }

  /**
   * Extract findFirst
   */
  export type ExtractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter, which Extract to fetch.
     */
    where?: ExtractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extracts to fetch.
     */
    orderBy?: ExtractOrderByWithRelationInput | ExtractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extracts.
     */
    cursor?: ExtractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extracts.
     */
    distinct?: ExtractScalarFieldEnum | ExtractScalarFieldEnum[]
  }

  /**
   * Extract findFirstOrThrow
   */
  export type ExtractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter, which Extract to fetch.
     */
    where?: ExtractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extracts to fetch.
     */
    orderBy?: ExtractOrderByWithRelationInput | ExtractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Extracts.
     */
    cursor?: ExtractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Extracts.
     */
    distinct?: ExtractScalarFieldEnum | ExtractScalarFieldEnum[]
  }

  /**
   * Extract findMany
   */
  export type ExtractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter, which Extracts to fetch.
     */
    where?: ExtractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Extracts to fetch.
     */
    orderBy?: ExtractOrderByWithRelationInput | ExtractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Extracts.
     */
    cursor?: ExtractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Extracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Extracts.
     */
    skip?: number
    distinct?: ExtractScalarFieldEnum | ExtractScalarFieldEnum[]
  }

  /**
   * Extract create
   */
  export type ExtractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * The data needed to create a Extract.
     */
    data: XOR<ExtractCreateInput, ExtractUncheckedCreateInput>
  }

  /**
   * Extract createMany
   */
  export type ExtractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Extracts.
     */
    data: ExtractCreateManyInput | ExtractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Extract createManyAndReturn
   */
  export type ExtractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * The data used to create many Extracts.
     */
    data: ExtractCreateManyInput | ExtractCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Extract update
   */
  export type ExtractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * The data needed to update a Extract.
     */
    data: XOR<ExtractUpdateInput, ExtractUncheckedUpdateInput>
    /**
     * Choose, which Extract to update.
     */
    where: ExtractWhereUniqueInput
  }

  /**
   * Extract updateMany
   */
  export type ExtractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Extracts.
     */
    data: XOR<ExtractUpdateManyMutationInput, ExtractUncheckedUpdateManyInput>
    /**
     * Filter which Extracts to update
     */
    where?: ExtractWhereInput
    /**
     * Limit how many Extracts to update.
     */
    limit?: number
  }

  /**
   * Extract updateManyAndReturn
   */
  export type ExtractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * The data used to update Extracts.
     */
    data: XOR<ExtractUpdateManyMutationInput, ExtractUncheckedUpdateManyInput>
    /**
     * Filter which Extracts to update
     */
    where?: ExtractWhereInput
    /**
     * Limit how many Extracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Extract upsert
   */
  export type ExtractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * The filter to search for the Extract to update in case it exists.
     */
    where: ExtractWhereUniqueInput
    /**
     * In case the Extract found by the `where` argument doesn't exist, create a new Extract with this data.
     */
    create: XOR<ExtractCreateInput, ExtractUncheckedCreateInput>
    /**
     * In case the Extract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExtractUpdateInput, ExtractUncheckedUpdateInput>
  }

  /**
   * Extract delete
   */
  export type ExtractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
    /**
     * Filter which Extract to delete.
     */
    where: ExtractWhereUniqueInput
  }

  /**
   * Extract deleteMany
   */
  export type ExtractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Extracts to delete
     */
    where?: ExtractWhereInput
    /**
     * Limit how many Extracts to delete.
     */
    limit?: number
  }

  /**
   * Extract.User
   */
  export type Extract$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Extract without action
   */
  export type ExtractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Extract
     */
    select?: ExtractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Extract
     */
    omit?: ExtractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExtractInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryMan
   */

  export type AggregateDeliveryMan = {
    _count: DeliveryManCountAggregateOutputType | null
    _avg: DeliveryManAvgAggregateOutputType | null
    _sum: DeliveryManSumAggregateOutputType | null
    _min: DeliveryManMinAggregateOutputType | null
    _max: DeliveryManMaxAggregateOutputType | null
  }

  export type DeliveryManAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DeliveryManSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DeliveryManMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type DeliveryManMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type DeliveryManCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type DeliveryManAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DeliveryManSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DeliveryManMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type DeliveryManMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type DeliveryManCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type DeliveryManAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryMan to aggregate.
     */
    where?: DeliveryManWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryMen to fetch.
     */
    orderBy?: DeliveryManOrderByWithRelationInput | DeliveryManOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryManWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryMen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryMen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryMen
    **/
    _count?: true | DeliveryManCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryManAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliveryManSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryManMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryManMaxAggregateInputType
  }

  export type GetDeliveryManAggregateType<T extends DeliveryManAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryMan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryMan[P]>
      : GetScalarType<T[P], AggregateDeliveryMan[P]>
  }




  export type DeliveryManGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryManWhereInput
    orderBy?: DeliveryManOrderByWithAggregationInput | DeliveryManOrderByWithAggregationInput[]
    by: DeliveryManScalarFieldEnum[] | DeliveryManScalarFieldEnum
    having?: DeliveryManScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryManCountAggregateInputType | true
    _avg?: DeliveryManAvgAggregateInputType
    _sum?: DeliveryManSumAggregateInputType
    _min?: DeliveryManMinAggregateInputType
    _max?: DeliveryManMaxAggregateInputType
  }

  export type DeliveryManGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    address: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: DeliveryManCountAggregateOutputType | null
    _avg: DeliveryManAvgAggregateOutputType | null
    _sum: DeliveryManSumAggregateOutputType | null
    _min: DeliveryManMinAggregateOutputType | null
    _max: DeliveryManMaxAggregateOutputType | null
  }

  type GetDeliveryManGroupByPayload<T extends DeliveryManGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryManGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryManGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryManGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryManGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryManSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Delivery?: boolean | DeliveryMan$DeliveryArgs<ExtArgs>
    _count?: boolean | DeliveryManCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryMan"]>

  export type DeliveryManSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryMan"]>

  export type DeliveryManSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryMan"]>

  export type DeliveryManSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type DeliveryManOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["deliveryMan"]>
  export type DeliveryManInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Delivery?: boolean | DeliveryMan$DeliveryArgs<ExtArgs>
    _count?: boolean | DeliveryManCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeliveryManIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeliveryManIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeliveryManPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryMan"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Delivery: Prisma.$DeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      address: string
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["deliveryMan"]>
    composites: {}
  }

  type DeliveryManGetPayload<S extends boolean | null | undefined | DeliveryManDefaultArgs> = $Result.GetResult<Prisma.$DeliveryManPayload, S>

  type DeliveryManCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryManFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryManCountAggregateInputType | true
    }

  export interface DeliveryManDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryMan'], meta: { name: 'DeliveryMan' } }
    /**
     * Find zero or one DeliveryMan that matches the filter.
     * @param {DeliveryManFindUniqueArgs} args - Arguments to find a DeliveryMan
     * @example
     * // Get one DeliveryMan
     * const deliveryMan = await prisma.deliveryMan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryManFindUniqueArgs>(args: SelectSubset<T, DeliveryManFindUniqueArgs<ExtArgs>>): Prisma__DeliveryManClient<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryMan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryManFindUniqueOrThrowArgs} args - Arguments to find a DeliveryMan
     * @example
     * // Get one DeliveryMan
     * const deliveryMan = await prisma.deliveryMan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryManFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryManFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryManClient<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryMan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryManFindFirstArgs} args - Arguments to find a DeliveryMan
     * @example
     * // Get one DeliveryMan
     * const deliveryMan = await prisma.deliveryMan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryManFindFirstArgs>(args?: SelectSubset<T, DeliveryManFindFirstArgs<ExtArgs>>): Prisma__DeliveryManClient<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryMan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryManFindFirstOrThrowArgs} args - Arguments to find a DeliveryMan
     * @example
     * // Get one DeliveryMan
     * const deliveryMan = await prisma.deliveryMan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryManFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryManFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryManClient<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryMen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryManFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryMen
     * const deliveryMen = await prisma.deliveryMan.findMany()
     * 
     * // Get first 10 DeliveryMen
     * const deliveryMen = await prisma.deliveryMan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryManWithIdOnly = await prisma.deliveryMan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryManFindManyArgs>(args?: SelectSubset<T, DeliveryManFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryMan.
     * @param {DeliveryManCreateArgs} args - Arguments to create a DeliveryMan.
     * @example
     * // Create one DeliveryMan
     * const DeliveryMan = await prisma.deliveryMan.create({
     *   data: {
     *     // ... data to create a DeliveryMan
     *   }
     * })
     * 
     */
    create<T extends DeliveryManCreateArgs>(args: SelectSubset<T, DeliveryManCreateArgs<ExtArgs>>): Prisma__DeliveryManClient<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryMen.
     * @param {DeliveryManCreateManyArgs} args - Arguments to create many DeliveryMen.
     * @example
     * // Create many DeliveryMen
     * const deliveryMan = await prisma.deliveryMan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryManCreateManyArgs>(args?: SelectSubset<T, DeliveryManCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryMen and returns the data saved in the database.
     * @param {DeliveryManCreateManyAndReturnArgs} args - Arguments to create many DeliveryMen.
     * @example
     * // Create many DeliveryMen
     * const deliveryMan = await prisma.deliveryMan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryMen and only return the `id`
     * const deliveryManWithIdOnly = await prisma.deliveryMan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryManCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryManCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryMan.
     * @param {DeliveryManDeleteArgs} args - Arguments to delete one DeliveryMan.
     * @example
     * // Delete one DeliveryMan
     * const DeliveryMan = await prisma.deliveryMan.delete({
     *   where: {
     *     // ... filter to delete one DeliveryMan
     *   }
     * })
     * 
     */
    delete<T extends DeliveryManDeleteArgs>(args: SelectSubset<T, DeliveryManDeleteArgs<ExtArgs>>): Prisma__DeliveryManClient<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryMan.
     * @param {DeliveryManUpdateArgs} args - Arguments to update one DeliveryMan.
     * @example
     * // Update one DeliveryMan
     * const deliveryMan = await prisma.deliveryMan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryManUpdateArgs>(args: SelectSubset<T, DeliveryManUpdateArgs<ExtArgs>>): Prisma__DeliveryManClient<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryMen.
     * @param {DeliveryManDeleteManyArgs} args - Arguments to filter DeliveryMen to delete.
     * @example
     * // Delete a few DeliveryMen
     * const { count } = await prisma.deliveryMan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryManDeleteManyArgs>(args?: SelectSubset<T, DeliveryManDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryMen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryManUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryMen
     * const deliveryMan = await prisma.deliveryMan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryManUpdateManyArgs>(args: SelectSubset<T, DeliveryManUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryMen and returns the data updated in the database.
     * @param {DeliveryManUpdateManyAndReturnArgs} args - Arguments to update many DeliveryMen.
     * @example
     * // Update many DeliveryMen
     * const deliveryMan = await prisma.deliveryMan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryMen and only return the `id`
     * const deliveryManWithIdOnly = await prisma.deliveryMan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryManUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryManUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryMan.
     * @param {DeliveryManUpsertArgs} args - Arguments to update or create a DeliveryMan.
     * @example
     * // Update or create a DeliveryMan
     * const deliveryMan = await prisma.deliveryMan.upsert({
     *   create: {
     *     // ... data to create a DeliveryMan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryMan we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryManUpsertArgs>(args: SelectSubset<T, DeliveryManUpsertArgs<ExtArgs>>): Prisma__DeliveryManClient<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryMen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryManCountArgs} args - Arguments to filter DeliveryMen to count.
     * @example
     * // Count the number of DeliveryMen
     * const count = await prisma.deliveryMan.count({
     *   where: {
     *     // ... the filter for the DeliveryMen we want to count
     *   }
     * })
    **/
    count<T extends DeliveryManCountArgs>(
      args?: Subset<T, DeliveryManCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryManCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryMan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryManAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryManAggregateArgs>(args: Subset<T, DeliveryManAggregateArgs>): Prisma.PrismaPromise<GetDeliveryManAggregateType<T>>

    /**
     * Group by DeliveryMan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryManGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryManGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryManGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryManGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryManGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryManGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryMan model
   */
  readonly fields: DeliveryManFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryMan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryManClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Delivery<T extends DeliveryMan$DeliveryArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryMan$DeliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeliveryMan model
   */
  interface DeliveryManFieldRefs {
    readonly id: FieldRef<"DeliveryMan", 'Int'>
    readonly name: FieldRef<"DeliveryMan", 'String'>
    readonly email: FieldRef<"DeliveryMan", 'String'>
    readonly phone: FieldRef<"DeliveryMan", 'String'>
    readonly address: FieldRef<"DeliveryMan", 'String'>
    readonly createdAt: FieldRef<"DeliveryMan", 'DateTime'>
    readonly updatedAt: FieldRef<"DeliveryMan", 'DateTime'>
    readonly userId: FieldRef<"DeliveryMan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryMan findUnique
   */
  export type DeliveryManFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryMan to fetch.
     */
    where: DeliveryManWhereUniqueInput
  }

  /**
   * DeliveryMan findUniqueOrThrow
   */
  export type DeliveryManFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryMan to fetch.
     */
    where: DeliveryManWhereUniqueInput
  }

  /**
   * DeliveryMan findFirst
   */
  export type DeliveryManFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryMan to fetch.
     */
    where?: DeliveryManWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryMen to fetch.
     */
    orderBy?: DeliveryManOrderByWithRelationInput | DeliveryManOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryMen.
     */
    cursor?: DeliveryManWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryMen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryMen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryMen.
     */
    distinct?: DeliveryManScalarFieldEnum | DeliveryManScalarFieldEnum[]
  }

  /**
   * DeliveryMan findFirstOrThrow
   */
  export type DeliveryManFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryMan to fetch.
     */
    where?: DeliveryManWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryMen to fetch.
     */
    orderBy?: DeliveryManOrderByWithRelationInput | DeliveryManOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryMen.
     */
    cursor?: DeliveryManWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryMen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryMen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryMen.
     */
    distinct?: DeliveryManScalarFieldEnum | DeliveryManScalarFieldEnum[]
  }

  /**
   * DeliveryMan findMany
   */
  export type DeliveryManFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryMen to fetch.
     */
    where?: DeliveryManWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryMen to fetch.
     */
    orderBy?: DeliveryManOrderByWithRelationInput | DeliveryManOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryMen.
     */
    cursor?: DeliveryManWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryMen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryMen.
     */
    skip?: number
    distinct?: DeliveryManScalarFieldEnum | DeliveryManScalarFieldEnum[]
  }

  /**
   * DeliveryMan create
   */
  export type DeliveryManCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryMan.
     */
    data: XOR<DeliveryManCreateInput, DeliveryManUncheckedCreateInput>
  }

  /**
   * DeliveryMan createMany
   */
  export type DeliveryManCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryMen.
     */
    data: DeliveryManCreateManyInput | DeliveryManCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryMan createManyAndReturn
   */
  export type DeliveryManCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryMen.
     */
    data: DeliveryManCreateManyInput | DeliveryManCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryMan update
   */
  export type DeliveryManUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryMan.
     */
    data: XOR<DeliveryManUpdateInput, DeliveryManUncheckedUpdateInput>
    /**
     * Choose, which DeliveryMan to update.
     */
    where: DeliveryManWhereUniqueInput
  }

  /**
   * DeliveryMan updateMany
   */
  export type DeliveryManUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryMen.
     */
    data: XOR<DeliveryManUpdateManyMutationInput, DeliveryManUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryMen to update
     */
    where?: DeliveryManWhereInput
    /**
     * Limit how many DeliveryMen to update.
     */
    limit?: number
  }

  /**
   * DeliveryMan updateManyAndReturn
   */
  export type DeliveryManUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryMen.
     */
    data: XOR<DeliveryManUpdateManyMutationInput, DeliveryManUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryMen to update
     */
    where?: DeliveryManWhereInput
    /**
     * Limit how many DeliveryMen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryMan upsert
   */
  export type DeliveryManUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryMan to update in case it exists.
     */
    where: DeliveryManWhereUniqueInput
    /**
     * In case the DeliveryMan found by the `where` argument doesn't exist, create a new DeliveryMan with this data.
     */
    create: XOR<DeliveryManCreateInput, DeliveryManUncheckedCreateInput>
    /**
     * In case the DeliveryMan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryManUpdateInput, DeliveryManUncheckedUpdateInput>
  }

  /**
   * DeliveryMan delete
   */
  export type DeliveryManDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
    /**
     * Filter which DeliveryMan to delete.
     */
    where: DeliveryManWhereUniqueInput
  }

  /**
   * DeliveryMan deleteMany
   */
  export type DeliveryManDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryMen to delete
     */
    where?: DeliveryManWhereInput
    /**
     * Limit how many DeliveryMen to delete.
     */
    limit?: number
  }

  /**
   * DeliveryMan.Delivery
   */
  export type DeliveryMan$DeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * DeliveryMan without action
   */
  export type DeliveryManDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
  }


  /**
   * Model Localization
   */

  export type AggregateLocalization = {
    _count: LocalizationCountAggregateOutputType | null
    _avg: LocalizationAvgAggregateOutputType | null
    _sum: LocalizationSumAggregateOutputType | null
    _min: LocalizationMinAggregateOutputType | null
    _max: LocalizationMaxAggregateOutputType | null
  }

  export type LocalizationAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    deliveryId: number | null
  }

  export type LocalizationSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    deliveryId: number | null
  }

  export type LocalizationMinAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deliveryId: number | null
  }

  export type LocalizationMaxAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deliveryId: number | null
  }

  export type LocalizationCountAggregateOutputType = {
    id: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    deliveryId: number
    _all: number
  }


  export type LocalizationAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    deliveryId?: true
  }

  export type LocalizationSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    deliveryId?: true
  }

  export type LocalizationMinAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    deliveryId?: true
  }

  export type LocalizationMaxAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    deliveryId?: true
  }

  export type LocalizationCountAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    deliveryId?: true
    _all?: true
  }

  export type LocalizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localization to aggregate.
     */
    where?: LocalizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizations to fetch.
     */
    orderBy?: LocalizationOrderByWithRelationInput | LocalizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localizations
    **/
    _count?: true | LocalizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalizationMaxAggregateInputType
  }

  export type GetLocalizationAggregateType<T extends LocalizationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalization[P]>
      : GetScalarType<T[P], AggregateLocalization[P]>
  }




  export type LocalizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizationWhereInput
    orderBy?: LocalizationOrderByWithAggregationInput | LocalizationOrderByWithAggregationInput[]
    by: LocalizationScalarFieldEnum[] | LocalizationScalarFieldEnum
    having?: LocalizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalizationCountAggregateInputType | true
    _avg?: LocalizationAvgAggregateInputType
    _sum?: LocalizationSumAggregateInputType
    _min?: LocalizationMinAggregateInputType
    _max?: LocalizationMaxAggregateInputType
  }

  export type LocalizationGroupByOutputType = {
    id: number
    latitude: number
    longitude: number
    createdAt: Date
    updatedAt: Date
    deliveryId: number | null
    _count: LocalizationCountAggregateOutputType | null
    _avg: LocalizationAvgAggregateOutputType | null
    _sum: LocalizationSumAggregateOutputType | null
    _min: LocalizationMinAggregateOutputType | null
    _max: LocalizationMaxAggregateOutputType | null
  }

  type GetLocalizationGroupByPayload<T extends LocalizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalizationGroupByOutputType[P]>
            : GetScalarType<T[P], LocalizationGroupByOutputType[P]>
        }
      >
    >


  export type LocalizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryId?: boolean
    Delivery?: boolean | Localization$DeliveryArgs<ExtArgs>
  }, ExtArgs["result"]["localization"]>

  export type LocalizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryId?: boolean
    Delivery?: boolean | Localization$DeliveryArgs<ExtArgs>
  }, ExtArgs["result"]["localization"]>

  export type LocalizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryId?: boolean
    Delivery?: boolean | Localization$DeliveryArgs<ExtArgs>
  }, ExtArgs["result"]["localization"]>

  export type LocalizationSelectScalar = {
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryId?: boolean
  }

  export type LocalizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "latitude" | "longitude" | "createdAt" | "updatedAt" | "deliveryId", ExtArgs["result"]["localization"]>
  export type LocalizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Delivery?: boolean | Localization$DeliveryArgs<ExtArgs>
  }
  export type LocalizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Delivery?: boolean | Localization$DeliveryArgs<ExtArgs>
  }
  export type LocalizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Delivery?: boolean | Localization$DeliveryArgs<ExtArgs>
  }

  export type $LocalizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localization"
    objects: {
      Delivery: Prisma.$DeliveryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      latitude: number
      longitude: number
      createdAt: Date
      updatedAt: Date
      deliveryId: number | null
    }, ExtArgs["result"]["localization"]>
    composites: {}
  }

  type LocalizationGetPayload<S extends boolean | null | undefined | LocalizationDefaultArgs> = $Result.GetResult<Prisma.$LocalizationPayload, S>

  type LocalizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalizationCountAggregateInputType | true
    }

  export interface LocalizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localization'], meta: { name: 'Localization' } }
    /**
     * Find zero or one Localization that matches the filter.
     * @param {LocalizationFindUniqueArgs} args - Arguments to find a Localization
     * @example
     * // Get one Localization
     * const localization = await prisma.localization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalizationFindUniqueArgs>(args: SelectSubset<T, LocalizationFindUniqueArgs<ExtArgs>>): Prisma__LocalizationClient<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Localization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalizationFindUniqueOrThrowArgs} args - Arguments to find a Localization
     * @example
     * // Get one Localization
     * const localization = await prisma.localization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalizationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalizationClient<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizationFindFirstArgs} args - Arguments to find a Localization
     * @example
     * // Get one Localization
     * const localization = await prisma.localization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalizationFindFirstArgs>(args?: SelectSubset<T, LocalizationFindFirstArgs<ExtArgs>>): Prisma__LocalizationClient<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizationFindFirstOrThrowArgs} args - Arguments to find a Localization
     * @example
     * // Get one Localization
     * const localization = await prisma.localization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalizationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalizationClient<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localizations
     * const localizations = await prisma.localization.findMany()
     * 
     * // Get first 10 Localizations
     * const localizations = await prisma.localization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localizationWithIdOnly = await prisma.localization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalizationFindManyArgs>(args?: SelectSubset<T, LocalizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Localization.
     * @param {LocalizationCreateArgs} args - Arguments to create a Localization.
     * @example
     * // Create one Localization
     * const Localization = await prisma.localization.create({
     *   data: {
     *     // ... data to create a Localization
     *   }
     * })
     * 
     */
    create<T extends LocalizationCreateArgs>(args: SelectSubset<T, LocalizationCreateArgs<ExtArgs>>): Prisma__LocalizationClient<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localizations.
     * @param {LocalizationCreateManyArgs} args - Arguments to create many Localizations.
     * @example
     * // Create many Localizations
     * const localization = await prisma.localization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalizationCreateManyArgs>(args?: SelectSubset<T, LocalizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Localizations and returns the data saved in the database.
     * @param {LocalizationCreateManyAndReturnArgs} args - Arguments to create many Localizations.
     * @example
     * // Create many Localizations
     * const localization = await prisma.localization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Localizations and only return the `id`
     * const localizationWithIdOnly = await prisma.localization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalizationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Localization.
     * @param {LocalizationDeleteArgs} args - Arguments to delete one Localization.
     * @example
     * // Delete one Localization
     * const Localization = await prisma.localization.delete({
     *   where: {
     *     // ... filter to delete one Localization
     *   }
     * })
     * 
     */
    delete<T extends LocalizationDeleteArgs>(args: SelectSubset<T, LocalizationDeleteArgs<ExtArgs>>): Prisma__LocalizationClient<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Localization.
     * @param {LocalizationUpdateArgs} args - Arguments to update one Localization.
     * @example
     * // Update one Localization
     * const localization = await prisma.localization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalizationUpdateArgs>(args: SelectSubset<T, LocalizationUpdateArgs<ExtArgs>>): Prisma__LocalizationClient<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localizations.
     * @param {LocalizationDeleteManyArgs} args - Arguments to filter Localizations to delete.
     * @example
     * // Delete a few Localizations
     * const { count } = await prisma.localization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalizationDeleteManyArgs>(args?: SelectSubset<T, LocalizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localizations
     * const localization = await prisma.localization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalizationUpdateManyArgs>(args: SelectSubset<T, LocalizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizations and returns the data updated in the database.
     * @param {LocalizationUpdateManyAndReturnArgs} args - Arguments to update many Localizations.
     * @example
     * // Update many Localizations
     * const localization = await prisma.localization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Localizations and only return the `id`
     * const localizationWithIdOnly = await prisma.localization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocalizationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Localization.
     * @param {LocalizationUpsertArgs} args - Arguments to update or create a Localization.
     * @example
     * // Update or create a Localization
     * const localization = await prisma.localization.upsert({
     *   create: {
     *     // ... data to create a Localization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localization we want to update
     *   }
     * })
     */
    upsert<T extends LocalizationUpsertArgs>(args: SelectSubset<T, LocalizationUpsertArgs<ExtArgs>>): Prisma__LocalizationClient<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizationCountArgs} args - Arguments to filter Localizations to count.
     * @example
     * // Count the number of Localizations
     * const count = await prisma.localization.count({
     *   where: {
     *     // ... the filter for the Localizations we want to count
     *   }
     * })
    **/
    count<T extends LocalizationCountArgs>(
      args?: Subset<T, LocalizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalizationAggregateArgs>(args: Subset<T, LocalizationAggregateArgs>): Prisma.PrismaPromise<GetLocalizationAggregateType<T>>

    /**
     * Group by Localization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalizationGroupByArgs['orderBy'] }
        : { orderBy?: LocalizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localization model
   */
  readonly fields: LocalizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Delivery<T extends Localization$DeliveryArgs<ExtArgs> = {}>(args?: Subset<T, Localization$DeliveryArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Localization model
   */
  interface LocalizationFieldRefs {
    readonly id: FieldRef<"Localization", 'Int'>
    readonly latitude: FieldRef<"Localization", 'Float'>
    readonly longitude: FieldRef<"Localization", 'Float'>
    readonly createdAt: FieldRef<"Localization", 'DateTime'>
    readonly updatedAt: FieldRef<"Localization", 'DateTime'>
    readonly deliveryId: FieldRef<"Localization", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Localization findUnique
   */
  export type LocalizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationInclude<ExtArgs> | null
    /**
     * Filter, which Localization to fetch.
     */
    where: LocalizationWhereUniqueInput
  }

  /**
   * Localization findUniqueOrThrow
   */
  export type LocalizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationInclude<ExtArgs> | null
    /**
     * Filter, which Localization to fetch.
     */
    where: LocalizationWhereUniqueInput
  }

  /**
   * Localization findFirst
   */
  export type LocalizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationInclude<ExtArgs> | null
    /**
     * Filter, which Localization to fetch.
     */
    where?: LocalizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizations to fetch.
     */
    orderBy?: LocalizationOrderByWithRelationInput | LocalizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizations.
     */
    cursor?: LocalizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizations.
     */
    distinct?: LocalizationScalarFieldEnum | LocalizationScalarFieldEnum[]
  }

  /**
   * Localization findFirstOrThrow
   */
  export type LocalizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationInclude<ExtArgs> | null
    /**
     * Filter, which Localization to fetch.
     */
    where?: LocalizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizations to fetch.
     */
    orderBy?: LocalizationOrderByWithRelationInput | LocalizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizations.
     */
    cursor?: LocalizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizations.
     */
    distinct?: LocalizationScalarFieldEnum | LocalizationScalarFieldEnum[]
  }

  /**
   * Localization findMany
   */
  export type LocalizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationInclude<ExtArgs> | null
    /**
     * Filter, which Localizations to fetch.
     */
    where?: LocalizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizations to fetch.
     */
    orderBy?: LocalizationOrderByWithRelationInput | LocalizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localizations.
     */
    cursor?: LocalizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizations.
     */
    skip?: number
    distinct?: LocalizationScalarFieldEnum | LocalizationScalarFieldEnum[]
  }

  /**
   * Localization create
   */
  export type LocalizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Localization.
     */
    data: XOR<LocalizationCreateInput, LocalizationUncheckedCreateInput>
  }

  /**
   * Localization createMany
   */
  export type LocalizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localizations.
     */
    data: LocalizationCreateManyInput | LocalizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Localization createManyAndReturn
   */
  export type LocalizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * The data used to create many Localizations.
     */
    data: LocalizationCreateManyInput | LocalizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Localization update
   */
  export type LocalizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Localization.
     */
    data: XOR<LocalizationUpdateInput, LocalizationUncheckedUpdateInput>
    /**
     * Choose, which Localization to update.
     */
    where: LocalizationWhereUniqueInput
  }

  /**
   * Localization updateMany
   */
  export type LocalizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localizations.
     */
    data: XOR<LocalizationUpdateManyMutationInput, LocalizationUncheckedUpdateManyInput>
    /**
     * Filter which Localizations to update
     */
    where?: LocalizationWhereInput
    /**
     * Limit how many Localizations to update.
     */
    limit?: number
  }

  /**
   * Localization updateManyAndReturn
   */
  export type LocalizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * The data used to update Localizations.
     */
    data: XOR<LocalizationUpdateManyMutationInput, LocalizationUncheckedUpdateManyInput>
    /**
     * Filter which Localizations to update
     */
    where?: LocalizationWhereInput
    /**
     * Limit how many Localizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Localization upsert
   */
  export type LocalizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Localization to update in case it exists.
     */
    where: LocalizationWhereUniqueInput
    /**
     * In case the Localization found by the `where` argument doesn't exist, create a new Localization with this data.
     */
    create: XOR<LocalizationCreateInput, LocalizationUncheckedCreateInput>
    /**
     * In case the Localization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalizationUpdateInput, LocalizationUncheckedUpdateInput>
  }

  /**
   * Localization delete
   */
  export type LocalizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationInclude<ExtArgs> | null
    /**
     * Filter which Localization to delete.
     */
    where: LocalizationWhereUniqueInput
  }

  /**
   * Localization deleteMany
   */
  export type LocalizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizations to delete
     */
    where?: LocalizationWhereInput
    /**
     * Limit how many Localizations to delete.
     */
    limit?: number
  }

  /**
   * Localization.Delivery
   */
  export type Localization$DeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
  }

  /**
   * Localization without action
   */
  export type LocalizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationInclude<ExtArgs> | null
  }


  /**
   * Model Delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    id: number | null
    higth: number | null
    width: number | null
    length: number | null
    weight: number | null
    price: number | null
    deliveryManId: number | null
  }

  export type DeliverySumAggregateOutputType = {
    id: number | null
    higth: number | null
    width: number | null
    length: number | null
    weight: number | null
    price: number | null
    deliveryManId: number | null
  }

  export type DeliveryMinAggregateOutputType = {
    id: number | null
    code: string | null
    higth: number | null
    width: number | null
    length: number | null
    weight: number | null
    price: number | null
    status: $Enums.DeliveryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deliveryManId: number | null
  }

  export type DeliveryMaxAggregateOutputType = {
    id: number | null
    code: string | null
    higth: number | null
    width: number | null
    length: number | null
    weight: number | null
    price: number | null
    status: $Enums.DeliveryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deliveryManId: number | null
  }

  export type DeliveryCountAggregateOutputType = {
    id: number
    code: number
    higth: number
    width: number
    length: number
    weight: number
    price: number
    info: number
    status: number
    createdAt: number
    updatedAt: number
    deliveryManId: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    id?: true
    higth?: true
    width?: true
    length?: true
    weight?: true
    price?: true
    deliveryManId?: true
  }

  export type DeliverySumAggregateInputType = {
    id?: true
    higth?: true
    width?: true
    length?: true
    weight?: true
    price?: true
    deliveryManId?: true
  }

  export type DeliveryMinAggregateInputType = {
    id?: true
    code?: true
    higth?: true
    width?: true
    length?: true
    weight?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deliveryManId?: true
  }

  export type DeliveryMaxAggregateInputType = {
    id?: true
    code?: true
    higth?: true
    width?: true
    length?: true
    weight?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deliveryManId?: true
  }

  export type DeliveryCountAggregateInputType = {
    id?: true
    code?: true
    higth?: true
    width?: true
    length?: true
    weight?: true
    price?: true
    info?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deliveryManId?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delivery to aggregate.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type DeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithAggregationInput | DeliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: DeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    id: number
    code: string
    higth: number
    width: number
    length: number
    weight: number
    price: number
    info: string[]
    status: $Enums.DeliveryStatus
    createdAt: Date
    updatedAt: Date
    deliveryManId: number | null
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type DeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    higth?: boolean
    width?: boolean
    length?: boolean
    weight?: boolean
    price?: boolean
    info?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryManId?: boolean
    DeliveryMan?: boolean | Delivery$DeliveryManArgs<ExtArgs>
    Localization?: boolean | Delivery$LocalizationArgs<ExtArgs>
    _count?: boolean | DeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    higth?: boolean
    width?: boolean
    length?: boolean
    weight?: boolean
    price?: boolean
    info?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryManId?: boolean
    DeliveryMan?: boolean | Delivery$DeliveryManArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    higth?: boolean
    width?: boolean
    length?: boolean
    weight?: boolean
    price?: boolean
    info?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryManId?: boolean
    DeliveryMan?: boolean | Delivery$DeliveryManArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectScalar = {
    id?: boolean
    code?: boolean
    higth?: boolean
    width?: boolean
    length?: boolean
    weight?: boolean
    price?: boolean
    info?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryManId?: boolean
  }

  export type DeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "higth" | "width" | "length" | "weight" | "price" | "info" | "status" | "createdAt" | "updatedAt" | "deliveryManId", ExtArgs["result"]["delivery"]>
  export type DeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DeliveryMan?: boolean | Delivery$DeliveryManArgs<ExtArgs>
    Localization?: boolean | Delivery$LocalizationArgs<ExtArgs>
    _count?: boolean | DeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DeliveryMan?: boolean | Delivery$DeliveryManArgs<ExtArgs>
  }
  export type DeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DeliveryMan?: boolean | Delivery$DeliveryManArgs<ExtArgs>
  }

  export type $DeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delivery"
    objects: {
      DeliveryMan: Prisma.$DeliveryManPayload<ExtArgs> | null
      Localization: Prisma.$LocalizationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      higth: number
      width: number
      length: number
      weight: number
      price: number
      info: string[]
      status: $Enums.DeliveryStatus
      createdAt: Date
      updatedAt: Date
      deliveryManId: number | null
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }

  type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPayload, S>

  type DeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface DeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delivery'], meta: { name: 'Delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {DeliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryFindUniqueArgs>(args: SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryFindFirstArgs>(args?: SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryWithIdOnly = await prisma.delivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryFindManyArgs>(args?: SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delivery.
     * @param {DeliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
     */
    create<T extends DeliveryCreateArgs>(args: SelectSubset<T, DeliveryCreateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {DeliveryCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryCreateManyArgs>(args?: SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {DeliveryCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `id`
     * const deliveryWithIdOnly = await prisma.delivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Delivery.
     * @param {DeliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
     */
    delete<T extends DeliveryDeleteArgs>(args: SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delivery.
     * @param {DeliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryUpdateArgs>(args: SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryDeleteManyArgs>(args?: SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryUpdateManyArgs>(args: SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries and returns the data updated in the database.
     * @param {DeliveryUpdateManyAndReturnArgs} args - Arguments to update many Deliveries.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliveries and only return the `id`
     * const deliveryWithIdOnly = await prisma.delivery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Delivery.
     * @param {DeliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryUpsertArgs>(args: SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveryCountArgs>(
      args?: Subset<T, DeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delivery model
   */
  readonly fields: DeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DeliveryMan<T extends Delivery$DeliveryManArgs<ExtArgs> = {}>(args?: Subset<T, Delivery$DeliveryManArgs<ExtArgs>>): Prisma__DeliveryManClient<$Result.GetResult<Prisma.$DeliveryManPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Localization<T extends Delivery$LocalizationArgs<ExtArgs> = {}>(args?: Subset<T, Delivery$LocalizationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Delivery model
   */
  interface DeliveryFieldRefs {
    readonly id: FieldRef<"Delivery", 'Int'>
    readonly code: FieldRef<"Delivery", 'String'>
    readonly higth: FieldRef<"Delivery", 'Float'>
    readonly width: FieldRef<"Delivery", 'Float'>
    readonly length: FieldRef<"Delivery", 'Float'>
    readonly weight: FieldRef<"Delivery", 'Float'>
    readonly price: FieldRef<"Delivery", 'Float'>
    readonly info: FieldRef<"Delivery", 'String[]'>
    readonly status: FieldRef<"Delivery", 'DeliveryStatus'>
    readonly createdAt: FieldRef<"Delivery", 'DateTime'>
    readonly updatedAt: FieldRef<"Delivery", 'DateTime'>
    readonly deliveryManId: FieldRef<"Delivery", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Delivery findUnique
   */
  export type DeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findUniqueOrThrow
   */
  export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findFirst
   */
  export type DeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findFirstOrThrow
   */
  export type DeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findMany
   */
  export type DeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery create
   */
  export type DeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a Delivery.
     */
    data: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
  }

  /**
   * Delivery createMany
   */
  export type DeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Delivery createManyAndReturn
   */
  export type DeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery update
   */
  export type DeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a Delivery.
     */
    data: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
    /**
     * Choose, which Delivery to update.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery updateMany
   */
  export type DeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
  }

  /**
   * Delivery updateManyAndReturn
   */
  export type DeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery upsert
   */
  export type DeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the Delivery to update in case it exists.
     */
    where: DeliveryWhereUniqueInput
    /**
     * In case the Delivery found by the `where` argument doesn't exist, create a new Delivery with this data.
     */
    create: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
    /**
     * In case the Delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
  }

  /**
   * Delivery delete
   */
  export type DeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter which Delivery to delete.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery deleteMany
   */
  export type DeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to delete.
     */
    limit?: number
  }

  /**
   * Delivery.DeliveryMan
   */
  export type Delivery$DeliveryManArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryMan
     */
    select?: DeliveryManSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryMan
     */
    omit?: DeliveryManOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryManInclude<ExtArgs> | null
    where?: DeliveryManWhereInput
  }

  /**
   * Delivery.Localization
   */
  export type Delivery$LocalizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localization
     */
    select?: LocalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localization
     */
    omit?: LocalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizationInclude<ExtArgs> | null
    where?: LocalizationWhereInput
    orderBy?: LocalizationOrderByWithRelationInput | LocalizationOrderByWithRelationInput[]
    cursor?: LocalizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocalizationScalarFieldEnum | LocalizationScalarFieldEnum[]
  }

  /**
   * Delivery without action
   */
  export type DeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    street: string | null
    number: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street: number
    number: number
    city: number
    state: number
    zipCode: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street?: true
    number?: true
    city?: true
    state?: true
    zipCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Client?: boolean | Address$ClientArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street" | "number" | "city" | "state" | "zipCode" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Client?: boolean | Address$ClientArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      Client: Prisma.$ClientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      street: string
      number: string
      city: string
      state: string
      zipCode: string
      country: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Client<T extends Address$ClientArgs<ExtArgs> = {}>(args?: Subset<T, Address$ClientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly street: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly zipCode: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.Client
   */
  export type Address$ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
    addressId: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
    addressId: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    addressId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    addressId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    addressId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
    addressId?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
    addressId?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    addressId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    addressId: number
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Adress?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Adress?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Adress?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    addressId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "addressId" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adress?: boolean | AddressDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adress?: boolean | AddressDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adress?: boolean | AddressDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      Adress: Prisma.$AddressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      addressId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Adress<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly addressId: FieldRef<"Client", 'Int'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    information: 'information',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    balanceId: 'balanceId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdressScalarFieldEnum: {
    id: 'id',
    street: 'street',
    number: 'number',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
    complement: 'complement',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdressScalarFieldEnum = (typeof AdressScalarFieldEnum)[keyof typeof AdressScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    cnpj: 'cnpj',
    idAddress: 'idAddress',
    idUser: 'idUser',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const VehicleTypeScalarFieldEnum: {
    id: 'id',
    type: 'type',
    pricePerKm: 'pricePerKm',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleTypeScalarFieldEnum = (typeof VehicleTypeScalarFieldEnum)[keyof typeof VehicleTypeScalarFieldEnum]


  export const ProfitMarginScalarFieldEnum: {
    id: 'id',
    percentage: 'percentage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfitMarginScalarFieldEnum = (typeof ProfitMarginScalarFieldEnum)[keyof typeof ProfitMarginScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const ExtractScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ExtractScalarFieldEnum = (typeof ExtractScalarFieldEnum)[keyof typeof ExtractScalarFieldEnum]


  export const DeliveryManScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type DeliveryManScalarFieldEnum = (typeof DeliveryManScalarFieldEnum)[keyof typeof DeliveryManScalarFieldEnum]


  export const LocalizationScalarFieldEnum: {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deliveryId: 'deliveryId'
  };

  export type LocalizationScalarFieldEnum = (typeof LocalizationScalarFieldEnum)[keyof typeof LocalizationScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    higth: 'higth',
    width: 'width',
    length: 'length',
    weight: 'weight',
    price: 'price',
    info: 'info',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deliveryManId: 'deliveryManId'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    street: 'street',
    number: 'number',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    addressId: 'addressId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ExtractType'
   */
  export type EnumExtractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtractType'>
    


  /**
   * Reference to a field of type 'ExtractType[]'
   */
  export type ListEnumExtractTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtractType[]'>
    


  /**
   * Reference to a field of type 'DeliveryStatus'
   */
  export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>
    


  /**
   * Reference to a field of type 'DeliveryStatus[]'
   */
  export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    information?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    balanceId?: IntFilter<"User"> | number
    Balance?: XOR<BalanceScalarRelationFilter, BalanceWhereInput>
    Extract?: ExtractListRelationFilter
    DeliveryMan?: XOR<DeliveryManNullableScalarRelationFilter, DeliveryManWhereInput> | null
    Company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    information?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balanceId?: SortOrder
    Balance?: BalanceOrderByWithRelationInput
    Extract?: ExtractOrderByRelationAggregateInput
    DeliveryMan?: DeliveryManOrderByWithRelationInput
    Company?: CompanyOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    information?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    balanceId?: IntFilter<"User"> | number
    Balance?: XOR<BalanceScalarRelationFilter, BalanceWhereInput>
    Extract?: ExtractListRelationFilter
    DeliveryMan?: XOR<DeliveryManNullableScalarRelationFilter, DeliveryManWhereInput> | null
    Company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    information?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balanceId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    information?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    balanceId?: IntWithAggregatesFilter<"User"> | number
  }

  export type AdressWhereInput = {
    AND?: AdressWhereInput | AdressWhereInput[]
    OR?: AdressWhereInput[]
    NOT?: AdressWhereInput | AdressWhereInput[]
    id?: IntFilter<"Adress"> | number
    street?: StringFilter<"Adress"> | string
    number?: StringFilter<"Adress"> | string
    city?: StringFilter<"Adress"> | string
    state?: StringFilter<"Adress"> | string
    zipCode?: StringFilter<"Adress"> | string
    country?: StringFilter<"Adress"> | string
    complement?: StringNullableFilter<"Adress"> | string | null
    createdAt?: DateTimeFilter<"Adress"> | Date | string
    updatedAt?: DateTimeFilter<"Adress"> | Date | string
    Company?: CompanyListRelationFilter
  }

  export type AdressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    complement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Company?: CompanyOrderByRelationAggregateInput
  }

  export type AdressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdressWhereInput | AdressWhereInput[]
    OR?: AdressWhereInput[]
    NOT?: AdressWhereInput | AdressWhereInput[]
    street?: StringFilter<"Adress"> | string
    number?: StringFilter<"Adress"> | string
    city?: StringFilter<"Adress"> | string
    state?: StringFilter<"Adress"> | string
    zipCode?: StringFilter<"Adress"> | string
    country?: StringFilter<"Adress"> | string
    complement?: StringNullableFilter<"Adress"> | string | null
    createdAt?: DateTimeFilter<"Adress"> | Date | string
    updatedAt?: DateTimeFilter<"Adress"> | Date | string
    Company?: CompanyListRelationFilter
  }, "id">

  export type AdressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    complement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdressCountOrderByAggregateInput
    _avg?: AdressAvgOrderByAggregateInput
    _max?: AdressMaxOrderByAggregateInput
    _min?: AdressMinOrderByAggregateInput
    _sum?: AdressSumOrderByAggregateInput
  }

  export type AdressScalarWhereWithAggregatesInput = {
    AND?: AdressScalarWhereWithAggregatesInput | AdressScalarWhereWithAggregatesInput[]
    OR?: AdressScalarWhereWithAggregatesInput[]
    NOT?: AdressScalarWhereWithAggregatesInput | AdressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Adress"> | number
    street?: StringWithAggregatesFilter<"Adress"> | string
    number?: StringWithAggregatesFilter<"Adress"> | string
    city?: StringWithAggregatesFilter<"Adress"> | string
    state?: StringWithAggregatesFilter<"Adress"> | string
    zipCode?: StringWithAggregatesFilter<"Adress"> | string
    country?: StringWithAggregatesFilter<"Adress"> | string
    complement?: StringNullableWithAggregatesFilter<"Adress"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Adress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Adress"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    cnpj?: StringFilter<"Company"> | string
    idAddress?: IntFilter<"Company"> | number
    idUser?: IntFilter<"Company"> | number
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    Adress?: XOR<AdressScalarRelationFilter, AdressWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    cnpj?: SortOrder
    idAddress?: SortOrder
    idUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Adress?: AdressOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cnpj?: string
    idUser?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    idAddress?: IntFilter<"Company"> | number
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    Adress?: XOR<AdressScalarRelationFilter, AdressWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "cnpj" | "idUser">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    cnpj?: SortOrder
    idAddress?: SortOrder
    idUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
    phone?: StringWithAggregatesFilter<"Company"> | string
    cnpj?: StringWithAggregatesFilter<"Company"> | string
    idAddress?: IntWithAggregatesFilter<"Company"> | number
    idUser?: IntWithAggregatesFilter<"Company"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type VehicleTypeWhereInput = {
    AND?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    OR?: VehicleTypeWhereInput[]
    NOT?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    id?: IntFilter<"VehicleType"> | number
    type?: StringFilter<"VehicleType"> | string
    pricePerKm?: FloatFilter<"VehicleType"> | number
    createdAt?: DateTimeFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleType"> | Date | string
  }

  export type VehicleTypeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    pricePerKm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    type?: string
    AND?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    OR?: VehicleTypeWhereInput[]
    NOT?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    pricePerKm?: FloatFilter<"VehicleType"> | number
    createdAt?: DateTimeFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleType"> | Date | string
  }, "id" | "type">

  export type VehicleTypeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    pricePerKm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleTypeCountOrderByAggregateInput
    _avg?: VehicleTypeAvgOrderByAggregateInput
    _max?: VehicleTypeMaxOrderByAggregateInput
    _min?: VehicleTypeMinOrderByAggregateInput
    _sum?: VehicleTypeSumOrderByAggregateInput
  }

  export type VehicleTypeScalarWhereWithAggregatesInput = {
    AND?: VehicleTypeScalarWhereWithAggregatesInput | VehicleTypeScalarWhereWithAggregatesInput[]
    OR?: VehicleTypeScalarWhereWithAggregatesInput[]
    NOT?: VehicleTypeScalarWhereWithAggregatesInput | VehicleTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VehicleType"> | number
    type?: StringWithAggregatesFilter<"VehicleType"> | string
    pricePerKm?: FloatWithAggregatesFilter<"VehicleType"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VehicleType"> | Date | string
  }

  export type ProfitMarginWhereInput = {
    AND?: ProfitMarginWhereInput | ProfitMarginWhereInput[]
    OR?: ProfitMarginWhereInput[]
    NOT?: ProfitMarginWhereInput | ProfitMarginWhereInput[]
    id?: IntFilter<"ProfitMargin"> | number
    percentage?: FloatFilter<"ProfitMargin"> | number
    createdAt?: DateTimeFilter<"ProfitMargin"> | Date | string
    updatedAt?: DateTimeFilter<"ProfitMargin"> | Date | string
  }

  export type ProfitMarginOrderByWithRelationInput = {
    id?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfitMarginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfitMarginWhereInput | ProfitMarginWhereInput[]
    OR?: ProfitMarginWhereInput[]
    NOT?: ProfitMarginWhereInput | ProfitMarginWhereInput[]
    percentage?: FloatFilter<"ProfitMargin"> | number
    createdAt?: DateTimeFilter<"ProfitMargin"> | Date | string
    updatedAt?: DateTimeFilter<"ProfitMargin"> | Date | string
  }, "id">

  export type ProfitMarginOrderByWithAggregationInput = {
    id?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfitMarginCountOrderByAggregateInput
    _avg?: ProfitMarginAvgOrderByAggregateInput
    _max?: ProfitMarginMaxOrderByAggregateInput
    _min?: ProfitMarginMinOrderByAggregateInput
    _sum?: ProfitMarginSumOrderByAggregateInput
  }

  export type ProfitMarginScalarWhereWithAggregatesInput = {
    AND?: ProfitMarginScalarWhereWithAggregatesInput | ProfitMarginScalarWhereWithAggregatesInput[]
    OR?: ProfitMarginScalarWhereWithAggregatesInput[]
    NOT?: ProfitMarginScalarWhereWithAggregatesInput | ProfitMarginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProfitMargin"> | number
    percentage?: FloatWithAggregatesFilter<"ProfitMargin"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProfitMargin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfitMargin"> | Date | string
  }

  export type BalanceWhereInput = {
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    id?: IntFilter<"Balance"> | number
    amount?: FloatFilter<"Balance"> | number
    createdAt?: DateTimeFilter<"Balance"> | Date | string
    updatedAt?: DateTimeFilter<"Balance"> | Date | string
    User?: UserListRelationFilter
  }

  export type BalanceOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByRelationAggregateInput
  }

  export type BalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    amount?: FloatFilter<"Balance"> | number
    createdAt?: DateTimeFilter<"Balance"> | Date | string
    updatedAt?: DateTimeFilter<"Balance"> | Date | string
    User?: UserListRelationFilter
  }, "id">

  export type BalanceOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BalanceCountOrderByAggregateInput
    _avg?: BalanceAvgOrderByAggregateInput
    _max?: BalanceMaxOrderByAggregateInput
    _min?: BalanceMinOrderByAggregateInput
    _sum?: BalanceSumOrderByAggregateInput
  }

  export type BalanceScalarWhereWithAggregatesInput = {
    AND?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    OR?: BalanceScalarWhereWithAggregatesInput[]
    NOT?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Balance"> | number
    amount?: FloatWithAggregatesFilter<"Balance"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Balance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Balance"> | Date | string
  }

  export type ExtractWhereInput = {
    AND?: ExtractWhereInput | ExtractWhereInput[]
    OR?: ExtractWhereInput[]
    NOT?: ExtractWhereInput | ExtractWhereInput[]
    id?: IntFilter<"Extract"> | number
    amount?: FloatFilter<"Extract"> | number
    type?: EnumExtractTypeFilter<"Extract"> | $Enums.ExtractType
    createdAt?: DateTimeFilter<"Extract"> | Date | string
    updatedAt?: DateTimeFilter<"Extract"> | Date | string
    userId?: IntNullableFilter<"Extract"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ExtractOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type ExtractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExtractWhereInput | ExtractWhereInput[]
    OR?: ExtractWhereInput[]
    NOT?: ExtractWhereInput | ExtractWhereInput[]
    amount?: FloatFilter<"Extract"> | number
    type?: EnumExtractTypeFilter<"Extract"> | $Enums.ExtractType
    createdAt?: DateTimeFilter<"Extract"> | Date | string
    updatedAt?: DateTimeFilter<"Extract"> | Date | string
    userId?: IntNullableFilter<"Extract"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ExtractOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ExtractCountOrderByAggregateInput
    _avg?: ExtractAvgOrderByAggregateInput
    _max?: ExtractMaxOrderByAggregateInput
    _min?: ExtractMinOrderByAggregateInput
    _sum?: ExtractSumOrderByAggregateInput
  }

  export type ExtractScalarWhereWithAggregatesInput = {
    AND?: ExtractScalarWhereWithAggregatesInput | ExtractScalarWhereWithAggregatesInput[]
    OR?: ExtractScalarWhereWithAggregatesInput[]
    NOT?: ExtractScalarWhereWithAggregatesInput | ExtractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Extract"> | number
    amount?: FloatWithAggregatesFilter<"Extract"> | number
    type?: EnumExtractTypeWithAggregatesFilter<"Extract"> | $Enums.ExtractType
    createdAt?: DateTimeWithAggregatesFilter<"Extract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Extract"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"Extract"> | number | null
  }

  export type DeliveryManWhereInput = {
    AND?: DeliveryManWhereInput | DeliveryManWhereInput[]
    OR?: DeliveryManWhereInput[]
    NOT?: DeliveryManWhereInput | DeliveryManWhereInput[]
    id?: IntFilter<"DeliveryMan"> | number
    name?: StringFilter<"DeliveryMan"> | string
    email?: StringFilter<"DeliveryMan"> | string
    phone?: StringFilter<"DeliveryMan"> | string
    address?: StringFilter<"DeliveryMan"> | string
    createdAt?: DateTimeFilter<"DeliveryMan"> | Date | string
    updatedAt?: DateTimeFilter<"DeliveryMan"> | Date | string
    userId?: IntFilter<"DeliveryMan"> | number
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Delivery?: DeliveryListRelationFilter
  }

  export type DeliveryManOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    Delivery?: DeliveryOrderByRelationAggregateInput
  }

  export type DeliveryManWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    userId?: number
    AND?: DeliveryManWhereInput | DeliveryManWhereInput[]
    OR?: DeliveryManWhereInput[]
    NOT?: DeliveryManWhereInput | DeliveryManWhereInput[]
    name?: StringFilter<"DeliveryMan"> | string
    phone?: StringFilter<"DeliveryMan"> | string
    address?: StringFilter<"DeliveryMan"> | string
    createdAt?: DateTimeFilter<"DeliveryMan"> | Date | string
    updatedAt?: DateTimeFilter<"DeliveryMan"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Delivery?: DeliveryListRelationFilter
  }, "id" | "email" | "userId">

  export type DeliveryManOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: DeliveryManCountOrderByAggregateInput
    _avg?: DeliveryManAvgOrderByAggregateInput
    _max?: DeliveryManMaxOrderByAggregateInput
    _min?: DeliveryManMinOrderByAggregateInput
    _sum?: DeliveryManSumOrderByAggregateInput
  }

  export type DeliveryManScalarWhereWithAggregatesInput = {
    AND?: DeliveryManScalarWhereWithAggregatesInput | DeliveryManScalarWhereWithAggregatesInput[]
    OR?: DeliveryManScalarWhereWithAggregatesInput[]
    NOT?: DeliveryManScalarWhereWithAggregatesInput | DeliveryManScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeliveryMan"> | number
    name?: StringWithAggregatesFilter<"DeliveryMan"> | string
    email?: StringWithAggregatesFilter<"DeliveryMan"> | string
    phone?: StringWithAggregatesFilter<"DeliveryMan"> | string
    address?: StringWithAggregatesFilter<"DeliveryMan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DeliveryMan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeliveryMan"> | Date | string
    userId?: IntWithAggregatesFilter<"DeliveryMan"> | number
  }

  export type LocalizationWhereInput = {
    AND?: LocalizationWhereInput | LocalizationWhereInput[]
    OR?: LocalizationWhereInput[]
    NOT?: LocalizationWhereInput | LocalizationWhereInput[]
    id?: IntFilter<"Localization"> | number
    latitude?: FloatFilter<"Localization"> | number
    longitude?: FloatFilter<"Localization"> | number
    createdAt?: DateTimeFilter<"Localization"> | Date | string
    updatedAt?: DateTimeFilter<"Localization"> | Date | string
    deliveryId?: IntNullableFilter<"Localization"> | number | null
    Delivery?: XOR<DeliveryNullableScalarRelationFilter, DeliveryWhereInput> | null
  }

  export type LocalizationOrderByWithRelationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryId?: SortOrderInput | SortOrder
    Delivery?: DeliveryOrderByWithRelationInput
  }

  export type LocalizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalizationWhereInput | LocalizationWhereInput[]
    OR?: LocalizationWhereInput[]
    NOT?: LocalizationWhereInput | LocalizationWhereInput[]
    latitude?: FloatFilter<"Localization"> | number
    longitude?: FloatFilter<"Localization"> | number
    createdAt?: DateTimeFilter<"Localization"> | Date | string
    updatedAt?: DateTimeFilter<"Localization"> | Date | string
    deliveryId?: IntNullableFilter<"Localization"> | number | null
    Delivery?: XOR<DeliveryNullableScalarRelationFilter, DeliveryWhereInput> | null
  }, "id">

  export type LocalizationOrderByWithAggregationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryId?: SortOrderInput | SortOrder
    _count?: LocalizationCountOrderByAggregateInput
    _avg?: LocalizationAvgOrderByAggregateInput
    _max?: LocalizationMaxOrderByAggregateInput
    _min?: LocalizationMinOrderByAggregateInput
    _sum?: LocalizationSumOrderByAggregateInput
  }

  export type LocalizationScalarWhereWithAggregatesInput = {
    AND?: LocalizationScalarWhereWithAggregatesInput | LocalizationScalarWhereWithAggregatesInput[]
    OR?: LocalizationScalarWhereWithAggregatesInput[]
    NOT?: LocalizationScalarWhereWithAggregatesInput | LocalizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Localization"> | number
    latitude?: FloatWithAggregatesFilter<"Localization"> | number
    longitude?: FloatWithAggregatesFilter<"Localization"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Localization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Localization"> | Date | string
    deliveryId?: IntNullableWithAggregatesFilter<"Localization"> | number | null
  }

  export type DeliveryWhereInput = {
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    id?: IntFilter<"Delivery"> | number
    code?: StringFilter<"Delivery"> | string
    higth?: FloatFilter<"Delivery"> | number
    width?: FloatFilter<"Delivery"> | number
    length?: FloatFilter<"Delivery"> | number
    weight?: FloatFilter<"Delivery"> | number
    price?: FloatFilter<"Delivery"> | number
    info?: StringNullableListFilter<"Delivery">
    status?: EnumDeliveryStatusFilter<"Delivery"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    deliveryManId?: IntNullableFilter<"Delivery"> | number | null
    DeliveryMan?: XOR<DeliveryManNullableScalarRelationFilter, DeliveryManWhereInput> | null
    Localization?: LocalizationListRelationFilter
  }

  export type DeliveryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    higth?: SortOrder
    width?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    info?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryManId?: SortOrderInput | SortOrder
    DeliveryMan?: DeliveryManOrderByWithRelationInput
    Localization?: LocalizationOrderByRelationAggregateInput
  }

  export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    higth?: FloatFilter<"Delivery"> | number
    width?: FloatFilter<"Delivery"> | number
    length?: FloatFilter<"Delivery"> | number
    weight?: FloatFilter<"Delivery"> | number
    price?: FloatFilter<"Delivery"> | number
    info?: StringNullableListFilter<"Delivery">
    status?: EnumDeliveryStatusFilter<"Delivery"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    deliveryManId?: IntNullableFilter<"Delivery"> | number | null
    DeliveryMan?: XOR<DeliveryManNullableScalarRelationFilter, DeliveryManWhereInput> | null
    Localization?: LocalizationListRelationFilter
  }, "id" | "code">

  export type DeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    higth?: SortOrder
    width?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    info?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryManId?: SortOrderInput | SortOrder
    _count?: DeliveryCountOrderByAggregateInput
    _avg?: DeliveryAvgOrderByAggregateInput
    _max?: DeliveryMaxOrderByAggregateInput
    _min?: DeliveryMinOrderByAggregateInput
    _sum?: DeliverySumOrderByAggregateInput
  }

  export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    OR?: DeliveryScalarWhereWithAggregatesInput[]
    NOT?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Delivery"> | number
    code?: StringWithAggregatesFilter<"Delivery"> | string
    higth?: FloatWithAggregatesFilter<"Delivery"> | number
    width?: FloatWithAggregatesFilter<"Delivery"> | number
    length?: FloatWithAggregatesFilter<"Delivery"> | number
    weight?: FloatWithAggregatesFilter<"Delivery"> | number
    price?: FloatWithAggregatesFilter<"Delivery"> | number
    info?: StringNullableListFilter<"Delivery">
    status?: EnumDeliveryStatusWithAggregatesFilter<"Delivery"> | $Enums.DeliveryStatus
    createdAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    deliveryManId?: IntNullableWithAggregatesFilter<"Delivery"> | number | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zipCode?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    Client?: ClientListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Client?: ClientOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringFilter<"Address"> | string
    number?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zipCode?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    Client?: ClientListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    street?: StringWithAggregatesFilter<"Address"> | string
    number?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    zipCode?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    addressId?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    Adress?: XOR<AddressScalarRelationFilter, AddressWhereInput>
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Adress?: AddressOrderByWithRelationInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    addressId?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    Adress?: XOR<AddressScalarRelationFilter, AddressWhereInput>
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
    addressId?: IntWithAggregatesFilter<"Client"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Balance: BalanceCreateNestedOneWithoutUserInput
    Extract?: ExtractCreateNestedManyWithoutUserInput
    DeliveryMan?: DeliveryManCreateNestedOneWithoutUserInput
    Company?: CompanyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceId: number
    Extract?: ExtractUncheckedCreateNestedManyWithoutUserInput
    DeliveryMan?: DeliveryManUncheckedCreateNestedOneWithoutUserInput
    Company?: CompanyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Balance?: BalanceUpdateOneRequiredWithoutUserNestedInput
    Extract?: ExtractUpdateManyWithoutUserNestedInput
    DeliveryMan?: DeliveryManUpdateOneWithoutUserNestedInput
    Company?: CompanyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceId?: IntFieldUpdateOperationsInput | number
    Extract?: ExtractUncheckedUpdateManyWithoutUserNestedInput
    DeliveryMan?: DeliveryManUncheckedUpdateOneWithoutUserNestedInput
    Company?: CompanyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceId: number
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceId?: IntFieldUpdateOperationsInput | number
  }

  export type AdressCreateInput = {
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Company?: CompanyCreateNestedManyWithoutAdressInput
  }

  export type AdressUncheckedCreateInput = {
    id?: number
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Company?: CompanyUncheckedCreateNestedManyWithoutAdressInput
  }

  export type AdressUpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Company?: CompanyUpdateManyWithoutAdressNestedInput
  }

  export type AdressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Company?: CompanyUncheckedUpdateManyWithoutAdressNestedInput
  }

  export type AdressCreateManyInput = {
    id?: number
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdressUpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    name: string
    phone: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adress: AdressCreateNestedOneWithoutCompanyInput
    User: UserCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    cnpj: string
    idAddress: number
    idUser: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adress?: AdressUpdateOneRequiredWithoutCompanyNestedInput
    User?: UserUpdateOneRequiredWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    idAddress?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
    phone: string
    cnpj: string
    idAddress: number
    idUser: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    idAddress?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleTypeCreateInput = {
    type: string
    pricePerKm?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleTypeUncheckedCreateInput = {
    id?: number
    type: string
    pricePerKm?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleTypeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    pricePerKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    pricePerKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleTypeCreateManyInput = {
    id?: number
    type: string
    pricePerKm?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleTypeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    pricePerKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    pricePerKm?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitMarginCreateInput = {
    percentage?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfitMarginUncheckedCreateInput = {
    id?: number
    percentage?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfitMarginUpdateInput = {
    percentage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitMarginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitMarginCreateManyInput = {
    id?: number
    percentage?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfitMarginUpdateManyMutationInput = {
    percentage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitMarginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceCreateInput = {
    amount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedManyWithoutBalanceInput
  }

  export type BalanceUncheckedCreateInput = {
    id?: number
    amount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutBalanceInput
  }

  export type BalanceUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutBalanceNestedInput
  }

  export type BalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutBalanceNestedInput
  }

  export type BalanceCreateManyInput = {
    id?: number
    amount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalanceUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtractCreateInput = {
    amount?: number
    type: $Enums.ExtractType
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutExtractInput
  }

  export type ExtractUncheckedCreateInput = {
    id?: number
    amount?: number
    type: $Enums.ExtractType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type ExtractUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutExtractNestedInput
  }

  export type ExtractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExtractCreateManyInput = {
    id?: number
    amount?: number
    type: $Enums.ExtractType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: number | null
  }

  export type ExtractUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DeliveryManCreateInput = {
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutDeliveryManInput
    Delivery?: DeliveryCreateNestedManyWithoutDeliveryManInput
  }

  export type DeliveryManUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    Delivery?: DeliveryUncheckedCreateNestedManyWithoutDeliveryManInput
  }

  export type DeliveryManUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutDeliveryManNestedInput
    Delivery?: DeliveryUpdateManyWithoutDeliveryManNestedInput
  }

  export type DeliveryManUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    Delivery?: DeliveryUncheckedUpdateManyWithoutDeliveryManNestedInput
  }

  export type DeliveryManCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type DeliveryManUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryManUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LocalizationCreateInput = {
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Delivery?: DeliveryCreateNestedOneWithoutLocalizationInput
  }

  export type LocalizationUncheckedCreateInput = {
    id?: number
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryId?: number | null
  }

  export type LocalizationUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Delivery?: DeliveryUpdateOneWithoutLocalizationNestedInput
  }

  export type LocalizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocalizationCreateManyInput = {
    id?: number
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryId?: number | null
  }

  export type LocalizationUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DeliveryCreateInput = {
    code: string
    higth: number
    width: number
    length: number
    weight: number
    price: number
    info?: DeliveryCreateinfoInput | string[]
    status: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    DeliveryMan?: DeliveryManCreateNestedOneWithoutDeliveryInput
    Localization?: LocalizationCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateInput = {
    id?: number
    code: string
    higth: number
    width: number
    length: number
    weight: number
    price: number
    info?: DeliveryCreateinfoInput | string[]
    status: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryManId?: number | null
    Localization?: LocalizationUncheckedCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    higth?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    info?: DeliveryUpdateinfoInput | string[]
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeliveryMan?: DeliveryManUpdateOneWithoutDeliveryNestedInput
    Localization?: LocalizationUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    higth?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    info?: DeliveryUpdateinfoInput | string[]
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryManId?: NullableIntFieldUpdateOperationsInput | number | null
    Localization?: LocalizationUncheckedUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryCreateManyInput = {
    id?: number
    code: string
    higth: number
    width: number
    length: number
    weight: number
    price: number
    info?: DeliveryCreateinfoInput | string[]
    status: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryManId?: number | null
  }

  export type DeliveryUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    higth?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    info?: DeliveryUpdateinfoInput | string[]
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    higth?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    info?: DeliveryUpdateinfoInput | string[]
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryManId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AddressCreateInput = {
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Client?: ClientCreateNestedManyWithoutAdressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Client?: ClientUncheckedCreateNestedManyWithoutAdressInput
  }

  export type AddressUpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Client?: ClientUpdateManyWithoutAdressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Client?: ClientUncheckedUpdateManyWithoutAdressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adress: AddressCreateNestedOneWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adress?: AddressUpdateOneRequiredWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    addressId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    addressId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BalanceScalarRelationFilter = {
    is?: BalanceWhereInput
    isNot?: BalanceWhereInput
  }

  export type ExtractListRelationFilter = {
    every?: ExtractWhereInput
    some?: ExtractWhereInput
    none?: ExtractWhereInput
  }

  export type DeliveryManNullableScalarRelationFilter = {
    is?: DeliveryManWhereInput | null
    isNot?: DeliveryManWhereInput | null
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type ExtractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    information?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balanceId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    balanceId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    information?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balanceId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    information?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    balanceId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    balanceId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    complement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    complement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    complement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdressSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AdressScalarRelationFilter = {
    is?: AdressWhereInput
    isNot?: AdressWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    cnpj?: SortOrder
    idAddress?: SortOrder
    idUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    idAddress?: SortOrder
    idUser?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    cnpj?: SortOrder
    idAddress?: SortOrder
    idUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    cnpj?: SortOrder
    idAddress?: SortOrder
    idUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
    idAddress?: SortOrder
    idUser?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VehicleTypeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    pricePerKm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    pricePerKm?: SortOrder
  }

  export type VehicleTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    pricePerKm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleTypeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    pricePerKm?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleTypeSumOrderByAggregateInput = {
    id?: SortOrder
    pricePerKm?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProfitMarginCountOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfitMarginAvgOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
  }

  export type ProfitMarginMaxOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfitMarginMinOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfitMarginSumOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BalanceCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type BalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BalanceMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BalanceSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type EnumExtractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractType | EnumExtractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractTypeFilter<$PrismaModel> | $Enums.ExtractType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ExtractCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ExtractAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type ExtractMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ExtractMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ExtractSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type EnumExtractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractType | EnumExtractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExtractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExtractTypeFilter<$PrismaModel>
    _max?: NestedEnumExtractTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DeliveryListRelationFilter = {
    every?: DeliveryWhereInput
    some?: DeliveryWhereInput
    none?: DeliveryWhereInput
  }

  export type DeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryManCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DeliveryManAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DeliveryManMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DeliveryManMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DeliveryManSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DeliveryNullableScalarRelationFilter = {
    is?: DeliveryWhereInput | null
    isNot?: DeliveryWhereInput | null
  }

  export type LocalizationCountOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryId?: SortOrder
  }

  export type LocalizationAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    deliveryId?: SortOrder
  }

  export type LocalizationMaxOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryId?: SortOrder
  }

  export type LocalizationMinOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryId?: SortOrder
  }

  export type LocalizationSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    deliveryId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type LocalizationListRelationFilter = {
    every?: LocalizationWhereInput
    some?: LocalizationWhereInput
    none?: LocalizationWhereInput
  }

  export type LocalizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    higth?: SortOrder
    width?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    info?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryManId?: SortOrder
  }

  export type DeliveryAvgOrderByAggregateInput = {
    id?: SortOrder
    higth?: SortOrder
    width?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    deliveryManId?: SortOrder
  }

  export type DeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    higth?: SortOrder
    width?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryManId?: SortOrder
  }

  export type DeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    higth?: SortOrder
    width?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryManId?: SortOrder
  }

  export type DeliverySumOrderByAggregateInput = {
    id?: SortOrder
    higth?: SortOrder
    width?: SortOrder
    length?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    deliveryManId?: SortOrder
  }

  export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
    addressId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    addressId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
    addressId?: SortOrder
  }

  export type BalanceCreateNestedOneWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput
    connect?: BalanceWhereUniqueInput
  }

  export type ExtractCreateNestedManyWithoutUserInput = {
    create?: XOR<ExtractCreateWithoutUserInput, ExtractUncheckedCreateWithoutUserInput> | ExtractCreateWithoutUserInput[] | ExtractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExtractCreateOrConnectWithoutUserInput | ExtractCreateOrConnectWithoutUserInput[]
    createMany?: ExtractCreateManyUserInputEnvelope
    connect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
  }

  export type DeliveryManCreateNestedOneWithoutUserInput = {
    create?: XOR<DeliveryManCreateWithoutUserInput, DeliveryManUncheckedCreateWithoutUserInput>
    connectOrCreate?: DeliveryManCreateOrConnectWithoutUserInput
    connect?: DeliveryManWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    connect?: CompanyWhereUniqueInput
  }

  export type ExtractUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExtractCreateWithoutUserInput, ExtractUncheckedCreateWithoutUserInput> | ExtractCreateWithoutUserInput[] | ExtractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExtractCreateOrConnectWithoutUserInput | ExtractCreateOrConnectWithoutUserInput[]
    createMany?: ExtractCreateManyUserInputEnvelope
    connect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
  }

  export type DeliveryManUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DeliveryManCreateWithoutUserInput, DeliveryManUncheckedCreateWithoutUserInput>
    connectOrCreate?: DeliveryManCreateOrConnectWithoutUserInput
    connect?: DeliveryManWhereUniqueInput
  }

  export type CompanyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    connect?: CompanyWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BalanceUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput
    upsert?: BalanceUpsertWithoutUserInput
    connect?: BalanceWhereUniqueInput
    update?: XOR<XOR<BalanceUpdateToOneWithWhereWithoutUserInput, BalanceUpdateWithoutUserInput>, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type ExtractUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExtractCreateWithoutUserInput, ExtractUncheckedCreateWithoutUserInput> | ExtractCreateWithoutUserInput[] | ExtractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExtractCreateOrConnectWithoutUserInput | ExtractCreateOrConnectWithoutUserInput[]
    upsert?: ExtractUpsertWithWhereUniqueWithoutUserInput | ExtractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExtractCreateManyUserInputEnvelope
    set?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    disconnect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    delete?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    connect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    update?: ExtractUpdateWithWhereUniqueWithoutUserInput | ExtractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExtractUpdateManyWithWhereWithoutUserInput | ExtractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExtractScalarWhereInput | ExtractScalarWhereInput[]
  }

  export type DeliveryManUpdateOneWithoutUserNestedInput = {
    create?: XOR<DeliveryManCreateWithoutUserInput, DeliveryManUncheckedCreateWithoutUserInput>
    connectOrCreate?: DeliveryManCreateOrConnectWithoutUserInput
    upsert?: DeliveryManUpsertWithoutUserInput
    disconnect?: DeliveryManWhereInput | boolean
    delete?: DeliveryManWhereInput | boolean
    connect?: DeliveryManWhereUniqueInput
    update?: XOR<XOR<DeliveryManUpdateToOneWithWhereWithoutUserInput, DeliveryManUpdateWithoutUserInput>, DeliveryManUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    upsert?: CompanyUpsertWithoutUserInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUserInput, CompanyUpdateWithoutUserInput>, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExtractUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExtractCreateWithoutUserInput, ExtractUncheckedCreateWithoutUserInput> | ExtractCreateWithoutUserInput[] | ExtractUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExtractCreateOrConnectWithoutUserInput | ExtractCreateOrConnectWithoutUserInput[]
    upsert?: ExtractUpsertWithWhereUniqueWithoutUserInput | ExtractUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExtractCreateManyUserInputEnvelope
    set?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    disconnect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    delete?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    connect?: ExtractWhereUniqueInput | ExtractWhereUniqueInput[]
    update?: ExtractUpdateWithWhereUniqueWithoutUserInput | ExtractUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExtractUpdateManyWithWhereWithoutUserInput | ExtractUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExtractScalarWhereInput | ExtractScalarWhereInput[]
  }

  export type DeliveryManUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DeliveryManCreateWithoutUserInput, DeliveryManUncheckedCreateWithoutUserInput>
    connectOrCreate?: DeliveryManCreateOrConnectWithoutUserInput
    upsert?: DeliveryManUpsertWithoutUserInput
    disconnect?: DeliveryManWhereInput | boolean
    delete?: DeliveryManWhereInput | boolean
    connect?: DeliveryManWhereUniqueInput
    update?: XOR<XOR<DeliveryManUpdateToOneWithWhereWithoutUserInput, DeliveryManUpdateWithoutUserInput>, DeliveryManUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    upsert?: CompanyUpsertWithoutUserInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUserInput, CompanyUpdateWithoutUserInput>, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyCreateNestedManyWithoutAdressInput = {
    create?: XOR<CompanyCreateWithoutAdressInput, CompanyUncheckedCreateWithoutAdressInput> | CompanyCreateWithoutAdressInput[] | CompanyUncheckedCreateWithoutAdressInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutAdressInput | CompanyCreateOrConnectWithoutAdressInput[]
    createMany?: CompanyCreateManyAdressInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutAdressInput = {
    create?: XOR<CompanyCreateWithoutAdressInput, CompanyUncheckedCreateWithoutAdressInput> | CompanyCreateWithoutAdressInput[] | CompanyUncheckedCreateWithoutAdressInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutAdressInput | CompanyCreateOrConnectWithoutAdressInput[]
    createMany?: CompanyCreateManyAdressInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CompanyUpdateManyWithoutAdressNestedInput = {
    create?: XOR<CompanyCreateWithoutAdressInput, CompanyUncheckedCreateWithoutAdressInput> | CompanyCreateWithoutAdressInput[] | CompanyUncheckedCreateWithoutAdressInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutAdressInput | CompanyCreateOrConnectWithoutAdressInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutAdressInput | CompanyUpsertWithWhereUniqueWithoutAdressInput[]
    createMany?: CompanyCreateManyAdressInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutAdressInput | CompanyUpdateWithWhereUniqueWithoutAdressInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutAdressInput | CompanyUpdateManyWithWhereWithoutAdressInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutAdressNestedInput = {
    create?: XOR<CompanyCreateWithoutAdressInput, CompanyUncheckedCreateWithoutAdressInput> | CompanyCreateWithoutAdressInput[] | CompanyUncheckedCreateWithoutAdressInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutAdressInput | CompanyCreateOrConnectWithoutAdressInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutAdressInput | CompanyUpsertWithWhereUniqueWithoutAdressInput[]
    createMany?: CompanyCreateManyAdressInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutAdressInput | CompanyUpdateWithWhereUniqueWithoutAdressInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutAdressInput | CompanyUpdateManyWithWhereWithoutAdressInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type AdressCreateNestedOneWithoutCompanyInput = {
    create?: XOR<AdressCreateWithoutCompanyInput, AdressUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: AdressCreateOrConnectWithoutCompanyInput
    connect?: AdressWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    connect?: UserWhereUniqueInput
  }

  export type AdressUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<AdressCreateWithoutCompanyInput, AdressUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: AdressCreateOrConnectWithoutCompanyInput
    upsert?: AdressUpsertWithoutCompanyInput
    connect?: AdressWhereUniqueInput
    update?: XOR<XOR<AdressUpdateToOneWithWhereWithoutCompanyInput, AdressUpdateWithoutCompanyInput>, AdressUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    upsert?: UserUpsertWithoutCompanyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyInput, UserUpdateWithoutCompanyInput>, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutBalanceInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput> | UserCreateWithoutBalanceInput[] | UserUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput | UserCreateOrConnectWithoutBalanceInput[]
    createMany?: UserCreateManyBalanceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBalanceInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput> | UserCreateWithoutBalanceInput[] | UserUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput | UserCreateOrConnectWithoutBalanceInput[]
    createMany?: UserCreateManyBalanceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutBalanceNestedInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput> | UserCreateWithoutBalanceInput[] | UserUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput | UserCreateOrConnectWithoutBalanceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBalanceInput | UserUpsertWithWhereUniqueWithoutBalanceInput[]
    createMany?: UserCreateManyBalanceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBalanceInput | UserUpdateWithWhereUniqueWithoutBalanceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBalanceInput | UserUpdateManyWithWhereWithoutBalanceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBalanceNestedInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput> | UserCreateWithoutBalanceInput[] | UserUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput | UserCreateOrConnectWithoutBalanceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBalanceInput | UserUpsertWithWhereUniqueWithoutBalanceInput[]
    createMany?: UserCreateManyBalanceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBalanceInput | UserUpdateWithWhereUniqueWithoutBalanceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBalanceInput | UserUpdateManyWithWhereWithoutBalanceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutExtractInput = {
    create?: XOR<UserCreateWithoutExtractInput, UserUncheckedCreateWithoutExtractInput>
    connectOrCreate?: UserCreateOrConnectWithoutExtractInput
    connect?: UserWhereUniqueInput
  }

  export type EnumExtractTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExtractType
  }

  export type UserUpdateOneWithoutExtractNestedInput = {
    create?: XOR<UserCreateWithoutExtractInput, UserUncheckedCreateWithoutExtractInput>
    connectOrCreate?: UserCreateOrConnectWithoutExtractInput
    upsert?: UserUpsertWithoutExtractInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExtractInput, UserUpdateWithoutExtractInput>, UserUncheckedUpdateWithoutExtractInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutDeliveryManInput = {
    create?: XOR<UserCreateWithoutDeliveryManInput, UserUncheckedCreateWithoutDeliveryManInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryManInput
    connect?: UserWhereUniqueInput
  }

  export type DeliveryCreateNestedManyWithoutDeliveryManInput = {
    create?: XOR<DeliveryCreateWithoutDeliveryManInput, DeliveryUncheckedCreateWithoutDeliveryManInput> | DeliveryCreateWithoutDeliveryManInput[] | DeliveryUncheckedCreateWithoutDeliveryManInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutDeliveryManInput | DeliveryCreateOrConnectWithoutDeliveryManInput[]
    createMany?: DeliveryCreateManyDeliveryManInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutDeliveryManInput = {
    create?: XOR<DeliveryCreateWithoutDeliveryManInput, DeliveryUncheckedCreateWithoutDeliveryManInput> | DeliveryCreateWithoutDeliveryManInput[] | DeliveryUncheckedCreateWithoutDeliveryManInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutDeliveryManInput | DeliveryCreateOrConnectWithoutDeliveryManInput[]
    createMany?: DeliveryCreateManyDeliveryManInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDeliveryManNestedInput = {
    create?: XOR<UserCreateWithoutDeliveryManInput, UserUncheckedCreateWithoutDeliveryManInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryManInput
    upsert?: UserUpsertWithoutDeliveryManInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeliveryManInput, UserUpdateWithoutDeliveryManInput>, UserUncheckedUpdateWithoutDeliveryManInput>
  }

  export type DeliveryUpdateManyWithoutDeliveryManNestedInput = {
    create?: XOR<DeliveryCreateWithoutDeliveryManInput, DeliveryUncheckedCreateWithoutDeliveryManInput> | DeliveryCreateWithoutDeliveryManInput[] | DeliveryUncheckedCreateWithoutDeliveryManInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutDeliveryManInput | DeliveryCreateOrConnectWithoutDeliveryManInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutDeliveryManInput | DeliveryUpsertWithWhereUniqueWithoutDeliveryManInput[]
    createMany?: DeliveryCreateManyDeliveryManInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutDeliveryManInput | DeliveryUpdateWithWhereUniqueWithoutDeliveryManInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutDeliveryManInput | DeliveryUpdateManyWithWhereWithoutDeliveryManInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutDeliveryManNestedInput = {
    create?: XOR<DeliveryCreateWithoutDeliveryManInput, DeliveryUncheckedCreateWithoutDeliveryManInput> | DeliveryCreateWithoutDeliveryManInput[] | DeliveryUncheckedCreateWithoutDeliveryManInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutDeliveryManInput | DeliveryCreateOrConnectWithoutDeliveryManInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutDeliveryManInput | DeliveryUpsertWithWhereUniqueWithoutDeliveryManInput[]
    createMany?: DeliveryCreateManyDeliveryManInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutDeliveryManInput | DeliveryUpdateWithWhereUniqueWithoutDeliveryManInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutDeliveryManInput | DeliveryUpdateManyWithWhereWithoutDeliveryManInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type DeliveryCreateNestedOneWithoutLocalizationInput = {
    create?: XOR<DeliveryCreateWithoutLocalizationInput, DeliveryUncheckedCreateWithoutLocalizationInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutLocalizationInput
    connect?: DeliveryWhereUniqueInput
  }

  export type DeliveryUpdateOneWithoutLocalizationNestedInput = {
    create?: XOR<DeliveryCreateWithoutLocalizationInput, DeliveryUncheckedCreateWithoutLocalizationInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutLocalizationInput
    upsert?: DeliveryUpsertWithoutLocalizationInput
    disconnect?: DeliveryWhereInput | boolean
    delete?: DeliveryWhereInput | boolean
    connect?: DeliveryWhereUniqueInput
    update?: XOR<XOR<DeliveryUpdateToOneWithWhereWithoutLocalizationInput, DeliveryUpdateWithoutLocalizationInput>, DeliveryUncheckedUpdateWithoutLocalizationInput>
  }

  export type DeliveryCreateinfoInput = {
    set: string[]
  }

  export type DeliveryManCreateNestedOneWithoutDeliveryInput = {
    create?: XOR<DeliveryManCreateWithoutDeliveryInput, DeliveryManUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: DeliveryManCreateOrConnectWithoutDeliveryInput
    connect?: DeliveryManWhereUniqueInput
  }

  export type LocalizationCreateNestedManyWithoutDeliveryInput = {
    create?: XOR<LocalizationCreateWithoutDeliveryInput, LocalizationUncheckedCreateWithoutDeliveryInput> | LocalizationCreateWithoutDeliveryInput[] | LocalizationUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: LocalizationCreateOrConnectWithoutDeliveryInput | LocalizationCreateOrConnectWithoutDeliveryInput[]
    createMany?: LocalizationCreateManyDeliveryInputEnvelope
    connect?: LocalizationWhereUniqueInput | LocalizationWhereUniqueInput[]
  }

  export type LocalizationUncheckedCreateNestedManyWithoutDeliveryInput = {
    create?: XOR<LocalizationCreateWithoutDeliveryInput, LocalizationUncheckedCreateWithoutDeliveryInput> | LocalizationCreateWithoutDeliveryInput[] | LocalizationUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: LocalizationCreateOrConnectWithoutDeliveryInput | LocalizationCreateOrConnectWithoutDeliveryInput[]
    createMany?: LocalizationCreateManyDeliveryInputEnvelope
    connect?: LocalizationWhereUniqueInput | LocalizationWhereUniqueInput[]
  }

  export type DeliveryUpdateinfoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus
  }

  export type DeliveryManUpdateOneWithoutDeliveryNestedInput = {
    create?: XOR<DeliveryManCreateWithoutDeliveryInput, DeliveryManUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: DeliveryManCreateOrConnectWithoutDeliveryInput
    upsert?: DeliveryManUpsertWithoutDeliveryInput
    disconnect?: DeliveryManWhereInput | boolean
    delete?: DeliveryManWhereInput | boolean
    connect?: DeliveryManWhereUniqueInput
    update?: XOR<XOR<DeliveryManUpdateToOneWithWhereWithoutDeliveryInput, DeliveryManUpdateWithoutDeliveryInput>, DeliveryManUncheckedUpdateWithoutDeliveryInput>
  }

  export type LocalizationUpdateManyWithoutDeliveryNestedInput = {
    create?: XOR<LocalizationCreateWithoutDeliveryInput, LocalizationUncheckedCreateWithoutDeliveryInput> | LocalizationCreateWithoutDeliveryInput[] | LocalizationUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: LocalizationCreateOrConnectWithoutDeliveryInput | LocalizationCreateOrConnectWithoutDeliveryInput[]
    upsert?: LocalizationUpsertWithWhereUniqueWithoutDeliveryInput | LocalizationUpsertWithWhereUniqueWithoutDeliveryInput[]
    createMany?: LocalizationCreateManyDeliveryInputEnvelope
    set?: LocalizationWhereUniqueInput | LocalizationWhereUniqueInput[]
    disconnect?: LocalizationWhereUniqueInput | LocalizationWhereUniqueInput[]
    delete?: LocalizationWhereUniqueInput | LocalizationWhereUniqueInput[]
    connect?: LocalizationWhereUniqueInput | LocalizationWhereUniqueInput[]
    update?: LocalizationUpdateWithWhereUniqueWithoutDeliveryInput | LocalizationUpdateWithWhereUniqueWithoutDeliveryInput[]
    updateMany?: LocalizationUpdateManyWithWhereWithoutDeliveryInput | LocalizationUpdateManyWithWhereWithoutDeliveryInput[]
    deleteMany?: LocalizationScalarWhereInput | LocalizationScalarWhereInput[]
  }

  export type LocalizationUncheckedUpdateManyWithoutDeliveryNestedInput = {
    create?: XOR<LocalizationCreateWithoutDeliveryInput, LocalizationUncheckedCreateWithoutDeliveryInput> | LocalizationCreateWithoutDeliveryInput[] | LocalizationUncheckedCreateWithoutDeliveryInput[]
    connectOrCreate?: LocalizationCreateOrConnectWithoutDeliveryInput | LocalizationCreateOrConnectWithoutDeliveryInput[]
    upsert?: LocalizationUpsertWithWhereUniqueWithoutDeliveryInput | LocalizationUpsertWithWhereUniqueWithoutDeliveryInput[]
    createMany?: LocalizationCreateManyDeliveryInputEnvelope
    set?: LocalizationWhereUniqueInput | LocalizationWhereUniqueInput[]
    disconnect?: LocalizationWhereUniqueInput | LocalizationWhereUniqueInput[]
    delete?: LocalizationWhereUniqueInput | LocalizationWhereUniqueInput[]
    connect?: LocalizationWhereUniqueInput | LocalizationWhereUniqueInput[]
    update?: LocalizationUpdateWithWhereUniqueWithoutDeliveryInput | LocalizationUpdateWithWhereUniqueWithoutDeliveryInput[]
    updateMany?: LocalizationUpdateManyWithWhereWithoutDeliveryInput | LocalizationUpdateManyWithWhereWithoutDeliveryInput[]
    deleteMany?: LocalizationScalarWhereInput | LocalizationScalarWhereInput[]
  }

  export type ClientCreateNestedManyWithoutAdressInput = {
    create?: XOR<ClientCreateWithoutAdressInput, ClientUncheckedCreateWithoutAdressInput> | ClientCreateWithoutAdressInput[] | ClientUncheckedCreateWithoutAdressInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdressInput | ClientCreateOrConnectWithoutAdressInput[]
    createMany?: ClientCreateManyAdressInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutAdressInput = {
    create?: XOR<ClientCreateWithoutAdressInput, ClientUncheckedCreateWithoutAdressInput> | ClientCreateWithoutAdressInput[] | ClientUncheckedCreateWithoutAdressInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdressInput | ClientCreateOrConnectWithoutAdressInput[]
    createMany?: ClientCreateManyAdressInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type ClientUpdateManyWithoutAdressNestedInput = {
    create?: XOR<ClientCreateWithoutAdressInput, ClientUncheckedCreateWithoutAdressInput> | ClientCreateWithoutAdressInput[] | ClientUncheckedCreateWithoutAdressInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdressInput | ClientCreateOrConnectWithoutAdressInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutAdressInput | ClientUpsertWithWhereUniqueWithoutAdressInput[]
    createMany?: ClientCreateManyAdressInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutAdressInput | ClientUpdateWithWhereUniqueWithoutAdressInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutAdressInput | ClientUpdateManyWithWhereWithoutAdressInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutAdressNestedInput = {
    create?: XOR<ClientCreateWithoutAdressInput, ClientUncheckedCreateWithoutAdressInput> | ClientCreateWithoutAdressInput[] | ClientUncheckedCreateWithoutAdressInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdressInput | ClientCreateOrConnectWithoutAdressInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutAdressInput | ClientUpsertWithWhereUniqueWithoutAdressInput[]
    createMany?: ClientCreateManyAdressInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutAdressInput | ClientUpdateWithWhereUniqueWithoutAdressInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutAdressInput | ClientUpdateManyWithWhereWithoutAdressInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutClientInput = {
    create?: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput>
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput
    connect?: AddressWhereUniqueInput
  }

  export type AddressUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput>
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput
    upsert?: AddressUpsertWithoutClientInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutClientInput, AddressUpdateWithoutClientInput>, AddressUncheckedUpdateWithoutClientInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumExtractTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractType | EnumExtractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractTypeFilter<$PrismaModel> | $Enums.ExtractType
  }

  export type NestedEnumExtractTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtractType | EnumExtractTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExtractType[] | ListEnumExtractTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumExtractTypeWithAggregatesFilter<$PrismaModel> | $Enums.ExtractType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExtractTypeFilter<$PrismaModel>
    _max?: NestedEnumExtractTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type BalanceCreateWithoutUserInput = {
    amount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalanceUncheckedCreateWithoutUserInput = {
    id?: number
    amount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalanceCreateOrConnectWithoutUserInput = {
    where: BalanceWhereUniqueInput
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
  }

  export type ExtractCreateWithoutUserInput = {
    amount?: number
    type: $Enums.ExtractType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExtractUncheckedCreateWithoutUserInput = {
    id?: number
    amount?: number
    type: $Enums.ExtractType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExtractCreateOrConnectWithoutUserInput = {
    where: ExtractWhereUniqueInput
    create: XOR<ExtractCreateWithoutUserInput, ExtractUncheckedCreateWithoutUserInput>
  }

  export type ExtractCreateManyUserInputEnvelope = {
    data: ExtractCreateManyUserInput | ExtractCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryManCreateWithoutUserInput = {
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Delivery?: DeliveryCreateNestedManyWithoutDeliveryManInput
  }

  export type DeliveryManUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Delivery?: DeliveryUncheckedCreateNestedManyWithoutDeliveryManInput
  }

  export type DeliveryManCreateOrConnectWithoutUserInput = {
    where: DeliveryManWhereUniqueInput
    create: XOR<DeliveryManCreateWithoutUserInput, DeliveryManUncheckedCreateWithoutUserInput>
  }

  export type CompanyCreateWithoutUserInput = {
    name: string
    phone: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adress: AdressCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    phone: string
    cnpj: string
    idAddress: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type BalanceUpsertWithoutUserInput = {
    update: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    where?: BalanceWhereInput
  }

  export type BalanceUpdateToOneWithWhereWithoutUserInput = {
    where?: BalanceWhereInput
    data: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type BalanceUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtractUpsertWithWhereUniqueWithoutUserInput = {
    where: ExtractWhereUniqueInput
    update: XOR<ExtractUpdateWithoutUserInput, ExtractUncheckedUpdateWithoutUserInput>
    create: XOR<ExtractCreateWithoutUserInput, ExtractUncheckedCreateWithoutUserInput>
  }

  export type ExtractUpdateWithWhereUniqueWithoutUserInput = {
    where: ExtractWhereUniqueInput
    data: XOR<ExtractUpdateWithoutUserInput, ExtractUncheckedUpdateWithoutUserInput>
  }

  export type ExtractUpdateManyWithWhereWithoutUserInput = {
    where: ExtractScalarWhereInput
    data: XOR<ExtractUpdateManyMutationInput, ExtractUncheckedUpdateManyWithoutUserInput>
  }

  export type ExtractScalarWhereInput = {
    AND?: ExtractScalarWhereInput | ExtractScalarWhereInput[]
    OR?: ExtractScalarWhereInput[]
    NOT?: ExtractScalarWhereInput | ExtractScalarWhereInput[]
    id?: IntFilter<"Extract"> | number
    amount?: FloatFilter<"Extract"> | number
    type?: EnumExtractTypeFilter<"Extract"> | $Enums.ExtractType
    createdAt?: DateTimeFilter<"Extract"> | Date | string
    updatedAt?: DateTimeFilter<"Extract"> | Date | string
    userId?: IntNullableFilter<"Extract"> | number | null
  }

  export type DeliveryManUpsertWithoutUserInput = {
    update: XOR<DeliveryManUpdateWithoutUserInput, DeliveryManUncheckedUpdateWithoutUserInput>
    create: XOR<DeliveryManCreateWithoutUserInput, DeliveryManUncheckedCreateWithoutUserInput>
    where?: DeliveryManWhereInput
  }

  export type DeliveryManUpdateToOneWithWhereWithoutUserInput = {
    where?: DeliveryManWhereInput
    data: XOR<DeliveryManUpdateWithoutUserInput, DeliveryManUncheckedUpdateWithoutUserInput>
  }

  export type DeliveryManUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Delivery?: DeliveryUpdateManyWithoutDeliveryManNestedInput
  }

  export type DeliveryManUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Delivery?: DeliveryUncheckedUpdateManyWithoutDeliveryManNestedInput
  }

  export type CompanyUpsertWithoutUserInput = {
    update: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUserInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adress?: AdressUpdateOneRequiredWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    idAddress?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateWithoutAdressInput = {
    name: string
    phone: string
    cnpj: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutAdressInput = {
    id?: number
    name: string
    phone: string
    cnpj: string
    idUser: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyCreateOrConnectWithoutAdressInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutAdressInput, CompanyUncheckedCreateWithoutAdressInput>
  }

  export type CompanyCreateManyAdressInputEnvelope = {
    data: CompanyCreateManyAdressInput | CompanyCreateManyAdressInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithWhereUniqueWithoutAdressInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutAdressInput, CompanyUncheckedUpdateWithoutAdressInput>
    create: XOR<CompanyCreateWithoutAdressInput, CompanyUncheckedCreateWithoutAdressInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutAdressInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutAdressInput, CompanyUncheckedUpdateWithoutAdressInput>
  }

  export type CompanyUpdateManyWithWhereWithoutAdressInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutAdressInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    cnpj?: StringFilter<"Company"> | string
    idAddress?: IntFilter<"Company"> | number
    idUser?: IntFilter<"Company"> | number
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
  }

  export type AdressCreateWithoutCompanyInput = {
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdressUncheckedCreateWithoutCompanyInput = {
    id?: number
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdressCreateOrConnectWithoutCompanyInput = {
    where: AdressWhereUniqueInput
    create: XOR<AdressCreateWithoutCompanyInput, AdressUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateWithoutCompanyInput = {
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Balance: BalanceCreateNestedOneWithoutUserInput
    Extract?: ExtractCreateNestedManyWithoutUserInput
    DeliveryMan?: DeliveryManCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceId: number
    Extract?: ExtractUncheckedCreateNestedManyWithoutUserInput
    DeliveryMan?: DeliveryManUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type AdressUpsertWithoutCompanyInput = {
    update: XOR<AdressUpdateWithoutCompanyInput, AdressUncheckedUpdateWithoutCompanyInput>
    create: XOR<AdressCreateWithoutCompanyInput, AdressUncheckedCreateWithoutCompanyInput>
    where?: AdressWhereInput
  }

  export type AdressUpdateToOneWithWhereWithoutCompanyInput = {
    where?: AdressWhereInput
    data: XOR<AdressUpdateWithoutCompanyInput, AdressUncheckedUpdateWithoutCompanyInput>
  }

  export type AdressUpdateWithoutCompanyInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdressUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCompanyInput = {
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateWithoutCompanyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Balance?: BalanceUpdateOneRequiredWithoutUserNestedInput
    Extract?: ExtractUpdateManyWithoutUserNestedInput
    DeliveryMan?: DeliveryManUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceId?: IntFieldUpdateOperationsInput | number
    Extract?: ExtractUncheckedUpdateManyWithoutUserNestedInput
    DeliveryMan?: DeliveryManUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutBalanceInput = {
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Extract?: ExtractCreateNestedManyWithoutUserInput
    DeliveryMan?: DeliveryManCreateNestedOneWithoutUserInput
    Company?: CompanyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBalanceInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Extract?: ExtractUncheckedCreateNestedManyWithoutUserInput
    DeliveryMan?: DeliveryManUncheckedCreateNestedOneWithoutUserInput
    Company?: CompanyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
  }

  export type UserCreateManyBalanceInputEnvelope = {
    data: UserCreateManyBalanceInput | UserCreateManyBalanceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutBalanceInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBalanceInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserUpdateManyWithWhereWithoutBalanceInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBalanceInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    information?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    balanceId?: IntFilter<"User"> | number
  }

  export type UserCreateWithoutExtractInput = {
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Balance: BalanceCreateNestedOneWithoutUserInput
    DeliveryMan?: DeliveryManCreateNestedOneWithoutUserInput
    Company?: CompanyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExtractInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceId: number
    DeliveryMan?: DeliveryManUncheckedCreateNestedOneWithoutUserInput
    Company?: CompanyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExtractInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExtractInput, UserUncheckedCreateWithoutExtractInput>
  }

  export type UserUpsertWithoutExtractInput = {
    update: XOR<UserUpdateWithoutExtractInput, UserUncheckedUpdateWithoutExtractInput>
    create: XOR<UserCreateWithoutExtractInput, UserUncheckedCreateWithoutExtractInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExtractInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExtractInput, UserUncheckedUpdateWithoutExtractInput>
  }

  export type UserUpdateWithoutExtractInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Balance?: BalanceUpdateOneRequiredWithoutUserNestedInput
    DeliveryMan?: DeliveryManUpdateOneWithoutUserNestedInput
    Company?: CompanyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExtractInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceId?: IntFieldUpdateOperationsInput | number
    DeliveryMan?: DeliveryManUncheckedUpdateOneWithoutUserNestedInput
    Company?: CompanyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutDeliveryManInput = {
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Balance: BalanceCreateNestedOneWithoutUserInput
    Extract?: ExtractCreateNestedManyWithoutUserInput
    Company?: CompanyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeliveryManInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    balanceId: number
    Extract?: ExtractUncheckedCreateNestedManyWithoutUserInput
    Company?: CompanyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeliveryManInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeliveryManInput, UserUncheckedCreateWithoutDeliveryManInput>
  }

  export type DeliveryCreateWithoutDeliveryManInput = {
    code: string
    higth: number
    width: number
    length: number
    weight: number
    price: number
    info?: DeliveryCreateinfoInput | string[]
    status: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Localization?: LocalizationCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateWithoutDeliveryManInput = {
    id?: number
    code: string
    higth: number
    width: number
    length: number
    weight: number
    price: number
    info?: DeliveryCreateinfoInput | string[]
    status: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    Localization?: LocalizationUncheckedCreateNestedManyWithoutDeliveryInput
  }

  export type DeliveryCreateOrConnectWithoutDeliveryManInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutDeliveryManInput, DeliveryUncheckedCreateWithoutDeliveryManInput>
  }

  export type DeliveryCreateManyDeliveryManInputEnvelope = {
    data: DeliveryCreateManyDeliveryManInput | DeliveryCreateManyDeliveryManInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDeliveryManInput = {
    update: XOR<UserUpdateWithoutDeliveryManInput, UserUncheckedUpdateWithoutDeliveryManInput>
    create: XOR<UserCreateWithoutDeliveryManInput, UserUncheckedCreateWithoutDeliveryManInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeliveryManInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeliveryManInput, UserUncheckedUpdateWithoutDeliveryManInput>
  }

  export type UserUpdateWithoutDeliveryManInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Balance?: BalanceUpdateOneRequiredWithoutUserNestedInput
    Extract?: ExtractUpdateManyWithoutUserNestedInput
    Company?: CompanyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeliveryManInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balanceId?: IntFieldUpdateOperationsInput | number
    Extract?: ExtractUncheckedUpdateManyWithoutUserNestedInput
    Company?: CompanyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DeliveryUpsertWithWhereUniqueWithoutDeliveryManInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutDeliveryManInput, DeliveryUncheckedUpdateWithoutDeliveryManInput>
    create: XOR<DeliveryCreateWithoutDeliveryManInput, DeliveryUncheckedCreateWithoutDeliveryManInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutDeliveryManInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutDeliveryManInput, DeliveryUncheckedUpdateWithoutDeliveryManInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutDeliveryManInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutDeliveryManInput>
  }

  export type DeliveryScalarWhereInput = {
    AND?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    OR?: DeliveryScalarWhereInput[]
    NOT?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    id?: IntFilter<"Delivery"> | number
    code?: StringFilter<"Delivery"> | string
    higth?: FloatFilter<"Delivery"> | number
    width?: FloatFilter<"Delivery"> | number
    length?: FloatFilter<"Delivery"> | number
    weight?: FloatFilter<"Delivery"> | number
    price?: FloatFilter<"Delivery"> | number
    info?: StringNullableListFilter<"Delivery">
    status?: EnumDeliveryStatusFilter<"Delivery"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    deliveryManId?: IntNullableFilter<"Delivery"> | number | null
  }

  export type DeliveryCreateWithoutLocalizationInput = {
    code: string
    higth: number
    width: number
    length: number
    weight: number
    price: number
    info?: DeliveryCreateinfoInput | string[]
    status: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    DeliveryMan?: DeliveryManCreateNestedOneWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateWithoutLocalizationInput = {
    id?: number
    code: string
    higth: number
    width: number
    length: number
    weight: number
    price: number
    info?: DeliveryCreateinfoInput | string[]
    status: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryManId?: number | null
  }

  export type DeliveryCreateOrConnectWithoutLocalizationInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutLocalizationInput, DeliveryUncheckedCreateWithoutLocalizationInput>
  }

  export type DeliveryUpsertWithoutLocalizationInput = {
    update: XOR<DeliveryUpdateWithoutLocalizationInput, DeliveryUncheckedUpdateWithoutLocalizationInput>
    create: XOR<DeliveryCreateWithoutLocalizationInput, DeliveryUncheckedCreateWithoutLocalizationInput>
    where?: DeliveryWhereInput
  }

  export type DeliveryUpdateToOneWithWhereWithoutLocalizationInput = {
    where?: DeliveryWhereInput
    data: XOR<DeliveryUpdateWithoutLocalizationInput, DeliveryUncheckedUpdateWithoutLocalizationInput>
  }

  export type DeliveryUpdateWithoutLocalizationInput = {
    code?: StringFieldUpdateOperationsInput | string
    higth?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    info?: DeliveryUpdateinfoInput | string[]
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DeliveryMan?: DeliveryManUpdateOneWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutLocalizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    higth?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    info?: DeliveryUpdateinfoInput | string[]
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryManId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DeliveryManCreateWithoutDeliveryInput = {
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutDeliveryManInput
  }

  export type DeliveryManUncheckedCreateWithoutDeliveryInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type DeliveryManCreateOrConnectWithoutDeliveryInput = {
    where: DeliveryManWhereUniqueInput
    create: XOR<DeliveryManCreateWithoutDeliveryInput, DeliveryManUncheckedCreateWithoutDeliveryInput>
  }

  export type LocalizationCreateWithoutDeliveryInput = {
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocalizationUncheckedCreateWithoutDeliveryInput = {
    id?: number
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocalizationCreateOrConnectWithoutDeliveryInput = {
    where: LocalizationWhereUniqueInput
    create: XOR<LocalizationCreateWithoutDeliveryInput, LocalizationUncheckedCreateWithoutDeliveryInput>
  }

  export type LocalizationCreateManyDeliveryInputEnvelope = {
    data: LocalizationCreateManyDeliveryInput | LocalizationCreateManyDeliveryInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryManUpsertWithoutDeliveryInput = {
    update: XOR<DeliveryManUpdateWithoutDeliveryInput, DeliveryManUncheckedUpdateWithoutDeliveryInput>
    create: XOR<DeliveryManCreateWithoutDeliveryInput, DeliveryManUncheckedCreateWithoutDeliveryInput>
    where?: DeliveryManWhereInput
  }

  export type DeliveryManUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: DeliveryManWhereInput
    data: XOR<DeliveryManUpdateWithoutDeliveryInput, DeliveryManUncheckedUpdateWithoutDeliveryInput>
  }

  export type DeliveryManUpdateWithoutDeliveryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutDeliveryManNestedInput
  }

  export type DeliveryManUncheckedUpdateWithoutDeliveryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LocalizationUpsertWithWhereUniqueWithoutDeliveryInput = {
    where: LocalizationWhereUniqueInput
    update: XOR<LocalizationUpdateWithoutDeliveryInput, LocalizationUncheckedUpdateWithoutDeliveryInput>
    create: XOR<LocalizationCreateWithoutDeliveryInput, LocalizationUncheckedCreateWithoutDeliveryInput>
  }

  export type LocalizationUpdateWithWhereUniqueWithoutDeliveryInput = {
    where: LocalizationWhereUniqueInput
    data: XOR<LocalizationUpdateWithoutDeliveryInput, LocalizationUncheckedUpdateWithoutDeliveryInput>
  }

  export type LocalizationUpdateManyWithWhereWithoutDeliveryInput = {
    where: LocalizationScalarWhereInput
    data: XOR<LocalizationUpdateManyMutationInput, LocalizationUncheckedUpdateManyWithoutDeliveryInput>
  }

  export type LocalizationScalarWhereInput = {
    AND?: LocalizationScalarWhereInput | LocalizationScalarWhereInput[]
    OR?: LocalizationScalarWhereInput[]
    NOT?: LocalizationScalarWhereInput | LocalizationScalarWhereInput[]
    id?: IntFilter<"Localization"> | number
    latitude?: FloatFilter<"Localization"> | number
    longitude?: FloatFilter<"Localization"> | number
    createdAt?: DateTimeFilter<"Localization"> | Date | string
    updatedAt?: DateTimeFilter<"Localization"> | Date | string
    deliveryId?: IntNullableFilter<"Localization"> | number | null
  }

  export type ClientCreateWithoutAdressInput = {
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutAdressInput = {
    id?: number
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutAdressInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAdressInput, ClientUncheckedCreateWithoutAdressInput>
  }

  export type ClientCreateManyAdressInputEnvelope = {
    data: ClientCreateManyAdressInput | ClientCreateManyAdressInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithWhereUniqueWithoutAdressInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutAdressInput, ClientUncheckedUpdateWithoutAdressInput>
    create: XOR<ClientCreateWithoutAdressInput, ClientUncheckedCreateWithoutAdressInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutAdressInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutAdressInput, ClientUncheckedUpdateWithoutAdressInput>
  }

  export type ClientUpdateManyWithWhereWithoutAdressInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutAdressInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    addressId?: IntFilter<"Client"> | number
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
  }

  export type AddressCreateWithoutClientInput = {
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutClientInput = {
    id?: number
    street: string
    number: string
    city: string
    state: string
    zipCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutClientInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput>
  }

  export type AddressUpsertWithoutClientInput = {
    update: XOR<AddressUpdateWithoutClientInput, AddressUncheckedUpdateWithoutClientInput>
    create: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutClientInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutClientInput, AddressUncheckedUpdateWithoutClientInput>
  }

  export type AddressUpdateWithoutClientInput = {
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtractCreateManyUserInput = {
    id?: number
    amount?: number
    type: $Enums.ExtractType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExtractUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtractUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExtractUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumExtractTypeFieldUpdateOperationsInput | $Enums.ExtractType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateManyAdressInput = {
    id?: number
    name: string
    phone: string
    cnpj: string
    idUser: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateWithoutAdressInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutAdressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    idUser?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyWithoutAdressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    idUser?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyBalanceInput = {
    id?: number
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    information?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutBalanceInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Extract?: ExtractUpdateManyWithoutUserNestedInput
    DeliveryMan?: DeliveryManUpdateOneWithoutUserNestedInput
    Company?: CompanyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Extract?: ExtractUncheckedUpdateManyWithoutUserNestedInput
    DeliveryMan?: DeliveryManUncheckedUpdateOneWithoutUserNestedInput
    Company?: CompanyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBalanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    information?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateManyDeliveryManInput = {
    id?: number
    code: string
    higth: number
    width: number
    length: number
    weight: number
    price: number
    info?: DeliveryCreateinfoInput | string[]
    status: $Enums.DeliveryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryUpdateWithoutDeliveryManInput = {
    code?: StringFieldUpdateOperationsInput | string
    higth?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    info?: DeliveryUpdateinfoInput | string[]
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Localization?: LocalizationUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutDeliveryManInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    higth?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    info?: DeliveryUpdateinfoInput | string[]
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Localization?: LocalizationUncheckedUpdateManyWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateManyWithoutDeliveryManInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    higth?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    info?: DeliveryUpdateinfoInput | string[]
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizationCreateManyDeliveryInput = {
    id?: number
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocalizationUpdateWithoutDeliveryInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizationUncheckedUpdateWithoutDeliveryInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizationUncheckedUpdateManyWithoutDeliveryInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateManyAdressInput = {
    id?: number
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateWithoutAdressInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutAdressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyWithoutAdressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}