import { defineConfig, loadEnv, type ServerOptions } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import { normalizeModuleId } from "vite/module-runner";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });
type TMode = "development" | "production";
interface AppEnv {
  PORT: string;
  VITE_ENV: TMode;
}

const validateEnv = (envMode: TMode, env: AppEnv) => {
  const requiredVars: (keyof AppEnv)[] = ["PORT", "VITE_ENV"];

  for (const key of requiredVars) {
    if (!env[key]) {
      throw new Error(
        `${key} is missing! Please define it in your .env.${envMode}`,
      );
    }
  }
};

const normalizePort = (port: string) => {
  const normalizePort = parseInt(port);
  if (isNaN(normalizePort)) {
    throw new Error(`Invalid port value: ${port}`);
  }
  return normalizePort;
};
export default defineConfig(({ mode }) => {
  const envMode = mode as TMode;
  const env = loadEnv(envMode, process.cwd(), "") as unknown as AppEnv;

  validateEnv(envMode, env);

  const port = normalizePort(env.PORT);
  const config: ServerOptions = {
    port,
    open: true,
  };
  return {
    plugins: [react(), tailwindcss()],
    server: config,
    preview: config,
    build: {
      minify: true,
    },
  };
});
