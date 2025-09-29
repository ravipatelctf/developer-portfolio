
export default function HeroArea() {
    return (
        <div className="container py-5 my-5">
            <section>
                <h1 className="text-white display-1 fw-bold">Ravi Shankar Patel</h1>
                <p className="text-white-50 fs-3">full stack dev</p>
                <div className="border border-2 border-success w-25 my-4"></div>
                <div className="row">
                    <p className="text-light fs-5 col-7">Passionate full-stack developer crafting intuitive digital experiences with modern technologies.</p>
                    <p className="text-light fs-5 col-7">Specializing in React, Node.js, and MongoDB to build scalable and user-centered applications.</p>
                </div>
                <div className="d-flex gap-2">
                    <a href="https://ravipatelctf@gmail.com" className="btn btn-success fw-bold py-2 px-4">Contact Me</a>
                    <a href="https://drive.google.com/drive/folders/1lZZxK14I-rh2M-bVVVn11RHaQST-jvGT?usp=drive_link" className="btn btn-outline-secondary fw-bold py-2 px-4">Resume</a> 
                </div>
            </section>
        </div>
    );
}
