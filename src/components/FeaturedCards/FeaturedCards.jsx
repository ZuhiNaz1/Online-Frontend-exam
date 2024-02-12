import { useState, useEffect } from "react";
import Card from '../Card/Card';

const FeaturedCards = () => {

    const [cards, setCards] = useState([]);
    const [dataLength, setDataLength] = useState(15);

    const handleSortFilter = filter => {

    }

    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);

    return (
        <div>
            <div>
                <h2 className="text-center text-3xl font-bold pt-8">Users list cards</h2>
            </div>
            <div className="flex gap-20 pb-20">
                <div className="pb-14 pt-10">
                    <details className="dropdown">
                        <summary className="m-1 btn">Select input field</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleSortFilter('name')}><a>Sort by name</a></li>
                            <li onClick={() => handleSortFilter('email')}><a>Sort by email</a></li>
                            <li onClick={() => handleSortFilter('Company name')}><a>Sort by Company name</a></li>
                        </ul>
                    </details>
                </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    cards.slice(0, dataLength).map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            <div className={dataLength === cards.length ? 'hidden' : ''}>
                <button onClick={() => setDataLength(cards.length)} className='btn btn-primary'>Show all cards</button>
            </div>
            <div className="pt-8">
                <h2 className="text-2xl font-bold">All Users form</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Avatar & Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cards.map((card, index) => <tr key={card.id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={card.image} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{card.firstName} {card.lastName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{card.email}</td>
                                    <td>{card.address.address}</td>
                                    <td>{card.company.name}</td>
                                    
                                 </tr>)}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCards;