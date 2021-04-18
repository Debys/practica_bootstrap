
var modalWrap = null;
const showModal = (
    albumkey
) => {
    if(modalWrap !== null) {
        modalWrap.remove();
    }

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Estás escuchando </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="row justify-content-center">
                            <iframe src="https://open.spotify.com/embed/album/${albumkey}" width="480" height="480" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </p>
                    </div
                </div>
            </div>
        </div>
    `;

        document.body.append(modalWrap);

        var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
        modal.show();

}