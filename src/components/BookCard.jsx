import { NavLink } from "react-router-dom";
import bannerImg from "../assets/bannerImg.png"
import { CiStar } from "react-icons/ci";
const BookCard = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <>
            <NavLink to={`/listedbook/${bookId}`} className="border-2 border-slate-300 rounded-xl p-4 hover:scale-105 hover:border-[#23BE0A]  ">
                <img className="my-3 h-52 w-full rounded-xl bg-gray-200" src={image || bannerImg} />
                <div className="flex gap-5">
                    {tags.map(tag =>
                        <p key={tag} className="text-[#23BE0A] font-semibold p-2 rounded-lg">
                            #{tag}
                        </p>
                    )}


                </div>
                <p className="text-2xl font-bold text-black my-2">{bookName}</p>
                <p className="text-gray-400 ">
                    By : {author}
                </p>
                <hr className="my-4 border-b-2 border-dotted" ></hr>
                <div className="flex gap-4 justify-between ">

                    <p className="text-gray-400 ">
                        {category}
                    </p>
                    <p className="text-gray-400 flex gap-3 items-center">
                        {rating} <span> <CiStar className="text-2xl" /></span>
                    </p>
                </div>
            </NavLink>


        </>

    );
};

export default BookCard;