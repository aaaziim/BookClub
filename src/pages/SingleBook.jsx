import bannerImg from "../assets/bannerImg.png"
import { CiStar } from "react-icons/ci";

const SingleBook = () => {
    return (
        <div className="my-20">
            <div className="flex gap-10 flex-col  md:flex-row">
                <div className="bg-gray-50 rounded-2xl max-w-2xl">
                    <img src={bannerImg} alt="" />
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black my-3">The Catcher in the Rye</h3>
                    <p className="text-gray-400 ">
                        By : Awlad Hossain
                    </p>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>

                    <div className="flex gap-4 justify-between ">

                        <p className="text-gray-400 ">
                            Fiction
                        </p>
                        <p className="text-gray-400 flex gap-3 items-center">
                            5.00 <span> <CiStar className="text-2xl" /></span>
                        </p>
                    </div>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <p>
                        <span className="text-black font-bold">Review : </span>
                        Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.
                        Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.
                    </p>
                    <div className="flex gap-5 my-4 items-center">
                        <p className="text-black font-bold">Tag : </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            Young Adult
                        </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            Identity
                        </p>
                    </div>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <table class="w-full">
                        <tbody>
                            <tr>
                                <td class="  py-2">Number of Pages:</td>
                                <td class="  py-2 font-semibold text-black">281</td>
                            </tr>
                            <tr>
                                <td class="  py-2">Publisher</td>
                                <td class="  py-2 font-semibold text-black">J.B Lippincott & Co.</td>
                            </tr>
                            <tr>
                                <td class="  py-2">Year of Publishing:</td>
                                <td class="  py-2 font-semibold text-black">1960</td>
                            </tr>
                            <tr>
                                <td class="  py-2">Rating:</td>
                                <td class="  py-2 font-semibold text-black">4.8</td>
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