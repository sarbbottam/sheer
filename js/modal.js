(function() {
  /*
   * purpose of this js file is to show and hide modal
   * so the styles of the modal can be verified
   * this script is far from perfection
   */
  var body = document.body;
  var container = document.querySelector('.container');
  var modal = document.querySelector('.modal');
  var showModalButton = document.querySelector('#show-modal');
  var hideModalButtom = document.querySelector('#hide-modal');

  showModalButton.addEventListener('click', function() {
    body.classList.add('modal-visible');
    container.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.remove('hide');
    modal.classList.add('show');
  });

  hideModalButtom.addEventListener('click', function() {
    body.classList.remove('modal-visible');
    container.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('show');
    modal.classList.add('hide');
  });

}())
