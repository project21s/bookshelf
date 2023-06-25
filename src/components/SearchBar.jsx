import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar({
    filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange
  }) {
    return (
      <form>
        <input class="SearchInput"
          type="text" 
          value={filterText} placeholder="ПОИСК" 
          onChange={(e) => onFilterTextChange(e.target.value)} />
          <div class="iconSearch"><AiOutlineSearch /></div>
          <div class="FreeBooksCheck">
            <input 
            type="checkbox" 
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
            {' '} 
            Свободные книги
          </div>
      </form>
    );
  }

  export default SearchBar;