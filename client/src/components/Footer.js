export default function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <h5>Naše sociálne siete:</h5>
                    <a className="btn btn-outline-light btn-floating m-1" href="#" role="button">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="bi bi-google"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="bi bi-instagram"></i>
                    </a>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className="text-white" href="https://www.fri.uniza.sk/">vaii-semestralka.sk</a>
            </div>
        </footer>
    );
}
