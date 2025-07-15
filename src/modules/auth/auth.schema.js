import { z } from "zod";

export const registerSchema = z.object({
    fullName: z.string().min(1),
    email: z.string(),
    password: z.string().optional()
})
 