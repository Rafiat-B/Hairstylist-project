
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
 * Model Stylist
 * 
 */
export type Stylist = $Result.DefaultSelection<Prisma.$StylistPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stylists
 * const stylists = await prisma.stylist.findMany()
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
   * // Fetch zero or more Stylists
   * const stylists = await prisma.stylist.findMany()
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
   * `prisma.stylist`: Exposes CRUD operations for the **Stylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stylists
    * const stylists = await prisma.stylist.findMany()
    * ```
    */
  get stylist(): Prisma.StylistDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Stylist: 'Stylist'
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
      modelProps: "stylist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Stylist: {
        payload: Prisma.$StylistPayload<ExtArgs>
        fields: Prisma.StylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          findFirst: {
            args: Prisma.StylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          findMany: {
            args: Prisma.StylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>[]
          }
          create: {
            args: Prisma.StylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          createMany: {
            args: Prisma.StylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>[]
          }
          delete: {
            args: Prisma.StylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          update: {
            args: Prisma.StylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          deleteMany: {
            args: Prisma.StylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>[]
          }
          upsert: {
            args: Prisma.StylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          aggregate: {
            args: Prisma.StylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStylist>
          }
          groupBy: {
            args: Prisma.StylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<StylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.StylistCountArgs<ExtArgs>
            result: $Utils.Optional<StylistCountAggregateOutputType> | number
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
    stylist?: StylistOmit
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
   * Models
   */

  /**
   * Model Stylist
   */

  export type AggregateStylist = {
    _count: StylistCountAggregateOutputType | null
    _avg: StylistAvgAggregateOutputType | null
    _sum: StylistSumAggregateOutputType | null
    _min: StylistMinAggregateOutputType | null
    _max: StylistMaxAggregateOutputType | null
  }

  export type StylistAvgAggregateOutputType = {
    id: number | null
  }

  export type StylistSumAggregateOutputType = {
    id: number | null
  }

  export type StylistMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    website: string | null
    emailContact: string | null
    phoneContact: string | null
    contactPreference: string | null
    profileImage: string | null
    isVisible: boolean | null
    createdAt: Date | null
  }

  export type StylistMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    website: string | null
    emailContact: string | null
    phoneContact: string | null
    contactPreference: string | null
    profileImage: string | null
    isVisible: boolean | null
    createdAt: Date | null
  }

  export type StylistCountAggregateOutputType = {
    id: number
    email: number
    password: number
    website: number
    emailContact: number
    phoneContact: number
    contactPreference: number
    profileImage: number
    workImages: number
    videos: number
    isVisible: number
    createdAt: number
    _all: number
  }


  export type StylistAvgAggregateInputType = {
    id?: true
  }

  export type StylistSumAggregateInputType = {
    id?: true
  }

  export type StylistMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    website?: true
    emailContact?: true
    phoneContact?: true
    contactPreference?: true
    profileImage?: true
    isVisible?: true
    createdAt?: true
  }

  export type StylistMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    website?: true
    emailContact?: true
    phoneContact?: true
    contactPreference?: true
    profileImage?: true
    isVisible?: true
    createdAt?: true
  }

  export type StylistCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    website?: true
    emailContact?: true
    phoneContact?: true
    contactPreference?: true
    profileImage?: true
    workImages?: true
    videos?: true
    isVisible?: true
    createdAt?: true
    _all?: true
  }

  export type StylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stylist to aggregate.
     */
    where?: StylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stylists to fetch.
     */
    orderBy?: StylistOrderByWithRelationInput | StylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stylists
    **/
    _count?: true | StylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StylistMaxAggregateInputType
  }

  export type GetStylistAggregateType<T extends StylistAggregateArgs> = {
        [P in keyof T & keyof AggregateStylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStylist[P]>
      : GetScalarType<T[P], AggregateStylist[P]>
  }




  export type StylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StylistWhereInput
    orderBy?: StylistOrderByWithAggregationInput | StylistOrderByWithAggregationInput[]
    by: StylistScalarFieldEnum[] | StylistScalarFieldEnum
    having?: StylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StylistCountAggregateInputType | true
    _avg?: StylistAvgAggregateInputType
    _sum?: StylistSumAggregateInputType
    _min?: StylistMinAggregateInputType
    _max?: StylistMaxAggregateInputType
  }

  export type StylistGroupByOutputType = {
    id: number
    email: string
    password: string
    website: string | null
    emailContact: string | null
    phoneContact: string | null
    contactPreference: string | null
    profileImage: string | null
    workImages: string[]
    videos: string[]
    isVisible: boolean
    createdAt: Date
    _count: StylistCountAggregateOutputType | null
    _avg: StylistAvgAggregateOutputType | null
    _sum: StylistSumAggregateOutputType | null
    _min: StylistMinAggregateOutputType | null
    _max: StylistMaxAggregateOutputType | null
  }

  type GetStylistGroupByPayload<T extends StylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StylistGroupByOutputType[P]>
            : GetScalarType<T[P], StylistGroupByOutputType[P]>
        }
      >
    >


  export type StylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    website?: boolean
    emailContact?: boolean
    phoneContact?: boolean
    contactPreference?: boolean
    profileImage?: boolean
    workImages?: boolean
    videos?: boolean
    isVisible?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stylist"]>

  export type StylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    website?: boolean
    emailContact?: boolean
    phoneContact?: boolean
    contactPreference?: boolean
    profileImage?: boolean
    workImages?: boolean
    videos?: boolean
    isVisible?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stylist"]>

  export type StylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    website?: boolean
    emailContact?: boolean
    phoneContact?: boolean
    contactPreference?: boolean
    profileImage?: boolean
    workImages?: boolean
    videos?: boolean
    isVisible?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["stylist"]>

  export type StylistSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    website?: boolean
    emailContact?: boolean
    phoneContact?: boolean
    contactPreference?: boolean
    profileImage?: boolean
    workImages?: boolean
    videos?: boolean
    isVisible?: boolean
    createdAt?: boolean
  }

  export type StylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "website" | "emailContact" | "phoneContact" | "contactPreference" | "profileImage" | "workImages" | "videos" | "isVisible" | "createdAt", ExtArgs["result"]["stylist"]>

  export type $StylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stylist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      website: string | null
      emailContact: string | null
      phoneContact: string | null
      contactPreference: string | null
      profileImage: string | null
      workImages: string[]
      videos: string[]
      isVisible: boolean
      createdAt: Date
    }, ExtArgs["result"]["stylist"]>
    composites: {}
  }

  type StylistGetPayload<S extends boolean | null | undefined | StylistDefaultArgs> = $Result.GetResult<Prisma.$StylistPayload, S>

  type StylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StylistCountAggregateInputType | true
    }

  export interface StylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stylist'], meta: { name: 'Stylist' } }
    /**
     * Find zero or one Stylist that matches the filter.
     * @param {StylistFindUniqueArgs} args - Arguments to find a Stylist
     * @example
     * // Get one Stylist
     * const stylist = await prisma.stylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StylistFindUniqueArgs>(args: SelectSubset<T, StylistFindUniqueArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stylist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StylistFindUniqueOrThrowArgs} args - Arguments to find a Stylist
     * @example
     * // Get one Stylist
     * const stylist = await prisma.stylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StylistFindUniqueOrThrowArgs>(args: SelectSubset<T, StylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistFindFirstArgs} args - Arguments to find a Stylist
     * @example
     * // Get one Stylist
     * const stylist = await prisma.stylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StylistFindFirstArgs>(args?: SelectSubset<T, StylistFindFirstArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistFindFirstOrThrowArgs} args - Arguments to find a Stylist
     * @example
     * // Get one Stylist
     * const stylist = await prisma.stylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StylistFindFirstOrThrowArgs>(args?: SelectSubset<T, StylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stylists
     * const stylists = await prisma.stylist.findMany()
     * 
     * // Get first 10 Stylists
     * const stylists = await prisma.stylist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stylistWithIdOnly = await prisma.stylist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StylistFindManyArgs>(args?: SelectSubset<T, StylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stylist.
     * @param {StylistCreateArgs} args - Arguments to create a Stylist.
     * @example
     * // Create one Stylist
     * const Stylist = await prisma.stylist.create({
     *   data: {
     *     // ... data to create a Stylist
     *   }
     * })
     * 
     */
    create<T extends StylistCreateArgs>(args: SelectSubset<T, StylistCreateArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stylists.
     * @param {StylistCreateManyArgs} args - Arguments to create many Stylists.
     * @example
     * // Create many Stylists
     * const stylist = await prisma.stylist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StylistCreateManyArgs>(args?: SelectSubset<T, StylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stylists and returns the data saved in the database.
     * @param {StylistCreateManyAndReturnArgs} args - Arguments to create many Stylists.
     * @example
     * // Create many Stylists
     * const stylist = await prisma.stylist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stylists and only return the `id`
     * const stylistWithIdOnly = await prisma.stylist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StylistCreateManyAndReturnArgs>(args?: SelectSubset<T, StylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stylist.
     * @param {StylistDeleteArgs} args - Arguments to delete one Stylist.
     * @example
     * // Delete one Stylist
     * const Stylist = await prisma.stylist.delete({
     *   where: {
     *     // ... filter to delete one Stylist
     *   }
     * })
     * 
     */
    delete<T extends StylistDeleteArgs>(args: SelectSubset<T, StylistDeleteArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stylist.
     * @param {StylistUpdateArgs} args - Arguments to update one Stylist.
     * @example
     * // Update one Stylist
     * const stylist = await prisma.stylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StylistUpdateArgs>(args: SelectSubset<T, StylistUpdateArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stylists.
     * @param {StylistDeleteManyArgs} args - Arguments to filter Stylists to delete.
     * @example
     * // Delete a few Stylists
     * const { count } = await prisma.stylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StylistDeleteManyArgs>(args?: SelectSubset<T, StylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stylists
     * const stylist = await prisma.stylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StylistUpdateManyArgs>(args: SelectSubset<T, StylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stylists and returns the data updated in the database.
     * @param {StylistUpdateManyAndReturnArgs} args - Arguments to update many Stylists.
     * @example
     * // Update many Stylists
     * const stylist = await prisma.stylist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stylists and only return the `id`
     * const stylistWithIdOnly = await prisma.stylist.updateManyAndReturn({
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
    updateManyAndReturn<T extends StylistUpdateManyAndReturnArgs>(args: SelectSubset<T, StylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stylist.
     * @param {StylistUpsertArgs} args - Arguments to update or create a Stylist.
     * @example
     * // Update or create a Stylist
     * const stylist = await prisma.stylist.upsert({
     *   create: {
     *     // ... data to create a Stylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stylist we want to update
     *   }
     * })
     */
    upsert<T extends StylistUpsertArgs>(args: SelectSubset<T, StylistUpsertArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistCountArgs} args - Arguments to filter Stylists to count.
     * @example
     * // Count the number of Stylists
     * const count = await prisma.stylist.count({
     *   where: {
     *     // ... the filter for the Stylists we want to count
     *   }
     * })
    **/
    count<T extends StylistCountArgs>(
      args?: Subset<T, StylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StylistAggregateArgs>(args: Subset<T, StylistAggregateArgs>): Prisma.PrismaPromise<GetStylistAggregateType<T>>

    /**
     * Group by Stylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistGroupByArgs} args - Group by arguments.
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
      T extends StylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StylistGroupByArgs['orderBy'] }
        : { orderBy?: StylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stylist model
   */
  readonly fields: StylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Stylist model
   */
  interface StylistFieldRefs {
    readonly id: FieldRef<"Stylist", 'Int'>
    readonly email: FieldRef<"Stylist", 'String'>
    readonly password: FieldRef<"Stylist", 'String'>
    readonly website: FieldRef<"Stylist", 'String'>
    readonly emailContact: FieldRef<"Stylist", 'String'>
    readonly phoneContact: FieldRef<"Stylist", 'String'>
    readonly contactPreference: FieldRef<"Stylist", 'String'>
    readonly profileImage: FieldRef<"Stylist", 'String'>
    readonly workImages: FieldRef<"Stylist", 'String[]'>
    readonly videos: FieldRef<"Stylist", 'String[]'>
    readonly isVisible: FieldRef<"Stylist", 'Boolean'>
    readonly createdAt: FieldRef<"Stylist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stylist findUnique
   */
  export type StylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
    /**
     * Filter, which Stylist to fetch.
     */
    where: StylistWhereUniqueInput
  }

  /**
   * Stylist findUniqueOrThrow
   */
  export type StylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
    /**
     * Filter, which Stylist to fetch.
     */
    where: StylistWhereUniqueInput
  }

  /**
   * Stylist findFirst
   */
  export type StylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
    /**
     * Filter, which Stylist to fetch.
     */
    where?: StylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stylists to fetch.
     */
    orderBy?: StylistOrderByWithRelationInput | StylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stylists.
     */
    cursor?: StylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stylists.
     */
    distinct?: StylistScalarFieldEnum | StylistScalarFieldEnum[]
  }

  /**
   * Stylist findFirstOrThrow
   */
  export type StylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
    /**
     * Filter, which Stylist to fetch.
     */
    where?: StylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stylists to fetch.
     */
    orderBy?: StylistOrderByWithRelationInput | StylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stylists.
     */
    cursor?: StylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stylists.
     */
    distinct?: StylistScalarFieldEnum | StylistScalarFieldEnum[]
  }

  /**
   * Stylist findMany
   */
  export type StylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
    /**
     * Filter, which Stylists to fetch.
     */
    where?: StylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stylists to fetch.
     */
    orderBy?: StylistOrderByWithRelationInput | StylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stylists.
     */
    cursor?: StylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stylists.
     */
    skip?: number
    distinct?: StylistScalarFieldEnum | StylistScalarFieldEnum[]
  }

  /**
   * Stylist create
   */
  export type StylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
    /**
     * The data needed to create a Stylist.
     */
    data: XOR<StylistCreateInput, StylistUncheckedCreateInput>
  }

  /**
   * Stylist createMany
   */
  export type StylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stylists.
     */
    data: StylistCreateManyInput | StylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stylist createManyAndReturn
   */
  export type StylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
    /**
     * The data used to create many Stylists.
     */
    data: StylistCreateManyInput | StylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stylist update
   */
  export type StylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
    /**
     * The data needed to update a Stylist.
     */
    data: XOR<StylistUpdateInput, StylistUncheckedUpdateInput>
    /**
     * Choose, which Stylist to update.
     */
    where: StylistWhereUniqueInput
  }

  /**
   * Stylist updateMany
   */
  export type StylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stylists.
     */
    data: XOR<StylistUpdateManyMutationInput, StylistUncheckedUpdateManyInput>
    /**
     * Filter which Stylists to update
     */
    where?: StylistWhereInput
    /**
     * Limit how many Stylists to update.
     */
    limit?: number
  }

  /**
   * Stylist updateManyAndReturn
   */
  export type StylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
    /**
     * The data used to update Stylists.
     */
    data: XOR<StylistUpdateManyMutationInput, StylistUncheckedUpdateManyInput>
    /**
     * Filter which Stylists to update
     */
    where?: StylistWhereInput
    /**
     * Limit how many Stylists to update.
     */
    limit?: number
  }

  /**
   * Stylist upsert
   */
  export type StylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
    /**
     * The filter to search for the Stylist to update in case it exists.
     */
    where: StylistWhereUniqueInput
    /**
     * In case the Stylist found by the `where` argument doesn't exist, create a new Stylist with this data.
     */
    create: XOR<StylistCreateInput, StylistUncheckedCreateInput>
    /**
     * In case the Stylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StylistUpdateInput, StylistUncheckedUpdateInput>
  }

  /**
   * Stylist delete
   */
  export type StylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
    /**
     * Filter which Stylist to delete.
     */
    where: StylistWhereUniqueInput
  }

  /**
   * Stylist deleteMany
   */
  export type StylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stylists to delete
     */
    where?: StylistWhereInput
    /**
     * Limit how many Stylists to delete.
     */
    limit?: number
  }

  /**
   * Stylist without action
   */
  export type StylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stylist
     */
    omit?: StylistOmit<ExtArgs> | null
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


  export const StylistScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    website: 'website',
    emailContact: 'emailContact',
    phoneContact: 'phoneContact',
    contactPreference: 'contactPreference',
    profileImage: 'profileImage',
    workImages: 'workImages',
    videos: 'videos',
    isVisible: 'isVisible',
    createdAt: 'createdAt'
  };

  export type StylistScalarFieldEnum = (typeof StylistScalarFieldEnum)[keyof typeof StylistScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Deep Input Types
   */


  export type StylistWhereInput = {
    AND?: StylistWhereInput | StylistWhereInput[]
    OR?: StylistWhereInput[]
    NOT?: StylistWhereInput | StylistWhereInput[]
    id?: IntFilter<"Stylist"> | number
    email?: StringFilter<"Stylist"> | string
    password?: StringFilter<"Stylist"> | string
    website?: StringNullableFilter<"Stylist"> | string | null
    emailContact?: StringNullableFilter<"Stylist"> | string | null
    phoneContact?: StringNullableFilter<"Stylist"> | string | null
    contactPreference?: StringNullableFilter<"Stylist"> | string | null
    profileImage?: StringNullableFilter<"Stylist"> | string | null
    workImages?: StringNullableListFilter<"Stylist">
    videos?: StringNullableListFilter<"Stylist">
    isVisible?: BoolFilter<"Stylist"> | boolean
    createdAt?: DateTimeFilter<"Stylist"> | Date | string
  }

  export type StylistOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    website?: SortOrderInput | SortOrder
    emailContact?: SortOrderInput | SortOrder
    phoneContact?: SortOrderInput | SortOrder
    contactPreference?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    workImages?: SortOrder
    videos?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
  }

  export type StylistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: StylistWhereInput | StylistWhereInput[]
    OR?: StylistWhereInput[]
    NOT?: StylistWhereInput | StylistWhereInput[]
    password?: StringFilter<"Stylist"> | string
    website?: StringNullableFilter<"Stylist"> | string | null
    emailContact?: StringNullableFilter<"Stylist"> | string | null
    phoneContact?: StringNullableFilter<"Stylist"> | string | null
    contactPreference?: StringNullableFilter<"Stylist"> | string | null
    profileImage?: StringNullableFilter<"Stylist"> | string | null
    workImages?: StringNullableListFilter<"Stylist">
    videos?: StringNullableListFilter<"Stylist">
    isVisible?: BoolFilter<"Stylist"> | boolean
    createdAt?: DateTimeFilter<"Stylist"> | Date | string
  }, "id" | "email">

  export type StylistOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    website?: SortOrderInput | SortOrder
    emailContact?: SortOrderInput | SortOrder
    phoneContact?: SortOrderInput | SortOrder
    contactPreference?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    workImages?: SortOrder
    videos?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    _count?: StylistCountOrderByAggregateInput
    _avg?: StylistAvgOrderByAggregateInput
    _max?: StylistMaxOrderByAggregateInput
    _min?: StylistMinOrderByAggregateInput
    _sum?: StylistSumOrderByAggregateInput
  }

  export type StylistScalarWhereWithAggregatesInput = {
    AND?: StylistScalarWhereWithAggregatesInput | StylistScalarWhereWithAggregatesInput[]
    OR?: StylistScalarWhereWithAggregatesInput[]
    NOT?: StylistScalarWhereWithAggregatesInput | StylistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stylist"> | number
    email?: StringWithAggregatesFilter<"Stylist"> | string
    password?: StringWithAggregatesFilter<"Stylist"> | string
    website?: StringNullableWithAggregatesFilter<"Stylist"> | string | null
    emailContact?: StringNullableWithAggregatesFilter<"Stylist"> | string | null
    phoneContact?: StringNullableWithAggregatesFilter<"Stylist"> | string | null
    contactPreference?: StringNullableWithAggregatesFilter<"Stylist"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"Stylist"> | string | null
    workImages?: StringNullableListFilter<"Stylist">
    videos?: StringNullableListFilter<"Stylist">
    isVisible?: BoolWithAggregatesFilter<"Stylist"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Stylist"> | Date | string
  }

  export type StylistCreateInput = {
    email: string
    password: string
    website?: string | null
    emailContact?: string | null
    phoneContact?: string | null
    contactPreference?: string | null
    profileImage?: string | null
    workImages?: StylistCreateworkImagesInput | string[]
    videos?: StylistCreatevideosInput | string[]
    isVisible?: boolean
    createdAt?: Date | string
  }

  export type StylistUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    website?: string | null
    emailContact?: string | null
    phoneContact?: string | null
    contactPreference?: string | null
    profileImage?: string | null
    workImages?: StylistCreateworkImagesInput | string[]
    videos?: StylistCreatevideosInput | string[]
    isVisible?: boolean
    createdAt?: Date | string
  }

  export type StylistUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    contactPreference?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    workImages?: StylistUpdateworkImagesInput | string[]
    videos?: StylistUpdatevideosInput | string[]
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StylistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    contactPreference?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    workImages?: StylistUpdateworkImagesInput | string[]
    videos?: StylistUpdatevideosInput | string[]
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StylistCreateManyInput = {
    id?: number
    email: string
    password: string
    website?: string | null
    emailContact?: string | null
    phoneContact?: string | null
    contactPreference?: string | null
    profileImage?: string | null
    workImages?: StylistCreateworkImagesInput | string[]
    videos?: StylistCreatevideosInput | string[]
    isVisible?: boolean
    createdAt?: Date | string
  }

  export type StylistUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    contactPreference?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    workImages?: StylistUpdateworkImagesInput | string[]
    videos?: StylistUpdatevideosInput | string[]
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StylistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    emailContact?: NullableStringFieldUpdateOperationsInput | string | null
    phoneContact?: NullableStringFieldUpdateOperationsInput | string | null
    contactPreference?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    workImages?: StylistUpdateworkImagesInput | string[]
    videos?: StylistUpdatevideosInput | string[]
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StylistCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    website?: SortOrder
    emailContact?: SortOrder
    phoneContact?: SortOrder
    contactPreference?: SortOrder
    profileImage?: SortOrder
    workImages?: SortOrder
    videos?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
  }

  export type StylistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StylistMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    website?: SortOrder
    emailContact?: SortOrder
    phoneContact?: SortOrder
    contactPreference?: SortOrder
    profileImage?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
  }

  export type StylistMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    website?: SortOrder
    emailContact?: SortOrder
    phoneContact?: SortOrder
    contactPreference?: SortOrder
    profileImage?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
  }

  export type StylistSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StylistCreateworkImagesInput = {
    set: string[]
  }

  export type StylistCreatevideosInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StylistUpdateworkImagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type StylistUpdatevideosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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