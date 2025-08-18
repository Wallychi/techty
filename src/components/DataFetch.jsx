import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

const DataFetch = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/posts");
                const result = res.data.posts;
                setPosts(result);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (posts) {
        posts.splice(12, posts.length);
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-center text-xl font-medium">Error Occured</p>
                <p className="text-center text-4xl font-semibold text-red-600">
                    {errorMessage}
                </p>
                <p className="text-xl font-semibold">Try Again Later</p>
            </div>
        );
    }

    return (
        <section className="w-full font-space mt-20 ">
            <h1 className="text-5xl font-bold text-center">
                Read what the <span className="text-green-500">customers</span>
                <br /> are saying about us.{" "}
            </h1>
            {loading ? (
                <div className="flex h-screen items-center justify-center">
                    <ThreeCircles
                        visible={true}
                        height="200"
                        width="200"
                        color="#4fa94d"
                        ariaLabel="three-circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : (
                <div className="flex flex-col gap-2 items-center px-15 mt-10">
                    <div className="grid grid-cols-3 gap-5">
                        {posts.map((post, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-2 p-4 rounded-xl border-green-500 border-2"
                            >
                                <div className="flex items-center">
                                    <img src="/icons/Frame.png" alt="rating star" />
                                    <img src="/icons/Frame.png" alt="rating star" />
                                    <img src="/icons/Frame.png" alt="rating star" />
                                    <img src="/icons/Frame.png" alt="rating star" />
                                    <img src="/icons/Frame.png" alt="rating star" />
                                </div>
                                <p className="font-semibold">{post.title}</p>
                                <p className="text-sm ">"{post.body}"</p>
                                <div className="flex items-center gap-5">
                                    <img
                                        src="/images/Frame 1000008343.png"
                                        alt="Image of a female"
                                    />
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="font-semibold">Anita Jones</p>
                                        <p>Financial Analyst</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </section>
    );
};

export default DataFetch;
