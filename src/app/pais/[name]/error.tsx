"use client"

import Link from "next/link";
import Image from "next/image";

export default function error(){
    return(
        <section className="flex flex-col container ">
            <h1 className="text-5xl text-center font-bold my-16 text-gray-500">Ops, ocorreu um erro ao exibir esse páis!</h1>

            <Link href={"/"} className="flex items-center py-2 justify-center">
                <Image
                src={"/frame.svg"}
                alt="Icone de seta de voltar"
                width={24}
                height={24}
                 />
                Voltar
                
            </Link>
        </section>
    );
}