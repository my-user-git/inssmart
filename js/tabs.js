document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.section-products__tab').forEach(function (TabsProducts) {
    TabsProducts.addEventListener('click', function (event) {
      let el = this
      el.classList.add('tab-active')
      document.querySelectorAll('.section-products__item').forEach(item => {
        if (item != el) {
          item.classList.remove('active')
        }
      })
      document.querySelectorAll('.section-products__tab').forEach(item => {
        if (item != el) {
          item.classList.remove('tab-active')
        }
      })

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.section-products__product-item').forEach(function (TabsProductsContent) {
        TabsProductsContent.classList.remove('active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('active')
    })
  })

  /* mobile tabs */

  const mediaQuery = window.matchMedia('(max-width: 700px)');

  if (mediaQuery.matches) {
    document.querySelector('#woman').addEventListener('click', function () {
      let el = this;
      el.classList.add('mobile-woman');
      document.querySelector('#man').classList.remove('mobile-man');
      document.querySelector('.section-products__product').style.gridArea = 'bottom';
    })

    document.querySelector('#man').addEventListener('click', function () {
      let el = this;
      el.classList.add('mobile-man');
      document.querySelector('#woman').classList.remove('mobile-woman');
      document.querySelector('.section-products__product').style.gridArea = 'center';
    })
  }


})

