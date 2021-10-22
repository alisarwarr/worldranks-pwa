import { useState, useEffect } from 'react';
import styles from './country.module.scss';
//COMPONENTS
import { Layout } from '../../components';
//NEXTJS
import { GetServerSideProps } from 'next';
//AXIOS
import axios from 'axios';
//NEXTJS-LINK
import Link from 'next/link';
//MILLIFY
import millify from 'millify';



//for fetching data declared seperate function
export const getCountryData = async(name: string) => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/alpha/${name}`);
    return data;
}



type props = {
    country: any;
}

export default function({ country }: props) {
    const [ neighbours, setNeighbours ] = useState<any[]>([]);

    useEffect(() => {
        if(/* if 'neighbours' exist then fetch */
            country[0].borders
        ) {
            const fetchData = async() => {
                setNeighbours(await Promise.all(
                    country[0].borders.map((border: string) => getCountryData(border))
                ));
            }

            fetchData();
        }
    }, []);

//*****************************************************************************************
    let name = country[0].name.common;

    let flag = `https://flagcdn.com/108x81/${country[0].cca2.toLowerCase()}.png` || `https://www.countryflags.io/${country[0].cca2}/shiny/64.png`;

    let region = country[0].region;

    let population = country[0].population;

    let area = country[0].area;

    let capital = country[0].capital[0];

    let languages = country[0].languages;
    languages = Object.values(languages);
    languages = languages.join(", ");

    let currencies = country[0].currencies;
    currencies = Object.values(currencies);
    currencies = currencies[0].name;

    let nativeName = country[0].translations.ara.common;
//*****************************************************************************************

    return (
        <Layout title={name}>
            <div className={styles.div}>

                <div className={styles.left}>
                    <div className={styles.overview}>
                        <img src={flag} alt={name}/>

                        <h1 className={styles.overview_name}> {name} </h1>

                        <div className={styles.overview_region}> {region} </div>
    
                        <div className={styles.overview_container}>
                            <div className={styles.overview_container_population}>
                                <div className={styles.overview_container_population_value}> {millify(population)} </div>
                                <div className={styles.overview_container_population_label}> Population </div>
                            </div>
    
                            <div className={styles.overview_area}>               
                                <div className={styles.overview_container_area_value}> {millify(area)} </div>
                                <div className={styles.overview_container_area_label}> Area </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.right}>
                    <div className={styles.details}>
                        <h4> Details </h4>
    
                        <div className={styles.details_row}>
                            <div className={styles.details_row_label}> Capital </div>
                            <div className={styles.details_row_value}> {capital} </div>
                        </div>
    
                        <div className={styles.details_row}>
                            <div className={styles.details_row_label}> Languages </div>
                            <div className={styles.details_row_value}> {languages.length > 3 ? `${languages}, etc` : `${languages}`} </div>
                        </div>
    
                        <div className={styles.details_row}>
                            <div className={styles.details_row_label}> Currencies </div>
                            <div className={styles.details_row_value}> {currencies} </div>
                        </div>
    
                        <div className={styles.details_row}>
                            <div className={styles.details_row_label}> Name </div>
                            <div className={styles.details_row_value}> {nativeName} </div>
                        </div>
    
                        {
                            /* if 'neighbours' exist then render */
                            neighbours && (
                                <div className={styles.details_neighbours}>
                                    <div className={styles.details_neighbours_label}> Neighbour </div>
    
                                    <div className={styles.details_neighbours_container}>
                                        {
                                            neighbours.map((country: any) => {
                                                let name = country[0].name.common;
                                                let flag = `https://flagcdn.com/108x81/${country[0].cca2.toLowerCase()}.png` || `https://www.countryflags.io/${country[0].cca2}/shiny/64.png`;

                                                return (
                                                    <Link href={`/country/${country[0].cca2}`} key={name}>
                                                        <div className={styles.details_neighbours_container_country}>
                                                            <img src={flag} alt={name}/>
    
                                                            <div className={styles.details_neighbours_container_country_name}> {name} </div>
                                                        </div>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>    
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        </Layout>
    )
}



export const getServerSideProps: GetServerSideProps = async(context: any) => {
    const data = await getCountryData(context.params.name);

    return {
        props: {
            country: data
        }
    }
}