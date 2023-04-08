import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>aunty</h2>
            <section className='flex'>
                <Cousin>Abul</Cousin>
                <Cousin hasFriend={true} ring={ring}>Kabul</Cousin>
            </section>
        </div>
    );
};

export default Aunty;