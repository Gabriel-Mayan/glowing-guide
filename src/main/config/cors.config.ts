import cors from "cors";

export default cors({
    credentials: true,
    origin: true,
    methods: [
        "GET",
        "PUT",
        "PATCH",
        "POST",
        "DELETE",
    ],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Date",
        "Origin",
        "Accept",
        "Cookie",
        "Set-Cookie",
        "X-XSRF-TOKEN",
        "Accept-Language",
    ],
});
