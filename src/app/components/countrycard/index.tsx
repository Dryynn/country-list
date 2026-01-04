import Link from "next/link";
import Image from "next/image";

export default function CountryCard({ 
    name,
    ptName, 
    flag, 
    flagAlt
}: { 
    name: string; 
    ptName: string;
    flag:string;
    flagAlt:string;
}){
    return(
        <Link href={`/pais/${name}`} key={name}>
          <article
            className="h-64 min-w-full p-2 bg-white border-2 border-gray-200 rounded-xl 
            hover:scale-102 transition-all hover: hover:shadow-xl">
            <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl">
              <Image
                src={flag}
                alt={flagAlt}
                fill
                className="object-cover"
              />
            </div>
            <h1 className="flex justify-center font-bold text-xl">{ptName}</h1>
          </article>
        </Link>
    );
}