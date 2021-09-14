import React from 'react';
import Layout from '@components/layout';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Home(props) {
  const { menus } = props;

  return (
    <Layout>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-md-3">
                <input type="text" className="form-control" id="search"
                       placeholder="Tìm lớp học"/>
              </div>
              <div className="col-md-3">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Thành Phố</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-2">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Quận / Huyện</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-2">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Phường / Xã</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <h1>Các trung tâm hàng đầu</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <div
                  className="d-flex flex-column justify-content-center align-items-center icon-container bg-success text-white mb-2">
                  <i className="fa fa-flask fa-5x mb-3 mt-5"/><span className="mb-4">Hands on Lab</span></div>
              </div>
              <div className="col-md-6 border-right">
                <div className="listing-title">
                  <h5>Getting started with docker on linux for Azure</h5>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-row align-items-center ratings"><span
                    className="mr-1 rating-number">4</span>
                    <div className="stars">
                      <i className="fa fa-star"/><i className="fa fa-star"/>
                      <i className="fa fa-star"/><i className="fa fa-star"/>
                    </div>
                    <span className="mr-2 text-black-50 number-ratings">(12342 ratings)</span>
                  </div>
                  <div className="level mr-2"><span>Level:</span><span className="font-weight-bold">Beginner</span>
                  </div>
                  <div className="level mr-1"><span>Time:</span><span className="font-weight-bold">1h 20m</span></div>
                </div>
                <div className="description">
                  <p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer...<br/></p>
                </div>
                <div className="tags mb-2"><span>Microsoft</span><span>Azure</span><span>Development</span></div>
              </div>
              <div className="d-flex col-md-3">
                <div className="d-flex flex-column justify-content-start user-profile w-100">
                  <div className="d-flex user"><img className="rounded-circle" src="https://i.imgur.com/6dOWqJu.jpg"
                                                    width={50}/>
                    <div className="about ml-1"><strong className="d-block text-black font-weight-bold">Jason
                      Hamza</strong><span>Cloud consultant</span></div>
                  </div>
                  <div className="progresses"><span>Designing</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Expertise</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Awareness</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div
                  className="d-flex flex-column justify-content-center align-items-center icon-container bg-success text-white mb-2">
                  <i className="fa fa-cloud fa-5x mb-3 mt-5"/><span className="mb-4">Hands on&nbsp; ARM</span></div>
              </div>
              <div className="col-md-6 border-right">
                <div className="listing-title">
                  <h5>Introduction to Azure Resource Manager</h5>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-row align-items-center ratings"><span
                    className="mr-1 rating-number">5</span>
                    <div className="stars"><i className="fa fa-star"/><i className="fa fa-star"/><i
                      className="fa fa-star"/><i className="fa fa-star"/></div>
                    <span className="mr-2 text-black-50 number-ratings">(2232 ratings)</span>
                  </div>
                  <div className="level mr-2"><span>Level:</span><span className="font-weight-bold">Advance</span></div>
                  <div className="level mr-1"><span>Time:</span><span className="font-weight-bold">2h 20m</span></div>
                </div>
                <div className="description">
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions...<br/></p>
                </div>
                <div className="tags mb-2">
                  <span>Microsoft</span><span>Azure</span><span>Advanced</span><span>Manager</span></div>
              </div>
              <div className="d-flex col-md-3">
                <div className="d-flex flex-column justify-content-start user-profile w-100">
                  <div className="d-flex user"><img className="rounded-circle" src="https://i.imgur.com/DdbCK7Q.jpg"
                                                    width={50}/>
                    <div className="about ml-1"><strong className="d-block text-black font-weight-bold">Simona
                      Jurich</strong><span>Cloud Architect</span></div>
                  </div>
                  <div className="progresses"><span>Designing</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Expertise</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Awareness</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div
                  className="d-flex flex-column justify-content-center align-items-center icon-container bg-success text-white mb-2">
                  <i className="fa fa-linux fa-5x mb-3 mt-5"/><span className="mb-4">Hands on&nbsp; Linux</span></div>
              </div>
              <div className="col-md-6 border-right">
                <div className="listing-title">
                  <h5>Cloud Messaging to Microsoft Azure&nbsp;</h5>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-row align-items-center ratings"><span
                    className="mr-1 rating-number">5</span>
                    <div className="stars"><i className="fa fa-star"/><i className="fa fa-star"/><i
                      className="fa fa-star"/><i className="fa fa-star"/></div>
                    <span className="mr-2 text-black-50 number-ratings">(232 ratings)</span>
                  </div>
                  <div className="level mr-2"><span>Level:</span><span className="font-weight-bold">Advance</span></div>
                  <div className="level mr-1"><span>Time:</span><span className="font-weight-bold">4h 10m</span></div>
                </div>
                <div className="description">
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions...<br/></p>
                </div>
                <div className="tags mb-2"><span>Microsoft</span><span>Azure</span><span>Linux</span><span>Nginx</span>
                </div>
              </div>
              <div className="d-flex col-md-3">
                <div className="d-flex flex-column justify-content-start user-profile w-100">
                  <div className="d-flex user"><img className="rounded-circle" src="https://i.imgur.com/Og6mhsh.jpg"
                                                    width={50}/>
                    <div className="about ml-1"><strong className="d-block text-black font-weight-bold">Maria
                      Snun</strong><span>Server Admin</span></div>
                  </div>
                  <div className="progresses"><span>Linux</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Apache</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Nginx</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h1>Các giáo viên hàng đầu</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <div
                  className="d-flex flex-column justify-content-center align-items-center icon-container bg-success text-white mb-2">
                  <i className="fa fa-flask fa-5x mb-3 mt-5"/><span className="mb-4">Hands on Lab</span></div>
              </div>
              <div className="col-md-6 border-right">
                <div className="listing-title">
                  <h5>Getting started with docker on linux for Azure</h5>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-row align-items-center ratings"><span
                    className="mr-1 rating-number">4</span>
                    <div className="stars"><i className="fa fa-star"/><i className="fa fa-star"/><i
                      className="fa fa-star"/><i className="fa fa-star"/></div>
                    <span className="mr-2 text-black-50 number-ratings">(12342 ratings)</span>
                  </div>
                  <div className="level mr-2"><span>Level:</span><span className="font-weight-bold">Beginner</span>
                  </div>
                  <div className="level mr-1"><span>Time:</span><span className="font-weight-bold">1h 20m</span></div>
                </div>
                <div className="description">
                  <p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer...<br/></p>
                </div>
                <div className="tags mb-2"><span>Microsoft</span><span>Azure</span><span>Development</span></div>
              </div>
              <div className="d-flex col-md-3">
                <div className="d-flex flex-column justify-content-start user-profile w-100">
                  <div className="d-flex user"><img className="rounded-circle" src="https://i.imgur.com/6dOWqJu.jpg"
                                                    width={50}/>
                    <div className="about ml-1"><strong className="d-block text-black font-weight-bold">Jason
                      Hamza</strong><span>Cloud consultant</span></div>
                  </div>
                  <div className="progresses"><span>Designing</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Expertise</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Awareness</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div
                  className="d-flex flex-column justify-content-center align-items-center icon-container bg-success text-white mb-2">
                  <i className="fa fa-cloud fa-5x mb-3 mt-5"/><span className="mb-4">Hands on&nbsp; ARM</span></div>
              </div>
              <div className="col-md-6 border-right">
                <div className="listing-title">
                  <h5>Introduction to Azure Resource Manager</h5>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-row align-items-center ratings"><span
                    className="mr-1 rating-number">5</span>
                    <div className="stars"><i className="fa fa-star"/><i className="fa fa-star"/><i
                      className="fa fa-star"/><i className="fa fa-star"/></div>
                    <span className="mr-2 text-black-50 number-ratings">(2232 ratings)</span>
                  </div>
                  <div className="level mr-2"><span>Level:</span><span className="font-weight-bold">Advance</span></div>
                  <div className="level mr-1"><span>Time:</span><span className="font-weight-bold">2h 20m</span></div>
                </div>
                <div className="description">
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions...<br/></p>
                </div>
                <div className="tags mb-2">
                  <span>Microsoft</span><span>Azure</span><span>Advanced</span><span>Manager</span></div>
              </div>
              <div className="d-flex col-md-3">
                <div className="d-flex flex-column justify-content-start user-profile w-100">
                  <div className="d-flex user"><img className="rounded-circle" src="https://i.imgur.com/DdbCK7Q.jpg"
                                                    width={50}/>
                    <div className="about ml-1"><strong className="d-block text-black font-weight-bold">Simona
                      Jurich</strong><span>Cloud Architect</span></div>
                  </div>
                  <div className="progresses"><span>Designing</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Expertise</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Awareness</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div
                  className="d-flex flex-column justify-content-center align-items-center icon-container bg-success text-white mb-2">
                  <i className="fa fa-linux fa-5x mb-3 mt-5"/><span className="mb-4">Hands on&nbsp; Linux</span></div>
              </div>
              <div className="col-md-6 border-right">
                <div className="listing-title">
                  <h5>Cloud Messaging to Microsoft Azure&nbsp;</h5>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <div className="d-flex flex-row align-items-center ratings"><span
                    className="mr-1 rating-number">5</span>
                    <div className="stars"><i className="fa fa-star"/><i className="fa fa-star"/><i
                      className="fa fa-star"/><i className="fa fa-star"/></div>
                    <span className="mr-2 text-black-50 number-ratings">(232 ratings)</span>
                  </div>
                  <div className="level mr-2"><span>Level:</span><span className="font-weight-bold">Advance</span></div>
                  <div className="level mr-1"><span>Time:</span><span className="font-weight-bold">4h 10m</span></div>
                </div>
                <div className="description">
                  <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions...<br/></p>
                </div>
                <div className="tags mb-2"><span>Microsoft</span><span>Azure</span><span>Linux</span><span>Nginx</span>
                </div>
              </div>
              <div className="d-flex col-md-3">
                <div className="d-flex flex-column justify-content-start user-profile w-100">
                  <div className="d-flex user"><img className="rounded-circle" src="https://i.imgur.com/Og6mhsh.jpg"
                                                    width={50}/>
                    <div className="about ml-1"><strong className="d-block text-black font-weight-bold">Maria
                      Snun</strong><span>Server Admin</span></div>
                  </div>
                  <div className="progresses"><span>Linux</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Apache</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                  <div className="progresses"><span>Nginx</span>
                    <div className="progress mt-1">
                      <div className="progress-bar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}
                           style={{ width: '50%' }}>50%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <h1>Mọi người nói về chúng tôi</h1>
        <div className="row">
          <div className="col-md-12">
            <div id="testimonial-slider" className="owl-carousel">
              <div className="testimonial">
                <span className="icon fa fa-quote-left"/>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet
                  elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
                  Praesent.
                </p>
                <div className="testimonial-content">
                  <div className="pic"><img width={90} src="/logo.png" alt=""/></div>
                  <h3 className="title">williamson</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
              <div className="testimonial">
                <span className="icon fa fa-quote-left"/>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet
                  elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
                  Praesent.
                </p>
                <div className="testimonial-content">
                  <div className="pic"><img width={90} src="/logo.png" alt=""/></div>
                  <h3 className="title">Kristina</h3>
                  <span className="post">Web Designer</span>
                </div>
              </div>
              <div className="testimonial">
                <span className="icon fa fa-quote-left"/>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet
                  elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
                  Praesent.
                </p>
                <div className="testimonial-content">
                  <div className="pic"><img width={90} src="/logo.png" alt=""/></div>
                  <h3 className="title">Steve Thomas</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
              <div className="testimonial">
                <span className="icon fa fa-quote-left"/>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet
                  elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
                  Praesent.
                </p>
                <div className="testimonial-content">
                  <div className="pic"><img width={90} src="/logo.png" alt=""/></div>
                  <h3 className="title">Steve Thomas</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
              <div className="testimonial">
                <span className="icon fa fa-quote-left"/>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet
                  elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque.
                  Praesent.
                </p>
                <div className="testimonial-content">
                  <div className="pic"><img width={90} src="/logo.png" alt=""/></div>
                  <h3 className="title">Steve Thomas</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
