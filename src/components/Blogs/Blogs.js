import React from 'react';

const Blogs = () => {
  return (
    <>
      <div className="mb-20">
        <h2 className="text-4xl mt-24 font-bold text-center text-purple-600 mb-5">
          Welcome To Blogs
        </h2>
        <div className="grid grid-cols-1 gap-5 place-items-center md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="card max-w-lg bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  1. How will you improve the performance of a React
                  Application?
                </h2>

                <p className="font-bold">Answer</p>
                <li>Keeping component state local where necessary</li>
                <li>
                  Memorizing React components to prevent unnecessary re-renders.
                </li>
                <li>Code-splitting in React using dynamic import()</li>
                <li>List virtualization in React.</li>
                <li>Lazy loading images in React.</li>
              </div>
            </div>
          </div>
          <div>
            <div className="card max-w-lg bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  2. What are the different ways to manage a state in a React
                  application?
                </h2>

                <p className="font-bold">Answer</p>
                <p>
                  Different Way to manage state in react application is using{' '}
                  <b>Context Api</b>, <b>Redux</b>,
                  <b>suing hooks like custom hook, react query etc.</b>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card max-w-lg bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  3. How does prototypical inheritance work?
                </h2>

                <p className="font-bold">Answer</p>
                <p>
                  The prototypical inheritance is a feature in JavaScript. It is
                  used to add method and properties in objects. It is a method
                  by which an object can inherit the properties and methods of
                  another object. Prototypical inheritance allows us to reuse
                  the properties or methods from one JavaScript object to
                  another object through a reference pointer function.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card max-w-lg bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  4. Why you do not set the state directly in React. For
                  example, if you have const [products, setProducts] =
                  useState([]). Why you do not set products = [...] instead, you
                  use the setProducts
                </h2>

                <p className="font-bold">Answer</p>
                <p>
                  In react application we do const [products, setProducts] =
                  useState([]) because it store the the state of a site. It
                  makes the render more efficient. and we can also pass this
                  state into other components easily. And we know that if any
                  change occur the ui react dom identify this through the state.
                  Thats why we use this syntax not products = [...] this.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card max-w-lg bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  5. You have an array of products. Each product has a name,
                  price, description, etc. How will you implement a search to
                  find products by name?
                </h2>

                <p className="font-bold">Answer</p>
                <p>
                  We have to do filter operation to search product by name. The
                  syntax given below.
                  <br />
                  <b>
                    const result = products.filter(product => product.name ===
                    name);
                    <br />
                    we will get the search result in the result variable.
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card max-w-lg bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  6. What is a unit test? Why should write unit tests?
                </h2>

                <p className="font-bold">Answer</p>
                <p>
                  Where individual units or components of a software are tested
                  it is called unit test. The purpose is to verify that each
                  unit of software code is working as expected. Unit testing is
                  an important step in the development process. Because unit
                  tests help to fix bugs earlier. It helps us to understand the
                  testing code base and enables them to make changes quickly.
                  Unit tests help with code re-use. Unit testing is done in
                  early development, then it saves our time also.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
