
export default function Header() {
    return (
        <div className="container py-3 bg-black">
            <div className="d-flex gap-2 align-items-center">
                <span className="text-success fw-bold fs-4">{`[`}</span>
                <span className="text-white fs-4 fw-bold">"Ravi", </span>
                <span className="text-white fs-4 fw-bold">"Shankar", </span>
                <span className="text-white fs-4 fw-bold">"Patel"</span>
                <span className="text-success fw-bold fs-4">{`]`}</span>
            </div>
        </div>
    )
}