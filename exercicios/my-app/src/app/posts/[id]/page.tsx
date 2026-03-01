import { PostProps } from "../page";

export default async function DetailPost({ 
    params 
}: {
    params: Promise<{ id: string}> 
}) {

    const {id} = await params;

    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data: PostProps = await response.json();

    return(
        <div>
            <h1>Detalhes do Post: {id}</h1>

            <div>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
        </div>
    )
}