import { RedisClientOptions } from "redis";

const config: RedisClientOptions = {
    username: process.env.REDIS_USERNAME || "",
    password: process.env.REDIS_PASSWORD || "",
    socket: {
        host: process.env.REDIS_HOST || "",
        port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : undefined,
    },
};

export default config;
