import products1 from '../images/products1.jpg';
import products2 from '../images/products2.jpg';
import products3 from '../images/products3.jpg';
import products4 from '../images/products4.jpg';
import products5 from '../images/products5.jpg';

function Products() {
  return (
    <div className="home">
      <div className="title">Our Products</div>

      <div className="row p-0">
        <img src={products1} className="imageFull" alt="p1" />
        <div className="col-sm-6 p-0">
            <img src={products2} className="imageFull" alt="p2" />
        </div>
        <div className="col-sm-6 p-0">
            <img src={products3} className="imageFull" alt="p3" />
        </div>
        <div className="w-100"></div>
        <div className="col-sm-6 p-0">
            <img src={products4} className="imageFull" alt="p4" />
        </div>
        <div className="col-sm-6 p-0">
            <img src={products5} className="imageFull" alt="p5" />
        </div>
      </div>
    </div>
  );
}

export default Products;
