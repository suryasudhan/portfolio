import React from "react";

function App() {
  let arrobj = [
    {
      title: "Project one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!",
    },
    {
      title: "Project two",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    },
    {
      title: "Project three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!",
    },
    {
      title: "Project four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    },
    {
      title: "Project five",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.",
    },
    {
      title: "Project six",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.",
    },
  ];

  return (
    <>
      <div className="container">
        {/* <!-- Page Heading --> */}
        <h1 className="my-4">
          Page Heading
          <small>Secondary Text</small>
        </h1>

        <div className="row">

          {/* ..................................................... */}
          
          {arrobj.map((element, index) => {
            return (
              <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                <div className="card h-100">
                  <a href="#">
                    <img
                      className="card-img-top"
                      src="https://via.placeholder.com/700x400"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">{element.title}</a>
                    </h4>
                    <p className="card-text">{element.description}</p>
                  </div>
                </div>

                {/* ...................................................... */}

              </div>
            );
          })}
        </div>
        {/* <!-- /.row --> */}
      </div>
    </>
  );
}

export default App;
