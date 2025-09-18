import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import MaxWidthContainer from "@/components/shared/max-width-container";

export default function AboutPage() {
    return (
        <div>
            <main className="min-h-screen  text-[#30232d] py-20">
                <MaxWidthContainer className="px-5">
                    <h1 className="text-5xl font-extrabold mb-6 text-center">About JobHub</h1>
                    <p className="text-lg mb-4 max-w-3xl mx-auto text-center">
                        At JobHub, we are dedicated to connecting talented professionals with amazing job opportunities at top companies worldwide. Our mission is to simplify the job search process and help individuals find the right career path faster.
                    </p>
                    <p className="text-lg mb-4 max-w-3xl mx-auto text-center">
                        Founded in 2025, JobHub has quickly become the world's leading job board, trusted by millions of job seekers and employers alike. We pride ourselves on our user-friendly platform, extensive
                        job listings, and commitment to providing exceptional customer service.
                    </p>
                    <p className="text-lg mb-4 max-w-3xl mx-auto text-center">
                        Whether you're a recent graduate looking for your first job or an experienced professional seeking new opportunities, JobHub is here to help you every step of the way. Join us today and take the next step in your career!
                    </p>
                </MaxWidthContainer>
            </main>
        
        </div>
        );
}