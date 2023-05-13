// const DEVELOPMENT_DOMAIN = "http://localhost:8000";
const DEVELOPMENT_DOMAIN = "https://starosta.pro";

const PRODUCTION_DOMAIN = "https://starosta.pro";

let domain: string;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    domain = DEVELOPMENT_DOMAIN;
} else {
    domain = PRODUCTION_DOMAIN;
}

export { domain };
