import styles from './CountriesTable.module.scss';
//MATERIAL-UI
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupIcon from '@mui/icons-material/Group';
import AddRoadIcon from '@mui/icons-material/AddRoad';
//NEXTJS-LINK
import Link from 'next/link';
//MILLIFY
import millify from 'millify';


type CountriesTableProps = {
    countries: any[];
}

function CountriesTable({ countries }: CountriesTableProps) {
    return (
        <div>
            <div className={styles.heading}>
                <div className={styles.heading_flag}></div>

                <button className={styles.heading_name}>
                    <div> Name </div>
                    <SortByAlphaIcon fontSize="small" style={{ color: "#21b6b7", marginLeft: 4 }}/>
                </button>

                <button className={styles.heading_region}>
                    <div> Region </div>
                    <ExploreIcon fontSize="small" style={{ color: "#21b6b7", marginLeft: 4 }}/>
                </button>

                <button className={styles.heading_population}>
                    <div> Population </div>
                    <GroupIcon fontSize="small" style={{ color: "#21b6b7", marginLeft: 4 }}/>
                </button>

                <button  className={styles.heading_area}>
                    <div> Area(km<sup style={{ fontSize: "0.5rem" }}>2</sup>) </div>
                    <AddRoadIcon fontSize="small" style={{ color: "#21b6b7", marginLeft: 4 }}/>
                </button>
            </div>

            {
                countries.map((country, i) => {
                    let name = country.name.common;
                    let flag = `https://flagcdn.com/108x81/${country.cca2.toLowerCase()}.png` || `https://www.countryflags.io/${country.cca2}/shiny/64.png`;
                    let region = country.region;
                    let population = country.population;
                    let area = country.area;

                    return (
                        <Link href={`/country/${country.cca3}`} key={i}>
                            <div className={styles.row}>
                                <img src={flag} alt={name}/>

                                <div className={styles.row_name}> {name} </div>

                                <div className={styles.row_region}> {region} </div>
    
                                <div className={styles.row_population}> {millify(population)} </div>
    
                                <div className={styles.row_area}> {millify(area) || 0} </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default CountriesTable;