import { z } from "zod";

const categorySchema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    slug: z.string().min(1),
    deleteAt: z.date().nullable().optional(),
})
export default categorySchema