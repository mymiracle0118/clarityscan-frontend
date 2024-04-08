import { AuthService } from "@/services/auth.service";

export const authService = new AuthService(import.meta.env.REACT_APP_SERVER_URL);
