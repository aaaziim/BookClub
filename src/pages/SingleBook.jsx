import { useParams } from "react-router-dom";
import bannerImg from "../assets/bannerImg.png"
import { CiStar } from "react-icons/ci";
import { useEffect, useState } from "react";

const SingleBook = () => {
    const { id } = useParams();

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
    }, [])

    const book = books.find(book => book.bookId == id);
    if (loading) {
        return <p>Loading book details...</p>;
    }
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    console.log(book)
    return (
        <div className="my-20">
            <div className="flex gap-10 flex-col  md:flex-row">
                <div className="bg-gray-50 rounded-2xl max-w-xl flex justify-center items-center ">
                    <img className="rounded-2xl w-2/3" src={image || bannerImg} alt="" />
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black my-3">{bookName}</h3>
                    <p className="text-gray-400 ">
                        By : {author}
                    </p>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>



                    <p className="text-gray-400 ">
                        {category}
                    </p>


                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <p>
                        <span className="text-black font-bold ">Review : </span>
                        {review}
                    </p>
                    <div className="flex gap-5 my-4 items-center">
                        <p className="text-black font-bold">Tag : </p>
                        {tags.map(tag => <p key={tag} className="text-[#23BE0A] p-2 rounded-lg font-bold">
                            #{tag}
                        </p>)}

                    </div>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="  py-2">Number of Pages:</td>
                                <td className="  py-2 font-semibold text-black">{totalPages}</td>
                            </tr>
                            <tr>
                                <td className="  py-2">Publisher</td>
                                <td className="  py-2 font-semibold text-black">{publisher}</td>
                            </tr>
                            <tr>
                                <td className="  py-2">Year of Publishing:</td>
                                <td className="  py-2 font-semibold text-black">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="  py-2">Rating:</td>
                                <td className="  py-2 font-semibold text-black">{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex gap-4 my-6">
                        <button type="button" className="px-8 py-3 font-semibold border rounded-xl dark:border-gray-500 dark:text-gray-800">Read</button>
                        <button type="button" className="px-8 py-3 font-semibold border rounded-xl bg-[#50B1C9]   text-white">Wishlist</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SingleBook;