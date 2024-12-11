// import { redirect } from "next/navigation"
// import clientPromise from "@/lib/mongodb"
// export default async function Page({ params }) {
//     try {
//         const shorturl = params.shorturl

//         const client = await clientPromise;
//         const db = client.db("bitlinks")
//         const collection = db.collection("url")

//         const doc = await collection.findOne({shorturl: shorturl})
//         console.log(doc)
//         if(doc){
//              return redirect(doc.url)
//         }
//         else{
//             return redirect(`${process.env.NEXT_PUBLIC_HOST}`)
//         }
//     } catch (error) {
//         console.error("Error in [shorturl] page:", error);
//         return redirect(`${process.env.NEXT_PUBLIC_HOST}/error`)
//     }
// }

import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({shorturl: shorturl})
    console.log(doc)
    if(doc){
         redirect(doc.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div>My Post: {url}</div>
  }