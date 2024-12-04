interface Passenger {
    id: number;
    passenger_name: string;
    passenger_avatar: string;
    origin: string;
    destination: string;
}

interface Section {
    title: string;
    data: Passenger[];
}

export function groupDataByCountry(data: Passenger[]): Section[] {
    const grouped: { [key: string]: Passenger[] } = {};


    data.forEach((passenger) => {
        if (!grouped[passenger.origin]) {
            grouped[passenger.origin] = [];
        }
        grouped[passenger.origin].push(passenger);

        if (!grouped[passenger.destination]) {
            grouped[passenger.destination] = [];
        }
        grouped[passenger.destination].push(passenger);
    });


    return Object.keys(grouped).sort().map((country) => ({
        title: country,
        data: grouped[country],
    }));
}
