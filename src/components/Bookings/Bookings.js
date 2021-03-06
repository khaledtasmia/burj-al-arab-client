import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/bookings?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setBookings(data));
    }, [])

    return (
        <div>
            <h3>You have {bookings.length} bookings</h3>
            {
                bookings.map(booking => <li>{booking.name} from: {(new Date(booking.checkInDate).toDateString('dd/MM/yyyy'))} to: {(new Date(booking.checkOutDate).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Bookings;