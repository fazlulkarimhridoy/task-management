import contactImage from "../../assets/ContactUsImages/contact1.png"
const ContactUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 pt-48 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leadi lg:text-5xl">Lets talk!</h2>
                        <div className="text-gray-600">Fill the form and we will reach to you soon. Have patience dear user.</div>
                    </div>
                    <img src={contactImage} alt="contact_image" className="p-6 w-3/4" />
                </div>
                <form className="space-y-6 mt-10">
                    <div>
                        <label className="text-sm">Full name</label>
                        <input type="text" placeholder="" className="w-full p-3 border border-black rounded" />
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <input type="email" className="w-full p-3 border border-black rounded" />
                    </div>
                    <div>
                        <label className="text-sm">Message</label>
                        <textarea rows="3" className="w-full p-3 border border-black rounded"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold uppercase rounded bg-emerald-600 text-gray-50">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;