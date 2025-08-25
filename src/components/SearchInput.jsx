import './SearchInput.css';

export default function SearchInput() {
   return (
      <form className='search-component'>
         <span className='material-symbols-outlined'>search</span>
         <input
            type='text'
            name='city'
            id='city'
            placeholder='Search city...'
         />
         <input type='submit' value='' style={{ display: 'none' }} />
      </form>
   );
}
