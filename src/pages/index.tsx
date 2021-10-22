import { useState } from 'react';
import styles from '../styles/Home.module.scss';
//COMPONENTS
import { Layout, SearchInput, CountriesTable } from '../components';
//NEXTJS
import { GetStaticProps } from 'next';
//AXIOS
import axios from 'axios';



type props = {
    countries: any[];
}

export default function({ countries }: props) {
    const [ keyword, setKeyword ] = useState<string>("");

    //sorted countries by name   ( optional case )
    const sortedCountries = [...countries].sort((a, b) => a.name.common > b.name.common && 1 || -1);

    //filter countries by name   ( special case )
    const filteredCountries = sortedCountries.filter(
        country => country?.name?.common?.toLowerCase().includes(keyword) ||  /* filter by 'name' */
                   country?.region?.toLowerCase().includes(keyword)           /* filter by 'regoin' */
    );

    return (
        <Layout>
            <div className={styles.div}>
                <div className={styles.div_container}>
                    <div className={styles.counts}> {countries.length} Countries </div>
        
                    <SearchInput
                        onChangeFunction={(e: any) => {
                            e.preventDefault();
                            setKeyword(e.target.value.toLowerCase());
                        }}
                    />
                </div>
    
                <CountriesTable countries={filteredCountries}/>
            </div>
        </Layout>
    )
}



export const getStaticProps: GetStaticProps = async() => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");

    return {
        props: {
            countries: data
        }
    }
}