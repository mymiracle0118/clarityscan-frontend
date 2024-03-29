import { AuthService } from "@/services/auth.service";

export const authService = new AuthService("process.env.REACT_APP_SERVER_URL");
