import bannerImg from "../assets/bannerImg.png"
import { CiStar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdInsertPageBreak } from "react-icons/md";
import { NavLink } from "react-router-dom";
const BookList = () => {
    return (
        <>
            <div className="border-2 border-gray-100 p-3 flex gap-5 my-3">
                <div className="bg-gray-100 rounded-2xl">
                    <img className="w-40" src={bannerImg} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-black my-2">The Catcher in the Rye</p>
                    <p className="text-gray-400 ">
                        By : Awlad Hossain
                    </p>
                    <div className="flex gap-5 my-4 items-center">
                        <p className="text-black font-bold">Tag : </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Young Adult
                        </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Identity
                        </p>
                        <p className="flex gap-2 items-center">
                            <CiLocationOn /> Year of Publishing : 1924
                        </p>
                    </div>


                    <div className="flex gap-4 items-center">
                        <FaUserFriends /> <span>Publisher: Scribner</span>
                        <MdInsertPageBreak /> Page 192
                    </div>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <div className="flex gap-4 justify-between ">

                        <div className="flex gap-4 items-center">
                            <p className="px-3 py-2 text-lg bg-[#328eff38] text-[#328EFF]  rounded-xl"> Category : Classic</p>
                            <p className="px-3 py-2 text-lg  bg-[#ffad3348] text-[#FFAC33] rounded-xl"> Rating : 4.5</p>

                            <NavLink to={`/listedbook/1`}
                                className="px-3 py-2 text-lg  bg-[#23BE0A] text-white rounded-xl"
                            >View Details</NavLink>
                        </div>

                    </div>
                </div>
            </div>
            <div className="border-2 border-gray-100 p-3 flex gap-5 my-3">
                <div className="bg-gray-100 rounded-2xl">
                    <img className="w-40" src={bannerImg} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-black my-2">The Catcher in the Rye</p>
                    <p className="text-gray-400 ">
                        By : Awlad Hossain
                    </p>
                    <div className="flex gap-5 my-4 items-center">
                        <p className="text-black font-bold">Tag : </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Young Adult
                        </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Identity
                        </p>
                        <p className="flex gap-2 items-center">
                            <CiLocationOn /> Year of Publishing : 1924
                        </p>
                    </div>


                    <div className="flex gap-4 items-center">
                        <FaUserFriends /> <span>Publisher: Scribner</span>
                        <MdInsertPageBreak /> Page 192
                    </div>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <div className="flex gap-4 justify-between ">

                        <div className="flex gap-4 items-center">
                            <p className="px-3 py-2 text-lg bg-[#328eff38] text-[#328EFF]  rounded-xl"> Category : Classic</p>
                            <p className="px-3 py-2 text-lg  bg-[#ffad3348] text-[#FFAC33] rounded-xl"> Rating : 4.5</p>

                            <NavLink to={`/listedbook/1`}
                                className="px-3 py-2 text-lg  bg-[#23BE0A] text-white rounded-xl"
                            >View Details</NavLink>
                        </div>

                    </div>
                </div>
            </div>
            <div className="border-2 border-gray-100 p-3 flex gap-5 my-3">
                <div className="bg-gray-100 rounded-2xl">
                    <img className="w-40" src={bannerImg} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-black my-2">The Catcher in the Rye</p>
                    <p className="text-gray-400 ">
                        By : Awlad Hossain
                    </p>
                    <div className="flex gap-5 my-4 items-center">
                        <p className="text-black font-bold">Tag : </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Young Adult
                        </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Identity
                        </p>
                        <p className="flex gap-2 items-center">
                            <CiLocationOn /> Year of Publishing : 1924
                        </p>
                    </div>


                    <div className="flex gap-4 items-center">
                        <FaUserFriends /> <span>Publisher: Scribner</span>
                        <MdInsertPageBreak /> Page 192
                    </div>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <div className="flex gap-4 justify-between ">

                        <div className="flex gap-4 items-center">
                            <p className="px-3 py-2 text-lg bg-[#328eff38] text-[#328EFF]  rounded-xl"> Category : Classic</p>
                            <p className="px-3 py-2 text-lg  bg-[#ffad3348] text-[#FFAC33] rounded-xl"> Rating : 4.5</p>

                            <NavLink to={`/listedbook/1`}
                                className="px-3 py-2 text-lg  bg-[#23BE0A] text-white rounded-xl"
                            >View Details</NavLink>
                        </div>

                    </div>
                </div>
            </div>
            <div className="border-2 border-gray-100 p-3 flex gap-5 my-3">
                <div className="bg-gray-100 rounded-2xl">
                    <img className="w-40" src={bannerImg} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-black my-2">The Catcher in the Rye</p>
                    <p className="text-gray-400 ">
                        By : Awlad Hossain
                    </p>
                    <div className="flex gap-5 my-4 items-center">
                        <p className="text-black font-bold">Tag : </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Young Adult
                        </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Identity
                        </p>
                        <p className="flex gap-2 items-center">
                            <CiLocationOn /> Year of Publishing : 1924
                        </p>
                    </div>


                    <div className="flex gap-4 items-center">
                        <FaUserFriends /> <span>Publisher: Scribner</span>
                        <MdInsertPageBreak /> Page 192
                    </div>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <div className="flex gap-4 justify-between ">

                        <div className="flex gap-4 items-center">
                            <p className="px-3 py-2 text-lg bg-[#328eff38] text-[#328EFF]  rounded-xl"> Category : Classic</p>
                            <p className="px-3 py-2 text-lg  bg-[#ffad3348] text-[#FFAC33] rounded-xl"> Rating : 4.5</p>

                            <NavLink to={`/listedbook/1`}
                                className="px-3 py-2 text-lg  bg-[#23BE0A] text-white rounded-xl"
                            >View Details</NavLink>
                        </div>

                    </div>
                </div>
            </div>
            <div className="border-2 border-gray-100 p-3 flex gap-5 my-3">
                <div className="bg-gray-100 rounded-2xl">
                    <img className="w-40" src={bannerImg} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-black my-2">The Catcher in the Rye</p>
                    <p className="text-gray-400 ">
                        By : Awlad Hossain
                    </p>
                    <div className="flex gap-5 my-4 items-center">
                        <p className="text-black font-bold">Tag : </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Young Adult
                        </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Identity
                        </p>
                        <p className="flex gap-2 items-center">
                            <CiLocationOn /> Year of Publishing : 1924
                        </p>
                    </div>


                    <div className="flex gap-4 items-center">
                        <FaUserFriends /> <span>Publisher: Scribner</span>
                        <MdInsertPageBreak /> Page 192
                    </div>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <div className="flex gap-4 justify-between ">

                        <div className="flex gap-4 items-center">
                            <p className="px-3 py-2 text-lg bg-[#328eff38] text-[#328EFF]  rounded-xl"> Category : Classic</p>
                            <p className="px-3 py-2 text-lg  bg-[#ffad3348] text-[#FFAC33] rounded-xl"> Rating : 4.5</p>

                            <NavLink to={`/listedbook/1`}
                                className="px-3 py-2 text-lg  bg-[#23BE0A] text-white rounded-xl"
                            >View Details</NavLink>
                        </div>

                    </div>
                </div>
            </div>
            <div className="border-2 border-gray-100 p-3 flex gap-5 my-3">
                <div className="bg-gray-100 rounded-2xl">
                    <img className="w-40" src={bannerImg} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-black my-2">The Catcher in the Rye</p>
                    <p className="text-gray-400 ">
                        By : Awlad Hossain
                    </p>
                    <div className="flex gap-5 my-4 items-center">
                        <p className="text-black font-bold">Tag : </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Young Adult
                        </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Identity
                        </p>
                        <p className="flex gap-2 items-center">
                            <CiLocationOn /> Year of Publishing : 1924
                        </p>
                    </div>


                    <div className="flex gap-4 items-center">
                        <FaUserFriends /> <span>Publisher: Scribner</span>
                        <MdInsertPageBreak /> Page 192
                    </div>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <div className="flex gap-4 justify-between ">

                        <div className="flex gap-4 items-center">
                            <p className="px-3 py-2 text-lg bg-[#328eff38] text-[#328EFF]  rounded-xl"> Category : Classic</p>
                            <p className="px-3 py-2 text-lg  bg-[#ffad3348] text-[#FFAC33] rounded-xl"> Rating : 4.5</p>

                            <NavLink to={`/listedbook/1`}
                                className="px-3 py-2 text-lg  bg-[#23BE0A] text-white rounded-xl"
                            >View Details</NavLink>
                        </div>

                    </div>
                </div>
            </div>
            <div className="border-2 border-gray-100 p-3 flex gap-5 my-3">
                <div className="bg-gray-100 rounded-2xl">
                    <img className="w-40" src={bannerImg} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-black my-2">The Catcher in the Rye</p>
                    <p className="text-gray-400 ">
                        By : Awlad Hossain
                    </p>
                    <div className="flex gap-5 my-4 items-center">
                        <p className="text-black font-bold">Tag : </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Young Adult
                        </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Identity
                        </p>
                        <p className="flex gap-2 items-center">
                            <CiLocationOn /> Year of Publishing : 1924
                        </p>
                    </div>


                    <div className="flex gap-4 items-center">
                        <FaUserFriends /> <span>Publisher: Scribner</span>
                        <MdInsertPageBreak /> Page 192
                    </div>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <div className="flex gap-4 justify-between ">

                        <div className="flex gap-4 items-center">
                            <p className="px-3 py-2 text-lg bg-[#328eff38] text-[#328EFF]  rounded-xl"> Category : Classic</p>
                            <p className="px-3 py-2 text-lg  bg-[#ffad3348] text-[#FFAC33] rounded-xl"> Rating : 4.5</p>

                            <NavLink to={`/listedbook/1`}
                                className="px-3 py-2 text-lg  bg-[#23BE0A] text-white rounded-xl"
                            >View Details</NavLink>
                        </div>

                    </div>
                </div>
            </div>
            <div className="border-2 border-gray-100 p-3 flex gap-5 my-3">
                <div className="bg-gray-100 rounded-2xl">
                    <img className="w-40" src={bannerImg} />
                </div>
                <div>
                    <p className="text-2xl font-bold text-black my-2">The Catcher in the Rye</p>
                    <p className="text-gray-400 ">
                        By : Awlad Hossain
                    </p>
                    <div className="flex gap-5 my-4 items-center">
                        <p className="text-black font-bold">Tag : </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Young Adult
                        </p>
                        <p className="text-[#23BE0A] p-2 rounded-lg">
                            #Identity
                        </p>
                        <p className="flex gap-2 items-center">
                            <CiLocationOn /> Year of Publishing : 1924
                        </p>
                    </div>


                    <div className="flex gap-4 items-center">
                        <FaUserFriends /> <span>Publisher: Scribner</span>
                        <MdInsertPageBreak /> Page 192
                    </div>
                    <hr className="my-4 border-b-2 border-dotted" ></hr>
                    <div className="flex gap-4 justify-between ">

                        <div className="flex gap-4 items-center">
                            <p className="px-3 py-2 text-lg bg-[#328eff38] text-[#328EFF]  rounded-xl"> Category : Classic</p>
                            <p className="px-3 py-2 text-lg  bg-[#ffad3348] text-[#FFAC33] rounded-xl"> Rating : 4.5</p>

                            <NavLink to={`/listedbook/1`}
                                className="px-3 py-2 text-lg  bg-[#23BE0A] text-white rounded-xl"
                            >View Details</NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default BookList;