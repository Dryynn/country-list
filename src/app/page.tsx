import Image from "next/image";
import Link from "next/link";
import { cache } from "react";
import CountryCard from "./components/countrycard";

export type Country = {
  name: {
    common: string;
  };

  translations: {
    por: {
      common: string;
    };
  };

  flags: {
    svg: string;
    alt: string;
  };

  capital: string,
  population: number,
  region: string,
  subregion: string,
  languages?: { // "?" Significa que é opcional
    [key: string]: string;
  };

  borders:string[];

  cca3: string;
}

async function getCountries(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,translations,flags",{cache: 'force-cache'});
  
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-3 mt-16">
      {countries.map((country) => (
        <CountryCard 
        key={country.name.common}
        name={country.name.common}
        ptName={country.translations.por.common}
        flag={country.flags.svg}
        flagAlt={country.flags.alt} 
        />
      ))}
    </section>
  );
}


