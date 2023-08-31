

const page = () => {
    return (
        <div className="contactUsMargin">
            <p className="text-center">Contact Us</p>
            <section>
                <form className="add-form">                  
                    <div className="mb-3">
                        <label htmlFor="name" className="float-start">Name</label>
                        <input type="text" className="form-control"  placeholder="enter your name" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="float-start">Email address</label>
                        <input type="email" className="form-control"  placeholder="name@example.com" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="website" className="float-start">Website</label>
                        <input type="text" className="form-control"  placeholder="enter your website" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="float-start">Email address</label>
                        <input type="email" className="form-control"  placeholder="name@example.com" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="float-start">Example textarea</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>

                    <div className="mb-10">
                        <input type="button" className="float-end btn btn-success" value="Submit" />
                    </div> 
                    <br/><br/>

                </form>
            </section>
        </div>
    );
};

export default page;