

// async function getData(){
//     const res = await fetch('https://dummyjson.com/products/1')
//     return res.json();
// }

const page = async () => {
    // const data = await getData();
    return (
        <div className="aboutMargin">
            {/* {JSON.stringify(data)} */}
            <p>Hi About page</p>
            <section className="sectionOne">
                <p> I'm section One</p>
            </section>
            <section className="sectionTwo">
                <p> I'm section Two</p>
            </section>


        </div>
    );
};

export default page;