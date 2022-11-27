import Top from "./images/up-arrow.png"
function Footer() {
    return (
        <footer class="text-center color-black text-lg-start rounded" style={{ background: "#8cbf3f" }}>
            <section class="text-center mb-2">
                <br />
                <a href="https://api.whatsapp.com/send?phone=972556695488" role="button" target="_">
                    <i class="btn btn-outline-dark btn-circle btn-md m-1 bi bi-whatsapp"></i></a>
                <a href="tel:+972556695488" role="button" target="_">
                    <i class="btn btn-outline-dark btn-circle btn-md m-1 bi bi-telephone"></i></a>
                <a href="mailto:lracheli789@gmail.com" role="button" target="_">
                    <i class="btn btn-outline-dark btn-circle btn-md m-1 bi bi-envelope"></i></a>
            </section>
            <h5 class="text-center p-0">Developed and Designed By: </h5>
            <h5 class="text-center fw-bold pb-4">©Racheli Sasonkin 2022</h5>

            <div class="position-fixed myTop">
                <a href="#top">
                    <img class="" style={{ width: "10%" }} src={Top} alt="Go To Top" />
                </a>
            </div>
        </footer>
    )
}

export default Footer