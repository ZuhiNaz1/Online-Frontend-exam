import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveSearchName } from '../../utility/localstorage';


const CardDetails = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);
    console.log(card);

    const handleSearchName = () =>{
       saveSearchName(id);
    }
    
    return (
        <div>
            <Helmet>
                <title>Card Details</title>
            </Helmet>
            <h2 className='font-bold text-2xl pt-8 pb-10'>User details</h2>
            <div className='grid md:grid-cols-4 mb-8'>
                <div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={card.image} alt="" />
                        </div>
                    </div>
                    <p className="font-extrabold">Name: {card.firstName} {card.lastName}</p>
                    <p className="font-semibold">Age: {card.age}</p>
                    <div className='flex font-semibold gap-5'>
                        <p>Blood group: {card.bloodGroup}</p>
                        <p>Eye color: {card.eyeColor}</p>
                    </div>
                    <div className='flex font-semibold gap-5'>
                        <p>Height: {card.height}</p>
                        <p>Weight: {card.weight}</p>
                    </div>
                    <p className="font-bold">Phone: {card.phone}</p>
                    <p className="font-bold">Email: {card.email}</p>
                    <p className="font-semibold">Password: {card.password}</p>
                    <p className="font-bold">Address: {card.address.address}, {card.address.city}</p>
                    <p className="font-bold">Company: {card.company.name}</p>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={handleSearchName}>Search</button>
                  </div>
            </div>

        </div>
    );
};

export default CardDetails;