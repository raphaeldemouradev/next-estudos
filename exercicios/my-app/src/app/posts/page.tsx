import Link from "next/link";

export default async function Posts() {

    const response = await fetch('https://dummyjson.com/post')
    const data: ResponseProps = await response.json();
    console.log(data);
    

    async function handlePost() {
        'use server'

        const response = await fetch('https://dummyjson.com/post')
        const data: ResponseProps = await response.json();
        console.log(data);
    }

    async function handleSearchUsers(formData: FormData) {
        'use server'

        const userId = formData.get('userId')
        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`)
        const data: ResponseProps = await response.json();

        console.log(data)
    }

    return(
        <div className="bg-gray-300 h-auto p-4">
            <div className="text-center font-bold">
                <h1 className="text-2xl">Todos os Posts</h1>
            </div>

            <button onClick={handlePost}>Buscar Post</button>

            <form className="m-5 flex gap-2 justify-center" action={handleSearchUsers}>
                <input 
                    type="text" 
                    placeholder="Procure pelo ID"
                    className="bg-white border-2 rounded p-1"
                    name="userId"
                />
                <button 
                    className="bg-blue-500 text-white p-0.5 rounded"
                    type="submit"
                >
                    Buscar usuário
                </button>
            </form>

            <div className="flex flex-col gap-5">
                {data.posts.map(post => (
                    <div key={post.id} className="bg-gray-900 h-auto w-full m-auto p-4">
                        <img className="w-full h-[200] bg-gray-100" src="#"/>
                        <h2 className="p-1 text-gray-400 font-bold text-2xl">{post.title}</h2>
                        <p className="text-gray-100 mb-5">{post.body}</p>
                        <p className="text-blue-500 text-center">
                            <Link href={`/posts/${post.id}`}>Acessar detalhes</Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[];
}