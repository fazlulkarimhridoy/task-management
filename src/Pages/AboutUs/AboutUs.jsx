import aboutImage from "../../assets/BannerBackgrounds/bg5.jpg"
const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        We are software development company based on latest technological tools.
                    </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                            alt="about-image"
                            src={aboutImage}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600">
                            <p>
                                In this article, we will go over the 25 best task management solutions available today. You can use these tools to manage tasks, to-do lists, and projects to get the best out of your team and your business.
                            </p>

                            <p>
                                If you need a platform to scale both task management and project management, ClickUp delivers what teams need within reach to manage personal to-do lists, complex projects, and everything in between. Its extensive customization options and integration capabilities contribute to its versatility and widespread adoption among professionals across various industries.
                            </p>
                            <p>
                                In this article, we will go over the 25 best task management solutions available today. You can use these tools to manage tasks, to-do lists, and projects to get the best out of your team and your business.
                            </p>

                            <p>
                                If you need a platform to scale both task management and project management, ClickUp delivers what teams need within reach to manage personal to-do lists, complex projects, and everything in between. Its extensive customization options and integration capabilities contribute to its versatility and widespread adoption among professionals across various industries.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;