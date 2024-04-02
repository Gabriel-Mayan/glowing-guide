import { Server } from "socket.io";
import { createClient } from "redis";
import { createAdapter } from "@socket.io/redis-adapter";

import config from "@main/config/redis.config";
import httpServer from "@/src/app";

export const redisSocketAdapter = async () => {
    const server = new Server(httpServer);
    const pubClient = createClient(config);
    const subClient = pubClient.duplicate();

    await pubClient.connect();
    await subClient.connect();

    return server.adapter(createAdapter(pubClient, subClient));
};
