import { AuthCredentialsValidator } from "../lib/Validators/account-credentials-validator"
import {publicProcedure, router} from "./trpc"
import { getPayloadClient } from "../getPayload"
import { TRPCError } from "@trpc/server"

export const authRouter = router({
    createPayloadUser: publicProcedure.input(AuthCredentialsValidator).mutation( async ({input})=>{
        const { email, password } = input
        const payload = await getPayloadClient()

        // Check if user already exists
        const {docs: users} = await payload.find({
            collection: "users",
            where: {
                email: {
                    equals: email,
                }
            }
        })
        if(users.length !== 0 )
            throw new TRPCError({code: "CONFLICT"})

        await payload.create({
            collection: "users",
            data:{
                email,
                password,
                role:"user",
            },
        })

        return { success:true, sentToEmail: email }

    })
})