import React from 'react';
import '../App.css';

export default function Pet(props){
const { animalToAdopt } = props;
    return (
        <section className="pet-section">
        <header className="pet-header">
            <h2>{animalToAdopt.name}</h2>
             <img src={animalToAdopt.imageURL} className="image" alt={animalToAdopt.imageDescription} />
         </header>
        <main>
            <dl>
                <dt>Sex </dt>
                <dd>{animalToAdopt.sex}</dd>
                <dt>Age </dt>
                <dd>{animalToAdopt.age}</dd>
                <dt>Breed </dt>
                <dd> {animalToAdopt.breed}</dd>
                <dt>Story </dt>
                <dd>{animalToAdopt.story} </dd>
            </dl>
            <button className="adopt" onClick={e => {
                e.preventDefault();
                props.onAdoptPet()}}
               >Adopt</button>
        </main>
</section>
    )
}
