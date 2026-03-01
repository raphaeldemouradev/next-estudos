import Link from "next/link";

export default function NotFound() {
    return(
        <div className="text-center flex justify-center items-center flex-col h-100">
            <h1 className="font-bold">Pagina não encontrada! Erro: 404</h1>

            <Link href='/' >
                Voltar para Home
            </Link>
        </div>
    )
}