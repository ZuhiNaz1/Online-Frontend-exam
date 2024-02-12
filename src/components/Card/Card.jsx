import { Link } from "react-router-dom";


const Card = ({ card }) => {

    const { id, image, firstName, lastName, email, address, company } = card;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={image} alt=""/>
                </div>
            </div>
                <div>
                    <Link to={`/card/${id}`}><button className="px-5 py-2 font-extrabold">Name: {firstName} {lastName}</button></Link>
                </div>
                <div>
                <p className="font-bold">Email: {email}</p>
                <p className="font-bold">Address: {card.address.address}, {card.address.city}</p>
                <p className="font-bold">Company: {card.company.name}</p>
            </div>
        </div>
    );
};

export default Card;