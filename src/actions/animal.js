import {API_BASE_URL} from '../config'; 

export const fetchAnimal = (animal) => dispatch => {

	dispatch(fetchAnimalRequest());
	return fetch(`${API_BASE_URL}/api/${animal}`).then(res => {
			if(!res.ok){
			throw new Error(res.statusText);
			}
			return res.json()
			}).then(data =>
				dispatch(fetchAnimalSuccess(data))
			       ).catch(err => {
				       dispatch(fetchAnimalError(err))
				       })
}



export const FETCH_ANIMAL_REQUEST = 'FETCH_ANIMAL_REQUEST';
export const fetchAnimalRequest = () => ({
type: FETCH_ANIMAL_REQUEST

});


export const FETCH_ANIMAL_SUCCESS = 'FETCH_ANIMAL_SUCCESS';
export const fetchAnimalSuccess = (animal) => ({

type: FETCH_ANIMAL_SUCCESS,
data: animal

});

export const FETCH_ANIMAL_ERROR = 'FETCH_ANIMAL_ERROR';
export const fetchAnimalError = error => ({
type: FETCH_ANIMAL_ERROR,
error

});



export const adoptAnimal = (animal) => dispatch => {
	dispatch(adoptAnimalRequest());
	return fetch(`${API_BASE_URL}/api/${animal}`, { method: 'DELETE' }
		    ).then(res => {
			    if(!res.ok){
			    throw new Error(res.statusText);
			    }

			    return res.json()
			    }).then(() =>

				    dispatch(fetchAnimal())
				   ).catch(err => {
					   dispatch(fetchAnimalError(err))
					   })
}

export const ADOPT_ANIMAL_REQUEST = 'ADOPT_ANIMAL_REQUEST';
export const adoptAnimalRequest = () => ({
type: ADOPT_ANIMAL_REQUEST

});


export const ADOPT_ANIMAL_SUCCESS = 'ADOPT_ANIMAL_SUCCESS';
export const adoptAnimalSuccess = () => ({

type: FETCH_ANIMAL_SUCCESS


});

export const ADOPT_ANIMAL_ERROR = 'ADOPT_ANIMAL_ERROR';
export const adoptAnimalError = error => ({
type: ADOPT_ANIMAL_ERROR,
error

});
