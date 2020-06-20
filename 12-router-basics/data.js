const spaceAgencies = [
    {
        name: 'NASA',
        desc: [
            `The National Aeronautics and Space Administration (NASA; /ˈnæsə/) is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and space research`,
            `NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA). The new agency was to have a distinctly civilian orientation, encouraging peaceful applications in space science.[8][9][10] Since its establishment, most US space exploration efforts have been led by NASA, including the Apollo Moon landing missions, the Skylab space station, and later the Space Shuttle.`,
        ],
        rocket: {
            src: '/nasa-rocket.png',
            alt: 'Discovery',
        },
        route: 'nasa',
        logo: '/nasa.png',
    },
    {
        name: 'Space X',
        desc: [
            `Space Exploration Technologies Corp., trading as SpaceX, is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.`,
            `SpaceX has developed several launch vehicles, the Starlink satellite constellation, and the Dragon spacecraft. `,
        ],
        rocket: {
            src: '/space-rocket.png',
            alt: 'Falcon X',
        },
        route: 'spacex',
        logo: '/spacex.png',
    },
    {
        name: 'RosCosmos',
        desc: [
            `The Roscosmos State Corporation for Space Activities (Russian: Государственная корпорация по космической деятельности «Роскосмос», Gosudarstvyennaya korporaciya po kosmicheskoy dyeyatyel'nosti "Roskosmos"), commonly known as Roscosmos (Russian: Роскосмос), is a state corporation responsible for the wide range and types of space flights and cosmonautics programs for the Russian Federation.`,
            `On February 22, 2019, the Roscosmos Director, Dmitry Rogozin, has announced the construction start of new headquarters in Moscow, Zavodskaya Street 18: The National Space Centre. `,
        ],
        rocket: {
            src: '/roscosmos-rocket.png',
            alt: 'Voshkod',
        },
        route: 'roscosmos',
        logo: '/roscosmos.png',
    },
];

export default spaceAgencies;
