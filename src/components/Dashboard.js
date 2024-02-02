const Dashboard= () => {
  return (

<div>

          <div id="wrapper">

  <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
              <div class="brand-logo">
              <a href="index.html">
              </a>
          </div>
      <ul class="sidebar-menu do-nicescrol">
          <li class="sidebar-header"></li>
                  <li  class="active">
                  <a href="Dashboard.js" class="active">
                      <i class="zmdi zmdi-view-dashboard"></i> <span>Dashboard</span>
                  </a>
                  </li>
  
                  <li >
                  <a href="Culture.js" >
                      <i class="zmdi zmdi-invert-colors"></i> <span>Culture</span>
                  </a>
                  </li>

                  <li>
                  <a href="Validation.js">
                      <i class="zmdi zmdi-grid"></i> <span>Validation</span>
                  </a>
                  </li>
                  <li >
                  <a href="Login.js">
                      <i class="zmdi zmdi-lock"></i> <span>Log out</span>
                  </a>
                  </li>
      </ul>
  </div>
  </div>

  <section id="page">
<header> </header>
<nav></nav>
<main>
  <div id="bloc">
      <div class="co">
          <h1>Statistiques</h1>
      </div>

              
            <div class="row">
             <div class="col-12 col-lg-8 col-xl-8">
                 <div class="card-header">Weekly sales
                   <div class="card-action">
                     <div class="dropdown">
                      <i class="icon-options"></i>
                        <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="javascript:void();">Action</a>
                        <a class="dropdown-item" href="javascript:void();">Another action</a>
                        <a class="dropdown-item" href="javascript:void();">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:void();">Separated link</a>
                       </div>
                      </div>
                   </div>
                 </div>
                 <div class="card-body">
                    <ul class="list-inline">
                      <li class="list-inline-item"><i class="fa fa-circle mr-2 text-white"></i>New Visitor</li>
                      <li class="list-inline-item"><i class="fa fa-circle mr-2 text-light"></i>Old Visitor</li>
                    </ul>
                    <div class="chart-container-1">
                      <canvas id="chart1" ></canvas>
                    </div>
                 
                 <div class="row m-0 row-group text-center border-top border-light-3">
                   <div class="col-12 col-lg-4">
                     <div class="p-3">
                       <h5 class="mb-0">45.87M</h5>
                       <small class="mb-0">Overall Visitor <span> <i class="fa fa-arrow-up"></i> 2.43%</span></small>
                     </div>
                   </div>
                   <div class="col-12 col-lg-4">
                     <div class="p-3">
                       <h5 class="mb-0">15:48</h5>
                       <small class="mb-0">Visitor Duration <span> <i class="fa fa-arrow-up"></i> 12.65%</span></small>
                     </div>
                   </div>
                   <div class="col-12 col-lg-4">
                     <div class="p-3">
                       <h5 class="mb-0">245.65</h5>
                       <small class="mb-0">Pages/Visit <span> <i class="fa fa-arrow-up"></i> 5.62%</span></small>
                     </div>
                   </div>
                 </div>
                 
                </div>
             </div>
        
             <div class="col-12 col-lg-4 col-xl-4">
                   <div class="card-header">Weekly sales
                     <div class="card-action">
                     <div class="dropdown">
                     <a href="javascript:void();" class="dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown">
                      <i class="icon-options"></i>
                     </a>
                      <div class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="javascript:void();">Action</a>
                      <a class="dropdown-item" href="javascript:void();">Another action</a>
                      <a class="dropdown-item" href="javascript:void();">Something else here</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="javascript:void();">Separated link</a>
                       </div>
                      </div>
                     </div>
                   </div>
                   <div class="card-body">
                     <div class="chart-container-2">
                       <canvas id="chart2" ></canvas>
                      </div>
                  
                 </div>
                 <div class="table-responsive">
                  <table class="table align-items-center">
                    <tbody>
                      <tr>
                        <td><i class="fa fa-circle text-white mr-2"></i> Direct</td>
                        <td>$5856</td>
                      </tr>
                      <tr>
                        <td><i class="fa fa-circle text-light-1 mr-2"></i>Affiliate</td>
                        <td>$2602</td>
                      </tr>
                      <tr>
                        <td><i class="fa fa-circle text-light-2 mr-2"></i>E-mail</td>
                        <td>$1802</td>
                      </tr>
                      <tr>
                        <td><i class="fa fa-circle text-light-3 mr-2"></i>Other</td>
                        <td>$1105</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
             </div>
            
            </div>
            </div>

                 
</main>
      <footer>  </footer>
    </section>

    </div>

  );
};

export default Dashboard;
