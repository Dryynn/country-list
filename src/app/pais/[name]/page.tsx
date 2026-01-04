import CountryCard from "@/app/components/countrycard";
import { Country } from "@/app/page";
import Image from "next/image";
import Link from "next/link";


/* async function getCountriesByName(name: string): Promise<Country> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    return (await response.json())[0];
} */

async function getCountryByName(name: string): Promise<Country> {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,translations,flags,region,population,subregion,capital,languages,borders", { cache: 'force-cache' });
    const countries: Country[] = await response.json();

    return countries.find((country: Country) => country.name.common == name)!; // "!" significa que sempre vai retornar
}

async function getCountryBordersbyName(name: string) {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,translations,flags,region,population,subregion,capital,languages,borders,cca3", {cache: 'force-cache'});
    const countries: Country[] = await response.json();



    const country = countries.find(
        (country: Country) => country.name.common == name
    )!;

    return country.borders?.map((border) => {
        const borderCountry = countries.find((country) => country.cca3 == border)!;
        return {
            name: borderCountry?.name.common,
            ptName: borderCountry?.translations.por.common,
            flag: borderCountry?.flags.svg,
            flagAlt: borderCountry?.flags.alt,
        };
    });
}

export default async function CountryPage({
    params,
}: {
    params: Promise<{
        name: string;
    }>;
}) {
    const { name } = await params;
    const country = await getCountryByName(decodeURI(name));
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    const borderCountries = await getCountryBordersbyName(decodeURI(name));

    return (
        <section className="flex flex-col container ">
            <h1 className="font-bold text-center text-5xl text-gray-800 my-16">
                {country.translations.por.common}
            </h1>

            <Link href="/" className="flex items-center py-2">
                <Image
                    src={"/frame.svg"}
                    width={24}
                    height={24}
                    alt="Ícone de seta de voltar "
                />
                Voltar
            </Link>

            <article className="flex md:flex-row flex-col justify-between min-w-full bg-white p-10 rounded-xl">
                <section >
                    <p className="font bold text-xl text-gray mt-2">
                        <strong>Capital:</strong> {country.capital}
                    </p>
                    <p className="font bold text-xl text-gray mt-2">
                        <strong>Continente: </strong> {country.region} - {country.subregion}
                    </p>
                    <p className="font bold text-xl text-gray mt-2">
                        <strong>População: </strong>{formatter.format(country.population)}
                    </p>
                    <p className="font bold text-xl text-gray mt-2 ">
                        <strong>Idiomas: </strong>
                        <br />
                        {Object.values(country.languages).map((language) => (
                            <span key={language} className="inline-block px-2 mr-1 rounded-full text-white text-sm bg-indigo-700">{language}</span>
                        ))}
                    </p>
                </section>
                <div className="relative h-48 my-2 md:h-auto w-96 shadow-md md:order-last order-first">
                    <Image
                        src={country.flags.svg}
                        alt={country.flags.alt}
                        fill
                        className="object-cover"
                    />
                </div>
            </article>
            <section className="">
                <h3 className="font-bold text-2xl mt-12 text-gray-800">
                    Páises que fazem fronteira
                </h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-3">
                    {borderCountries?.map((border) => (
                        <CountryCard key={border.name}
                         {... border} />
                    ))}
                </div> 
                {/*  <div>
                    {Object.values(country.borders).map((border) => (
                        <div key={border} className="p-4">{border}</div>
                    ))}
                </div> */}
            </section>
        </section>
    );
}