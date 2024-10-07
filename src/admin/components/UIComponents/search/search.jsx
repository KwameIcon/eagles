import { FaSearch } from "react-icons/fa";
import { SearchContainer, SearchField, SearchFieldContainer } from "./search.styled";

const Search = () =>(


    <SearchContainer>
        <SearchFieldContainer>
            <FaSearch className="icon"/>
            <SearchField
                type="search"
                placeholder="Search for something"
            />
        </SearchFieldContainer>
    </SearchContainer>
)

export default Search;