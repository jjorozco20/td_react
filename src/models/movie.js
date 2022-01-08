export default class Movie {
	constructor(properties) {
		this.id = properties['imdbID'] || null;
		this.name = properties['Title'];
	}

	validateSchema(property) {
		return {
			name: {
				max: 100,
				required: false,
			},
			rate: {
				min: 0,
			},

			users: [],
		};
	}

	validate() {
		Object.keys(this).forEach((property) => {
			if (isCollection(property)) {
				const ClassType = getCollectionType(property); // User
				ClassType.validate(property);
			} else {
				Movie.validate(property);
			}
		});
	}

	save() {
		this.validate();
	}
}
