import { createTRPCReact} from "@trpc/react-query"
import type { appRouter } from "../trpc"

export const trpc = createTRPCReact<appRouter>({})