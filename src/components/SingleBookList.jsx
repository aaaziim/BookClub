import bannerImg from "../assets/bannerImg.png"
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdInsertPageBreak } from "react-icons/md";
import { NavLink } from "react-router-dom";
const SingleBookList = ({ book, handleDelete }) => {

    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="border-2 border-gray-100 p-3 flex gap-5 my-3">
            <div className="bg-gray-100 rounded-2xl">
                <img className="w-40" src={image || bannerImg} />
            </div>
            <div>
                <p className="text-2xl font-bold text-black my-2">{bookName}</p>
                <p className="text-gray-400 ">
                    By : {author}
                </p>
                <div className="flex gap-5 my-4 items-center">
                    <p className="text-black font-bold">Tag : </p>
                    {tags.map(tag => <p key={tag} className="text-[#23BE0A] p-2 rounded-lg font-bold">
                        #{tag}
                    </p>)}
                    <p className="flex gap-2 items-center">
                        <CiLocationOn /> Year of Publishing : {yearOfPublishing}
                    </p>
                </div>


                <div className="flex gap-4 items-center">
                    <FaUserFriends /> <span>Publisher: {publisher}</span>
                    <MdInsertPageBreak /> Page {totalPages}
                </div>
                <hr className="my-4 border-b-2 border-dotted" ></hr>
                <div className="flex gap-4 justify-between ">

                    <div className="flex gap-4 items-center">
                        <p className="px-3 py-2 text-lg bg-[#328eff38] text-[#328EFF]  rounded-xl"> Category : {category}</p>
                        <p className="px-3 py-2 text-lg  bg-[#ffad3348] text-[#FFAC33] rounded-xl"> Rating : {rating}</p>

                        <NavLink to={`/listedbook/${bookId}`}
                            className="px-3 py-2 text-lg  bg-[#23BE0A] text-white rounded-xl"
                        >View Details</NavLink>

                        <p
                            onClick={() => handleDelete(book)}
                            className="px-3 py-2 text-lg  bg-[#23BE0A] text-white rounded-xl cursor-pointer"
                        >Remove</p>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleBookList;