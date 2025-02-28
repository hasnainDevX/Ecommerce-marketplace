import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload/config";
import { slateEditor } from "@payloadcms/richtext-slate"
import { webpackBundler } from "@payloadcms/bundler-webpack";
import Users from "./collections/users";
import path from "path";
import dotenv from 'dotenv';
dotenv.config({
    path: path.resolve(__dirname, '../.env')
});

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections:[Users],
    routes:{
        admin:"/sell"
    },
    admin:{
        user: "users",
        bundler:webpackBundler(),
        meta: {
            titleSuffix:" - Saphire",
            favicon:"/favicon.png",
            ogImage:"/thumbnail.jpg",
        }
    },

    rateLimit: {
        max:2000,
    },
    editor:slateEditor({}),
    db: mongooseAdapter({
        url:process.env.MONGODB_URL!,
    }),

    typescript:{
        outputFile: path.resolve(__dirname, "payload-types.ts"),
    }

})