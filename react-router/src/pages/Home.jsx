import "./home.css";

const Home = () => {
  function toggleDropdown(index) {
    var dropdownContent = document.querySelectorAll(".dropdown-content-2")[index];
    var dropdownBtn = document.querySelectorAll(".dropdown-btn")[index];

    dropdownBtn.classList.toggle("active");
    dropdownContent.style.display = dropdownBtn.classList.contains("active")
      ? "block"
      : "none";
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <div href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="button-container-2">
          <button className="button-2 login-button-2">Login</button>
          <button className="button-2 register-button-2">Register</button>
        </div>

        <div className="input-container">
          <input
            type="text"
            id="exampleInput"
            placeholder="Coin, Function, Announcment "
          ></input>
        </div>

        <a href="#services">
          <i className="fa-brands fa-btc"></i>Buy Crypto
        </a>
        <a href="#clients">
          <i className="fa-solid fa-chart-simple"></i>Markets
        </a>
        <button className="dropdown-btn" onClick={() => toggleDropdown(0)}>
          <div className="dropdown-btn-content">
          <span>
            <i className="fa-solid fa-money-bill-trend-up"></i>
            Trade
          </span>
          <i className="fa-solid fa-angle-down"></i>
          </div>
        </button>
        <div className="dropdown-content-2">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button className="dropdown-btn" onClick={() => toggleDropdown(1)}>
          <div className="dropdown-btn-content">
          <span>
            <i className="fa-solid fa-book-atlas"></i>
            Futures
          </span>
          <i className="fa-solid fa-angle-down"></i>
          </div>
        </button>
        <div className="dropdown-content-2">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <a href="#contact">
          <i className="fa-solid fa-earth-asia"></i>Earn
        </a>
        <button className="dropdown-btn" onClick={() => toggleDropdown(2)}>
          <div className="dropdown-btn-content">

          <span>
            <i className="fa-solid fa-book-open"></i>
            Square
          </span>
          <i className="fa-solid fa-angle-down"></i>
          </div>
        </button>
        <div className="dropdown-content-2">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <button className="dropdown-btn" onClick={() => toggleDropdown(3)}>
          <div className="dropdown-btn-content">

          <span>
            <i className="fa-solid fa-table-cells-large"></i>
            More
          </span>
          <i className="fa-solid fa-angle-down"></i>
          </div>
        </button>
        <div className="dropdown-content-2">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <a href="#">
          <i className="fa-solid fa-headset"></i>24/7 Chat Support
        </a>
        <a href="#">
          <i className="fa-solid fa-earth-asia"></i>Download
        </a>
        <a href="#">
          <i className="fa-solid fa-globe"></i>English
        </a>
        <a href="#">
          <i className="fa-solid fa-dollar-sign"></i>USD
        </a>
      </div>
      <span onClick={openNav}>
        <i className="fa-solid fa-bars"></i>
      </span>
    </div>
  );
};

export default Home;
