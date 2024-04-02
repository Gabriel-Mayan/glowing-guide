import paths from "./paths/index";
import schemas from "./schema/index";
import components from "./components/index";
import packJson from "@/package.json";

export default {
  openapi: "3.0.0",
  info: {
    title: packJson.name,
    description: packJson.description,
    version: packJson.version,
  },
  servers: [
    { url: "/" },
  ],
  tags: [
    { name: "Login", description: "API about Login" },
    { name: "User", description: "API about User" },
  ],
  paths,
  schemas,
  components,
};
