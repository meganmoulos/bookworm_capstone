import React from 'react';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import {useRecoilValue} from 'recoil'
import {shelvesState} from '../atoms'
import GoogleBook from './GoogleBook';
import Shelf from './Shelf';

function Shelves(props) {
    const shelves = useRecoilValue(shelvesState)

    return (
        <div>
            {shelves.map(shelf => <Shelf key={shelf.id} shelf={shelf}/>)}
        </div>
    );
}

export default Shelves;