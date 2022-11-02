import React from 'react';
import {useRecoilValue} from 'recoil'
import {nonfictionBooksState} from '../atoms'
import AllFictionBooks from './AllFictionBooks';

function Home(props) {
    const nonfictionBooks = useRecoilValue(nonfictionBooksState)
  
    console.log(nonfictionBooks)

    return (
        <div>
            <h1>Home</h1>
            <AllFictionBooks />
        </div>
    );
}

export default Home;