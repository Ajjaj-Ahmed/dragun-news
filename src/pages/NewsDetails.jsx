import { useLoaderData } from "react-router-dom";
import Header from "../components/header";
import RightNavbar from "../laout-components/RightNavbar";

const NewsDetails = () => {
    const news = useLoaderData();
    const singleNews =news.data[0];
   const {thumbnail_url,author} = singleNews
    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <section className="grid grid-cols-12 gap-4">
                <div className="col-span-9">
                    <div>
                        <img className="w-full h-64 object-fit" src={thumbnail_url} alt="" />
                    </div>
                </div>
                <div className="col-span-3">
                <RightNavbar></RightNavbar>
                </div>
                
            </section>
        </div>
    );
};

export default NewsDetails;