
import "../App.css";

export default function Projects() {
    return (
        <div className="container py-5 my-5">
            <section>
                <h2 className="text-white display-4 fw-bold">Projects</h2>
                <p className="text-white-50 fs-3">Building solutions that solve real-world problems</p>
                <div className="border border-2 border-success w-25 my-4"></div>
                
                <div className="row">

                    <div className="col-md-4 mb-2">
                        <div className="card bg-dark tech-card">
                            <img 
                                src="https://images.unsplash.com/photo-1629360057380-18b15b42e650?h=400&w=600&fit=crop" 
                                alt="placeholder image"
                                className="rounded-top"
                            />
                            <div className="card-body pb-4">
                                <p className="fw-bold fs-4 text-white mb-2">Tutor Directory</p>
                                <p className="text-light">An online portal where parents/students and home tutors can connect with each other without the interference of any tutor provider agency.</p>
                                <p className="text-white d-flex py-2 justify-content-start gap-1">
                                    <span className="rounded bg-secondary px-2 fw-bold f-sm"><small>React</small></span>
                                    <span className="rounded bg-secondary px-2 fw-bold"><small>Node.js</small></span>
                                    <span className="rounded bg-secondary px-2 fw-bold"><small>MongoDB</small></span>
                                    <span className="rounded bg-secondary px-2 fw-bold"><small>Stripe</small></span>
                                </p>
                                <div className="d-flex justify-content-between px-2 gap-5 fw-bold">
                                    <a href="https://tutordirectory.vercel.app/" className="text-decoration-none text-white">🔗 Demo</a>
                                    <a href="https://github.com/ravipatelctf/frontend-tdp" className="text-decoration-none text-white">{`</>`} Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="card bg-dark tech-card">
                            <img 
                                src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?h=400&w=600&fit=crop" 
                                alt="placeholder image"
                                className="rounded-top"
                            />
                            <div className="card-body pb-4">
                                <p className="fw-bold fs-4 text-white mb-2">myShoppingSite</p>
                                <p className="text-light">A modern e-commerce platform with cart and wishlist management along with user, address and order history management.</p>
                                <p className="text-white d-flex py-2 justify-content-start gap-1">
                                    <span className="rounded bg-secondary px-2 fw-bold f-sm"><small>React</small></span>
                                    <span className="rounded bg-secondary px-2 fw-bold"><small>Node.js</small></span>
                                    <span className="rounded bg-secondary px-2 fw-bold"><small>MongoDB</small></span>
                                    <span className="rounded bg-secondary px-2 fw-bold"><small>Stripe</small></span>
                                </p>
                                <div className="d-flex justify-content-between px-2 gap-5 fw-bold">
                                    <a href="https://frontend-mp1.vercel.app/" className="text-decoration-none text-white">🔗 Demo</a>
                                    <a href="https://github.com/ravipatelctf/frontend-mp1" className="text-decoration-none text-white">{`</>`} Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className="card bg-dark tech-card">
                            <img 
                                src="https://plus.unsplash.com/premium_photo-1733306696471-807493ff845b?h=400&w=600&fit=crop" 
                                alt="placeholder image"
                                className="rounded-top"
                            />
                            <div className="card-body pb-4">
                                <p className="fw-bold fs-4 text-white mb-2">Anvaya CRM</p>
                                <p className="text-light">A CRM webapp that lets a company manage sales leads and sales agents with advanced filtering and sales reports based on live data.</p>
                                <p className="text-white d-flex py-2 justify-content-start gap-1">
                                    <span className="rounded bg-secondary px-2 fw-bold f-sm"><small>React</small></span>
                                    <span className="rounded bg-secondary px-2 fw-bold"><small>Node.js</small></span>
                                    <span className="rounded bg-secondary px-2 fw-bold"><small>MongoDB</small></span>
                                    <span className="rounded bg-secondary px-2 fw-bold"><small>Stripe</small></span>
                                </p>
                                <div className="d-flex justify-content-between px-2 gap-5 fw-bold">
                                    <a href="https://frontend-mp2.vercel.app/" className="text-decoration-none text-white">🔗 Demo</a>
                                    <a href="https://github.com/ravipatelctf/frontend-mp2" className="text-decoration-none text-white">{`</>`} Code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}