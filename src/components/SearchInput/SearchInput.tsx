import styles from './SearchInput.module.scss';
//MATERIAL-UI
import SearchIcon from '@mui/icons-material/Search';


type SearchInputProps = {
    onChangeFunction: (e: any) => void;
}

function SearchInput({ onChangeFunction }: SearchInputProps) {
    return (
        <div className={styles.wrapper}>
            <SearchIcon/>

            <input
                className={styles.input}
                type="text"
                placeholder="Name / Region"
                onChange={onChangeFunction}
            />
        </div>
    )
}

export default SearchInput;