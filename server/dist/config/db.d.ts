declare function dbConnection(): Promise<import("typeorm").DataSource>;
export default dbConnection;
