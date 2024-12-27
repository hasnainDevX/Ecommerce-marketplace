import { CollectionConfig } from "payload/types"

const Users: CollectionConfig ={
    slug: "users",
    auth: {
        verify:{
            generateEmailHTML:({token})=> {
                return `<h1> hello </h1>`
            },
        }
    },
    access: {
        read: ()=> true,
        create: ()=> true
    },
    fields: [
        {
            name: "role",
            required: true,
            defaultValue: "user",
            // admin: {
            //     condition: ()=> false
            // },
            type: "select",
            options:[
                {label: "Admin", value: "admin"},
                {label: "User", value: "user"},
            ]
        },
    ]
}
export default Users