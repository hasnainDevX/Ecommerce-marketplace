"use client"
import { Icons } from "@/components/Icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import cn from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { AuthCredentialsValidator, TypeAuthCredentialsValidator } from "@/lib/Validators/account-credentials-validator"
import { trpc } from "@/trpc/client"

const page = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<TypeAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    })

    // const {data} = trpc.anyApiRoute.useQuery()
    // console.log(data);

    const {mutate, isLoading} = trpc.auth.createPayloadUser.useMutation({})

    const onSubmit = ({email, password}: TypeAuthCredentialsValidator)=>{
        mutate({ email, password,})
    }
  return (
    <>
      <div className="container relative flex flex-col items-center justify-center pt-20 lg:px-0">
        <div className="mx-auto flex w-full flex-col space-y-6 justify-center sm:w-[350px]">
            <div className="flex flex-col items-center space-y-2 text-center">
                <Icons.logo className="h-20 w-20" />
                <h1 className="text-2xl font-bold">
                    Create an Account
                </h1>

                <Link href="/login" className={buttonVariants({ variant: "link" ,})}>Already have an account? Sign-in
                <ArrowRight className="h-4 w-4"/>
                </Link>
            </div>

            <div className="grid gap-6">
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <div className="grid gap-2">
                        <div className="grid gap-1 py-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                            {...register("email")}
                            className={cn({
                                "focus-visible:ring-red-500":errors.email,
                            })} placeholder="your-email@example.com"/>
                        </div>
                        <div className="grid gap-1 py-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                            {...register("password")}
                            type="password"
                            className={cn({
                                "focus-visible:ring-red-500":true
                            })} placeholder="Password"/>
                        </div>
                        <Button>Sign up</Button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}
// re_BvDTaz47_D9av5qUXNjBry5NctD3M2Wap

export default page
