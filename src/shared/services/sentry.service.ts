import * as Sentry from "@sentry/node";

const initializeSentry = (dsn: string) => {
    Sentry.init({ dsn, tracesSampleRate: 1.0 });
};

export default initializeSentry;
