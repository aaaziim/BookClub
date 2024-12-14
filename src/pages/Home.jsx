import Banner from "../components/Banner";
import BookCard from "../components/BookCard";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className="my-20">

                <div>
                    <h2 className="text-4xl text-black text-center font-bold">Books</h2>
                </div>

                {/* Books Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20">

                    <BookCard></BookCard>

                </div>

            </section>
        </div>
    );
};

export default Home;