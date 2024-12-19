import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const { shorturl } = params;

    if (!shorturl || typeof shorturl !== "string") {
        return redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl });
    if (doc && doc.url) {
        return redirect(doc.url);
    }
    return redirect(process.env.NEXT_PUBLIC_HOST || "/");
}
