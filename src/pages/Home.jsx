import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import BookCard from "../components/BookCard";

const Home = () => {

    const books = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <section className="my-20">

                <div>
                    <h2 className="text-4xl text-black text-center font-bold">Books</h2>
                </div>

                {/* Books Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20">

                    {books.map(book => <BookCard
                        key={book.bookId}
                        book={book}></BookCard>)}



                </div>

            </section>
        </div>
    );
};

export default Home;