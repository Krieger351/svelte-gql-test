import { gql } from '../gql';

export const allPeople = gql(/* GraphQL */ `
	query ALL_PEOPLE {
		allPeople {
			people {
				name
				id
			}
		}
	}
`);
export const person = gql(/* GraphQL */ `
	query GET_PERSON($ID: ID!) {
		person(id: $ID) {
			name
			birthYear
			eyeColor
			gender
			hairColor
			height
			filmConnection {
				films {
					title
				}
			}

			homeworld {
				name
			}
		}
	}
`);
